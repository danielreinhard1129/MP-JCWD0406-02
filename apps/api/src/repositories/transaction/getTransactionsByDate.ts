import prisma from '@/prisma';

export const getTransactionsBydate = async (date: Date) => {
  try {
    const result = await prisma.transaction.aggregate({
      _sum: {
        total: true,
      },
      where: {
        createdAt: {
          gt: date,
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
