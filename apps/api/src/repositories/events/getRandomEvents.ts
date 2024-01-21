import prisma from '@/prisma';

export const getRandomEvents = async () => {
  try {
    const allEvents = await prisma.event.findMany({
      include: {
        user: true,
      },
    });
    const shuffledEvents = allEvents.sort(() => Math.random() - 0.5);

    const randomEvents = shuffledEvents.slice(0, 3);

    return randomEvents;
  } catch (error) {
    throw error;
  }
};
