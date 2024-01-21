import { getEventById } from '@/repositories/events/getEventById';

export const getEventByIdAction = async (eventId: number) => {
  try {
    const result = await getEventById(eventId);

    if (result) {
      return {
        status: 200,
        message: 'success',
        data: result,
      };
    } else {
      return {
        status: 404,
        message: 'Event not found',
        data: null,
      };
    }
  } catch (error) {
    throw error;
  }
};
