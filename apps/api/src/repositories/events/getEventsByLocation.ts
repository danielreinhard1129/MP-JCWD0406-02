import prisma from '@/prisma';

export const getEventsByLocation = async (location: string) => {
  try {
    const result = await prisma.event.findMany({
      where: {
        // location,
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
