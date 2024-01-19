import prisma from '@/prisma';

export const deleteUserRewardById = async (userRewardId: number) => {
  try {
    const result = await prisma.userReward.delete({
      where: { id: userRewardId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
