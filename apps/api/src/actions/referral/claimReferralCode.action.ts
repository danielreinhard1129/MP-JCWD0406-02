import { getUserByReferralNumber } from '@/repositories/user/getUserByReferralNumber';

export const claimReferralCodeAction = async (referralCode: string) => {
  try {
    const result = await getUserByReferralNumber(referralCode);

    if (!result) throw new Error('Referral code not available');

    return {
      messege: 'Claim referral code success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
