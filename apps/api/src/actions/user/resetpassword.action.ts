import { hashPassword } from '@/lib/bcrypt';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { updateUser } from '@/repositories/user/updateUser';

interface Data {
  password: string;
  confirmPassword: string;
}

export const resetPasswordAction = async (email: string, data: Data) => {
  try {
    const { password } = data;

    const user = await getUserByEmail(email);

    if (!user) throw new Error('Account not found');

    const hashedPassword = await hashPassword(password);

    await updateUser(email, { password: hashedPassword });

    return {
      message: 'Reset password success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
