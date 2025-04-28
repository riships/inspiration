import puppeteer from 'puppeteer';

let browser; // Global browser instance

async function extractInternalLinks(url) {
    if (!browser) {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--window-size=1920x1080',
            ],
            defaultViewport: {
                width: 1920,
                height: 1080,
            }
        });
    }

    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        const links = await page.$$eval('a', (anchors) =>
            anchors
                .map(a => a.href)
                .filter(href => {
                    if (!href) return false;
                    try {
                        const urlObj = new URL(href);
                        return urlObj.origin === window.location.origin;
                    } catch (e) {
                        return false;
                    }
                })
        );

        const uniqueLinks = [...new Set(links)];
        await page.close();
        return uniqueLinks;

    } catch (error) {
        await page.close();
        return [];
    }
}

async function extractDetailsWithTheUrl(url) {
    try {
        if (!browser) {
            browser = await puppeteer.launch({
                headless: true, // Headless mode
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu',
                    '--window-size=1920x1080',
                ],
                defaultViewport: {
                    width: 1920,
                    height: 1080,
                }
            });
        }

        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Extract details from the page (e.g., title, description)
        const details = await page.evaluate(() => {
            const title = document.title;
            const description = document.querySelector('meta[name="description"]')?.content || '';

            return {
                title,
                description,
                websiteLink: window.location.href,
                colorScheme: getComputedStyle(document.body).backgroundColor,
                fontFamily: getComputedStyle(document.body).fontFamily,
                techStack: Array.from(document.querySelectorAll('script[src]')).map(script => {
                    script.src = script.src.replace(/.*\//, ''); // Remove the domain part
                    return script.src.split('/').pop(); // Get the last part of the URL
                }
                ).filter(src => src && !src.includes('http')).slice(0, 5), // Limit to 5 scripts
                catergories: Array.from(document.querySelectorAll('meta[name="keywords"]')).map(meta => meta.content).join(', '),
                niche: Array.from(document.querySelectorAll('meta[name="keywords"]')).map(meta => meta.content).join(', '),
                tags: Array.from(document.querySelectorAll('meta[name="keywords"]')).map(meta => meta.content).join(', '),
                slug: window.location.pathname.split('/').pop(), // Get the last part of the URL path
                metaTitle: document.querySelector('meta[name="title"]')?.content || '',
                metaDescription: document.querySelector('meta[name="description"]')?.content || '',
                pageViews: document.querySelector('meta[name="pageviews"]')?.content || 0,
            };
        });

        let sanitizedTitle = details.title.toLowerCase().replace(/\s+/g, "_").replace(/[^\w-]+/g, "");

        // Generate absolute paths for the desktop and mobile screenshots
        let absolutePathForDesktopScreenshot = `uploads/${sanitizedTitle}_desktop.png`;
        let absolutePathForMobileScreenshot = `uploads/${sanitizedTitle}_mobile.png`;
        // Take a screenshot of the desktop view
        await page.setViewport({ width: 1920, height: 1080 }); // Desktop view
        await page.screenshot({ path: absolutePathForDesktopScreenshot });

        // Take a screenshot of the mobile view
        await page.setViewport({ width: 375, height: 667 }); // Mobile view (iPhone 6/7/8)
        await page.screenshot({ path: absolutePathForMobileScreenshot });

        await page.close();

        return {
            ...details,
            desktopScreenshotUrl: absolutePathForDesktopScreenshot,
            mobileScreenshotUrl: absolutePathForMobileScreenshot,
        }; // Return the extracted details

    } catch (error) {
        return error;
    }
}

async function closeBrowser() {
    if (browser) {
        await browser.close();
        browser = null;
    }
}

export {
    extractInternalLinks,
    closeBrowser,
    extractDetailsWithTheUrl,
}
