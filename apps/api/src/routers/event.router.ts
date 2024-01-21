import { EventController } from '@/controllers/event.controller';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEvents);
    this.router.get('/random-events', this.eventController.getRandomEvents);
    this.router.get(
      '/recently-added',
      this.eventController.getRecentlyAddedEvents,
    );
    this.router.get(
      '/filter/category',
      this.eventController.getEventsByCategory,
    );
    this.router.get(
      '/filter/location',
      this.eventController.getEventsByLocation,
    );
    this.router.get('/:id', this.eventController.getEventById);
  }

  getRouter(): Router {
    return this.router;
  }
}
