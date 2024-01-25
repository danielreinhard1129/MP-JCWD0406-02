import { getEventById } from '@/repositories/event/getEventById';

export const getEventByIdAction = async (userId: number) => {
  try {
    const result = await getEventById(userId);
    return {
      message: 'get event by id success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
