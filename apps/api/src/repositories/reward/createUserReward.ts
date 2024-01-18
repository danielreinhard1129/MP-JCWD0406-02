import prisma from '@/prisma';

export const createUserReward = async (
  userId: number,
  rewardId: number,
  expiredDate: Date,
) => {
  const result = await prisma.userReward.create({
    data: {
      userId: userId,
      rewardId,
      expiresAt: expiredDate,
    },
  });
  return result;
};
