import prisma from '@/prisma';

export const getTransactionByUserId = async (userId: number) => {
  try {
    const result = await prisma.event.findMany({
      where: { userId },
      include: {
        transaction: { include: { user: true, status: true } },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
