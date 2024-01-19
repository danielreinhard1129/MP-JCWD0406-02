import prisma from '@/prisma';

export const updatePointById = async (pointByUserId: number) => {
  try {
    const result = await prisma.pointBalance.updateMany({
      where: { userId: pointByUserId },
      data: { point_balance: 0 },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
