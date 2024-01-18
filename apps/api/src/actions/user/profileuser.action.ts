import { getUserById } from '@/repositories/user/getUserById';

export const profileUserAction = async (userId: number) => {
  try {
    const result = await getUserById(userId);
    return {
      message: 'get profile user success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
