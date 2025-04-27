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

async function closeBrowser() {
    if (browser) {
        await browser.close();
        browser = null;
    }
}

export {
    extractInternalLinks,
    closeBrowser,
}
