import { hashPassword } from '@/lib/bcrypt';
import { createPoint } from '@/repositories/pointbalance/createPoint';
import { createUserReward } from '@/repositories/reward/createUserReward';
import { createUser } from '@/repositories/user/createUser';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { getUserByReferralNumber } from '@/repositories/user/getUserByReferralNumber';
import { IUser } from '@/types/user.type';
import { v4 as uuidv4 } from 'uuid';

export const registerAction = async (data: IUser, referralCode: string) => {
  try {
    const generateReferralNumber: string = uuidv4().substring(0, 8);

    const user = await getUserByEmail(data.email);

    if (user) throw new Error('Email already exist');

    const hashedPassword = await hashPassword(data.password);
    data.password = hashedPassword;

    const createRegister = await createUser(data, generateReferralNumber);

    const referralUser = await getUserByReferralNumber(referralCode);

    if (referralUser) {
      const pointBalance = 10000;
      const expiredDate = new Date();
      expiredDate.setMonth(expiredDate.getMonth() + 3);

      await createPoint(referralUser.id, pointBalance, expiredDate);

      const rewardId = 1;
      expiredDate.setMonth(expiredDate.getMonth() + 3);
      await createUserReward(createRegister.id, rewardId, expiredDate);
    }

    return {
      message: 'Register success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
