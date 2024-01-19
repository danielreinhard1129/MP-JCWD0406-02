import prisma from '@/prisma';

export const updateUserVoucherById = async (userVoucherId: number) => {
  try {
    const result = await prisma.userVoucher.update({
      where: { id: userVoucherId },
      data: { isUse: true },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
