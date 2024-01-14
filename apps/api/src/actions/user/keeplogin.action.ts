import { excludeFields } from '@/helpers/excludeFields';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';

export const keepLoginAction = async (email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) throw new Error('Account not found');

    const datawithoutPassword = excludeFields(user, ['password']);

    return {
      message: 'Keeplogin success',
      status: 200,
      data: datawithoutPassword,
    };
  } catch (error) {
    throw error;
  }
};
