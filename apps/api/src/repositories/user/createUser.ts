import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const createUser = async (
  data: IUser,
  generateReferralNumber: string,
) => {
  try {
    const { email, name, password, roleId } = data;
    const result = await prisma.user.create({
      data: {
        email,
        name,
        password,
        referral_number: generateReferralNumber,
        roleId,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
