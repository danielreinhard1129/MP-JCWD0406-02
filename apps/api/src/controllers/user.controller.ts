import { NextFunction, Request, Response } from 'express';
import { registerAction } from '@/actions/user/register.action';
import { keepLoginAction } from '@/actions/user/keeplogin.action';
import { loginAction } from '@/actions/user/login.action';
import { forgotPasswordAction } from '@/actions/user/forgotpassword.action';
import { resetPasswordAction } from '@/actions/user/resetpassword.action';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(Error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(Error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body.user;
      const result = await keepLoginAction(email);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("1111");
      
      const result = await forgotPasswordAction(req.body.email);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body.user;
      const result = await resetPasswordAction(email, req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
