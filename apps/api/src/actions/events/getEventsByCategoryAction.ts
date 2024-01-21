import { getEventsByCategory } from '@/repositories/events/getEventsByCategory';

export const getEventsByCategoryAction = async (category: string) => {
  try {
    const result = await getEventsByCategory(category);

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
