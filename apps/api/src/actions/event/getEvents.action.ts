import { getEvents } from '@/repositories/event/getEvents';

export const getEventAction = async () => {
  try {
    const result = await getEvents();
    return {
      message: 'get events success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
