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
    this.router.post('/filter/title', this.eventController.getEventByTitle);
    this.router.post('/filter/userid', this.eventController.getEventById);
  }

  getRoutes(): Router {
    return this.router;
  }
}
