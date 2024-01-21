import { getAllEvents } from '@/repositories/events/getAllEvents';

export const getAllEventsAction = async () => {
  try {
    const result = await getAllEvents();

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
