import { IReview } from '@/types/event.type';
import prisma from '@/prisma';

export const createReview = async (data: IReview) => {
  try {
    const { rating, review, eventId, userId } = data;
    const result = await prisma.review.create({
      data: {
        rating,
        review,
        eventId,
        userId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
