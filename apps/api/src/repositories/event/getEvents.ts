import prisma from '@/prisma';

export const getEvents = async () => {
  try {
    const result = await prisma.event.findMany();
    return result;
  } catch (error) {
    throw error;
  }
};
