import prisma from '@/prisma';

export const getEventsByCategory = async (category: string) => {
  try {
    const result = await prisma.event.findMany({
      where: {
        category,
      },
      include: {
        user: true,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};
