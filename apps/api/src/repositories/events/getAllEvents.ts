import prisma from '@/prisma';

export const getAllEvents = async () => {
  try {
    const result = await prisma.event.findMany({
      orderBy: {
        id: 'desc',
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
