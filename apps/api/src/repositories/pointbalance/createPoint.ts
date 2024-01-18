import prisma from '@/prisma';

export const createPoint = async (
  userId: number,
  pointBalance: number,
  expiredDate: Date,
) => {
  try {
    const result = await prisma.pointBalance.create({
      data: {
        userId: userId,
        point_balance: pointBalance,
        expiresAt: expiredDate,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
