import prisma from '@/prisma';

export const createUserReward = async (
  userId: number,
  rewardId: number,
  expiredDate: Date,
) => {
  try {
    const result = await prisma.userReward.create({
      data: {
        userId: userId,
        rewardId,
        expiresAt: expiredDate,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
