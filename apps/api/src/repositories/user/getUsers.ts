import prisma from '@/prisma';

export const getUsers = async () => {
  try {
    const result = await prisma.user.findMany({
      include: {
        role: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
