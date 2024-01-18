import prisma from '@/prisma';

export const getUserById = async (userId: number) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userReward: {
          include: {
            reward: true,
          },
        },
        point_balance: {
          where: {
            expiresAt: {
              gte: new Date(),
            },
          },
        },
        userVoucher: {
          include: {
            voucher: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
