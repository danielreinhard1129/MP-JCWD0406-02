import { createReview } from '@/repositories/review/createReview';
import { IReview } from '@/types/event.type';

export const createReviewAction = async (data: IReview) => {
  try {
    const review = await createReview(data);
    return {
      status: 200,
      message: 'Review created successfully',
      data: review,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
