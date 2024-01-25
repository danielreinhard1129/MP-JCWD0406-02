import prisma from '@/prisma';

export const getEventByTitle = async (title: string) => {
  try {
    const result = await prisma.event.findMany({
      where: { title },
      include: {
        user: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
