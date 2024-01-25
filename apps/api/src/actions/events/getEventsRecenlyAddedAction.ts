import { getEventsByRecentlyAdded } from '@/repositories/events/getEventsByRecentlyAdded';

export const getEventsByRecentlyAddedAction = async () => {
  try {
    const result = await getEventsByRecentlyAdded();

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
