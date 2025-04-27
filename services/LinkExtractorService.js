import { extractInternalLinks, closeBrowser } from "../utils/puppeteerHelper.js";

export const LinkExtractorService = async (url) => {
    try {
        const links = await extractInternalLinks(url);

        // Filter out any invalid or empty links
        const validLinks = links.filter(link => link && typeof link === 'string' && link.trim().length > 0);

        // Return unique links only
        return [...new Set(validLinks)];

    } catch (error) {
        throw new Error(`Failed to extract links: ${error.message}`);
    } finally {
        // Ensure browser is always closed
        try {
            await closeBrowser();
        } catch (error) {
            console.error('Error closing browser:', error.message);
        }
    }
};