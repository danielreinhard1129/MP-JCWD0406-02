import { getEventByTitle } from '@/repositories/event/getEventByTitle';

export const getEventByTitleAction = async (title: string) => {
  try {
    const result = await getEventByTitle(title);
    return {
      message: 'get event by title success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
