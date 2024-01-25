import prisma from '@/prisma';

export const getRandomEvents = async () => {
  try {
    const allEvents = await prisma.event.findMany({
      include: {
        user: true,
        location: true,
      },
    });
    const shuffledEvents = allEvents.sort(() => Math.random() - 0.5);

    const randomEvents = shuffledEvents;

    return randomEvents;
  } catch (error) {
    throw error;
  }
};
