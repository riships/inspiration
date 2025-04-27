import prisma from 'prismaClient.js';

export const createInspiration = async (data) => {
    try {
        // Validate the data before creating
        if (!data.title) {
            throw new Error('Title and content are required');
        }
        if (!data.description) {
            throw new Error('Description is required');
        }
        if (data.description.length > 300) {
            throw new Error('Description cannot exceed 300 characters');
        }
        if (!data.websiteLink) {
            throw new Error('Website URL is required');
        }
        // Check if the inspiration already exists
        const existingInspiration = await prisma.inspiration.findUnique({
            where: {
                title: data.title,
            },
        });
        if (existingInspiration) {
            throw new Error('Inspiration with this title already exists');
        }
        // Create the new inspiration
        // Assuming data contains the necessary fields for creating an inspiration
        // Adjust the data object as per your schema
        const inspiration = await prisma.inspiration.create({
            data,
        });
        return inspiration;
    } catch (error) {
        throw new Error('Error creating inspiration: ' + error.message);
    }
}




