import { getAllEventsAction } from '@/actions/events/getAllEventsAction';
import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { getEventsByLocationAction } from '@/actions/events/getEventByLocationAction';
import { getEventsByCategoryAction } from '@/actions/events/getEventsByCategoryAction';
import { getEventsByRecentlyAddedAction } from '@/actions/events/getEventsRecenlyAddedAction';
import { getRandomEventsAction } from '@/actions/events/getRandomEventsAction';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllEvents = await getAllEventsAction();

      res.status(getAllEvents.status).send(getAllEvents);
    } catch (error) {
      next(error);
    }
  }

  async getRandomEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const getRandom = await getRandomEventsAction();

      res.status(getRandom.status).send(getRandom);
    } catch (error) {
      next(error);
    }
  }

  async getRecentlyAddedEvents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const recentlyAddedEvents = await getEventsByRecentlyAddedAction();

      res.status(recentlyAddedEvents.status).send(recentlyAddedEvents);
    } catch (error) {
      next(error);
    }
  }

  async getEventById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getEventByIdAction(Number(id));

      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.query;

      if (!category) {
        return res.status(400).send({
          message: 'please provide category',
        });
      }

      const events = await getEventsByCategoryAction(category as string);

      res.status(events.status).send(events);
    } catch (error) {
      next(error);
    }
  }

  async getEventsByLocation(req: Request, res: Response, next: NextFunction) {
    try {
      const { location } = req.query;
      const eventsLocation = await getEventsByLocationAction(
        location as string,
      );

      res.status(eventsLocation.status).send(eventsLocation);
    } catch (error) {
      next(error);
    }
  }
}
