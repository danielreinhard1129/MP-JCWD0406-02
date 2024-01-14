import prisma from '@/prisma';
import { Iuser } from '@/types/user.type';

export const createUser = async (
  data: Iuser,
  generateReferralNumber: string,
) => {
  try {
    const { email, fullName, password, role } = data;
    const result = await prisma.user.create({
      data: {
        email,
        fullName,
        password,
        referral_number: generateReferralNumber,
        role: {
          create: {
            role: role,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
