import { getRandomEvents } from '@/repositories/events/getRandomEvents';

export const getRandomEventsAction = async () => {
  try {
    const result = await getRandomEvents();

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
