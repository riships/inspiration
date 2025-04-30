import prisma from '../prismaClient.js';

export const createInspiration = async (data) => {
    try {
        // Validate the data before creating
        if (!data) {
            errorHandler('Data is required');
        }

        if (!data.title) {
            return { success: false, message: 'Title is required' };
        }
        if (!data.description) {
            return { success: false, message: 'Description is required' };
        }
        if (data.description.length > 300) {
            return { success: false, message: 'Description should not exceed 300 characters' };
        }
        if (!data.websiteLink) {
            return { success: false, message: 'Website link is required' };
        }

        // Adjust the data object as per your schema and create the inspiration
        const inspiration = await prisma.inspiration.create({
            data,
        });

        return { success: true, data: inspiration };
    } catch (error) {
        return { success: false, message: 'An error occurred while creating inspiration', error: error.message || error };
    }
};

export const getInspiration = async () => {
    try {
        const inspirations = await prisma.inspiration.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return { success: true, data: inspirations };
    } catch (error) {
        return { success: false, message: 'An error occurred while fetching inspirations', error: error.message || error };
    }
}
export const getInspirationBySlug = async (slug) => {
    try {
        const inspiration = await prisma.inspiration.findUnique({
            where: {
                slug,
            },
        });
        if (!inspiration) {
            return { success: false, message: 'Inspiration not found' };
        }
        return { success: true, data: inspiration };
    } catch (error) {
        return { success: false, message: 'An error occurred while fetching the inspiration', error: error.message || error };
    }
}
