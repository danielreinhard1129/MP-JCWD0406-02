import { hashPassword } from '@/lib/bcrypt';
import { createUser } from '@/repositories/user/createUser';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { IUser } from '@/types/user.type';
import { v4 as uuidv4 } from 'uuid';

export const registerAction = async (data: IUser) => {
  try {
    const generateReferralNumber: string = uuidv4().substring(0, 8);

    const user = await getUserByEmail(data.email);

    if (user) throw new Error('Email already exist');

    const hashedPassword = await hashPassword(data.password);
    data.password = hashedPassword;

    await createUser(data, generateReferralNumber);

    return {
      message: 'Register success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
