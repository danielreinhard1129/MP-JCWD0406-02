import { createReviewAction } from '@/actions/review/createReviewAction';
import { NextFunction, Request, Response } from 'express';

export class ReviewController {
  async createReview(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await createReviewAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
