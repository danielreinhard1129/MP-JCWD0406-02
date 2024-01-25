import prisma from '@/prisma';

export const statusTransaction = async (uuid: string, statusId: number) => {
  try {
    const result = await prisma.transaction.update({
      where: { uuid },
      data: { statusId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
