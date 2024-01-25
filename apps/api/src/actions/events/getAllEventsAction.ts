import { getAllEvents } from '@/repositories/events/getAllEvents';

export const getAllEventsAction = async (page: number, pageSize: number) => {
  try {
    const result = await getAllEvents(page, pageSize);

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
