import prisma from '@/prisma';

export const getUserById = async (userId: number) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: true,
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
          where: {
            isUse: false,
          },
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
