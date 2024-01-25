import { NextFunction, Request, Response } from 'express';
import { registerAction } from '@/actions/user/register.action';
import { keepLoginAction } from '@/actions/user/keeplogin.action';
import { loginAction } from '@/actions/user/login.action';
import { forgotPasswordAction } from '@/actions/user/forgotpassword.action';
import { resetPasswordAction } from '@/actions/user/resetpassword.action';
import { claimReferralCodeAction } from '@/actions/referral/claimReferralCode.action';
import { profileUserAction } from '@/actions/user/profileuser.action';
import { claimRewardAction } from '@/actions/claimReward/claimRewardAction';
import { getUsersAction } from '@/actions/user/getUsers.action';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const referralCode = req.body.referralCode;
      const result = await registerAction(req.body, referralCode);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async ProfileUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = parseInt(req.params.id, 10);
      const result = await profileUserAction(userId);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
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

  async claimReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const referralCode = req.body.referralCode;
      const result = await claimReferralCodeAction(referralCode);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async claimReward(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await claimRewardAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUsersAction()
      return res.status(result.status).send(result)
    } catch (error) {
      next(error)
    }
  }
}
