import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const createUser = async (
  data: IUser,
  generateReferralNumber: string,
) => {
  try {
    const { email, fullName, password, roleId } = data;
    const result = await prisma.user.create({
      data: {
        email,
        fullName,
        password,
        referral_number: generateReferralNumber,
        roleId
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
