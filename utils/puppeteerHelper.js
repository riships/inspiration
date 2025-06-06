import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

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
                '--disable-features=IsolateOrigins,site-per-process',
                '--disable-web-security'
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
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract details from the page (e.g., title, description)
        const details = await page.evaluate(() => {
            const metaDescription = document.querySelector('meta[name="description"]')?.content || '';

            return {
                title: document.title,
                description: metaDescription,
                websiteLink: window.location.href,
                colorScheme: getComputedStyle(document.documentElement).getPropertyValue('--background-color') || getComputedStyle(document.body).backgroundColor,
                techStack: Array.from(document.querySelectorAll('script[src]'))
                    .map(script => script.src.split('/').pop())
                    .filter(src => src && !src.startsWith('chunk-'))
                    .slice(0, 5),
                categories: Array.from(document.querySelectorAll('meta[name="keywords"]'))
                    .flatMap(meta => meta.content.split(','))
                    .map(keyword => keyword.trim())
                    .filter(Boolean),
                niche: Array.from(document.querySelectorAll('meta[name="keywords"]'))
                    .map(meta => meta.content)
                    .join(', '),
                slug: window.location.pathname.replace(/\/$/, '').split('/').pop(),
                metaTitle: document.querySelector('meta[name="title"]')?.content || '',
                metaDescription: metaDescription,
                pageViews: document.querySelector('meta[name="pageviews"]')?.content || 0,
            };
        });

        let sanitizedTitle = details.title.toLowerCase().replace(/\s+/g, "_").replace(/[^\w-]+/g, "");

        // unsure about the path to save the screenshots, so using a relative path for now
        const uploadsDir = path.join(process.cwd(), 'uploads'); // Adjust this path as needed
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }
    

        // Generate absolute paths for the desktop and mobile screenshots
        let absolutePathForDesktopScreenshot = `${uploadsDir}/${sanitizedTitle}_desktop.png`;
        let absolutePathForMobileScreenshot = `${uploadsDir}/${sanitizedTitle}_mobile.png`;
        
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
