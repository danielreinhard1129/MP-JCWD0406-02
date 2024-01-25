
import { getAllEventsAction } from '@/actions/events/getAllEventsAction';
import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { getEventsByLocationAction } from '@/actions/events/getEventByLocationAction';
import { getEventsByCategoryAction } from '@/actions/events/getEventsByCategoryAction';
import { getEventsByRecentlyAddedAction } from '@/actions/events/getEventsRecenlyAddedAction';
import { getRandomEventsAction } from '@/actions/events/getRandomEventsAction';

import { getEventByIdAction } from '@/actions/event/getEventById.action';
import { getEventByTitleAction } from '@/actions/event/getEventByTitle.action';
import { getEventAction } from '@/actions/event/getEvents.action';

import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {

      const page = Number((req.query.page as string) || 1);
      const pageSize = Number((req.query.pageSize as string) || 4);
      const getAllEvents = await getAllEventsAction(page, pageSize);

      res.status(getAllEvents.status).send(getAllEvents);

      const result = await getEventAction();
      return res.status(result.status).send(result);

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

      const { userId } = req.body;
      const result = await getEventByIdAction(userId);
      return res.status(result.status).send(result);

    } catch (error) {
      next(error);
    }
  }
}
