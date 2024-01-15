import prisma from '@/prisma';
import { Iuser } from '@/types/user.type';

export const updateUser = async (email: string, data: Partial<Iuser>) => {
  try {
    const result = await prisma.user.update({ data, where: { email } });
    return result;
  } catch (error) {
    throw error;
  }
};
