import prisma from '@/prisma';

export const getEventById = async (id: number) => {
  try {
    const result = await prisma.event.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
        location: true,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};
