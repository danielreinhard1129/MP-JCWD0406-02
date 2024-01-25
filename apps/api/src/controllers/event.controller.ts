import { getEventByIdAction } from '@/actions/event/getEventById.action';
import { getEventByTitleAction } from '@/actions/event/getEventByTitle.action';
import { getEventAction } from '@/actions/event/getEvents.action';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventAction();
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventByTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const title = req.body.title;
      const result = await getEventByTitleAction(title);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventById(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.body;
      const result = await getEventByIdAction(userId);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
