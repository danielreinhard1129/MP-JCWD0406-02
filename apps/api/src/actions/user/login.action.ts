import { excludeFields } from '@/helpers/excludeFields';
import { comparePasswords } from '@/lib/bcrypt';
import { createToken } from '@/lib/jwt';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { IUser } from '@/types/user.type';

export const loginAction = async (data: IUser) => {
  try {
    const { email, password } = data;

    const user = await getUserByEmail(email);

    if (!user) throw new Error('Account not found');

    const isPasswordValid = await comparePasswords(
      password,
      user?.password as string,
    );

    if (!isPasswordValid) throw new Error('Invalid password');

    const datawithoutPassword = excludeFields(user, ['password']);

    const token = createToken({ email: user?.email, roleId: user?.roleId });

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
