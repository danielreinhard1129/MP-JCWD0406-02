import prisma from '@/prisma';

export const getEventById = async (eventId: number) => {
  try {
    const result = await prisma.event.findUnique({
      where: {
        id: eventId,
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
