import prisma from '@/prisma';

export const getEventsByRecentlyAdded = async () => {
  try {
    const result = await prisma.event.findMany({
      orderBy: {
        createdAt: 'desc',
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
