import prisma from '../prismaClient.js';

export const createInspiration = async (data) => {
    try {
        // Validate the data before creating
        if (!data) {
            return { success: false, message: 'Data is required' };
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

        // Check if the inspiration already exists
        const existingInspiration = await prisma.inspiration.findUnique({
            where: {
                title: data.title,
            },
        });
        if (existingInspiration) {
            return { success: false, message: 'Inspiration with this title already exists' };
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
