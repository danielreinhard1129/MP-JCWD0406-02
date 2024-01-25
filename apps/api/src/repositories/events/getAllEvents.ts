import prisma from '@/prisma';

export const getAllEvents = async (page: number, pageSize: number) => {
  try {
    console.log('page:', page);
    console.log('pageSize:', pageSize);

    const result = await prisma.event.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        user: true,
        location: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return result;
  } catch (error) {
    throw error;
  }
};
