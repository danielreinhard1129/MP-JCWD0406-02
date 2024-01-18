import prisma from '@/prisma';

export const getUserByReferralNumber = async (referralCode: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { referral_number: referralCode },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
