import { TransactionController } from '@/controllers/transaction.controller';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/userid',
      this.transactionController.getTransactionByuserId,
    );
    this.router.patch('/success', this.transactionController.proofTransaction);
    this.router.patch('/failed', this.transactionController.failedTransaction);
    this.router.get(
      '/bydate',
      this.transactionController.getTransactionsByDate,
    );
  }

  getRoutes(): Router {
    return this.router;
  }
}
