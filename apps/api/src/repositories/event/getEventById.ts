import prisma from '@/prisma';

export const getEventById = async (userId: number) => {
  try {
    const result = await prisma.event.findMany({
      where: { userId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
