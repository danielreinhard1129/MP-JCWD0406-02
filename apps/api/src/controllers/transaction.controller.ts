import { failedTransactionAction } from '@/actions/transaction/failedTransaction.action';
import { getTransactionByUserIdAction } from '@/actions/transaction/getTransactionByUserId';
import { getTransactionsByDateAction } from '@/actions/transaction/getTransationsByDate.action';
import { proofTransactionAction } from '@/actions/transaction/proofTransaction.action';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async getTransactionByuserId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = req.body.userId;
      const result = await getTransactionByUserIdAction(userId);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async proofTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await proofTransactionAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async failedTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await failedTransactionAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionsByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getTransactionsByDateAction();
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
