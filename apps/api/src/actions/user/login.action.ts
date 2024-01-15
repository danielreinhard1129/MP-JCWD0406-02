import { excludeFields } from '@/helpers/excludeFields';
import { comparePasswords } from '@/lib/bcrypt';
import { createToken } from '@/lib/jwt';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { IUser } from '@/types/user.type';

export const loginAction = async (data: IUser) => {
  try {
    const { email, password } = data;

    const user = await getUserByEmail(email);

    if (!user) {
      return {
        message: 'Account not found',
        status: 400,
      };
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return {
        message: 'Invalid password',
        status: 400,
      };
    }

    const datawithoutPassword = excludeFields(user, ['password']);

    const token = createToken({ email: user.email });

    return {
      message: 'Login Success',
      status: 200,
      data: datawithoutPassword,
      token,
    };
  } catch (error) {
    throw error;
  }
};
