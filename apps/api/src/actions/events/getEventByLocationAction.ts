import { getEventsByLocation } from '@/repositories/events/getEventsByLocation';

export const getEventsByLocationAction = async (location: string) => {
  try {
    const result = await getEventsByLocation(location);

    return {
      status: 200,
      message: 'success',
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
