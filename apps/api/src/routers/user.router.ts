import { UserController } from '@/controllers/user.controller';
import { verifyToken } from '@/middleware/jwtVerifyToken';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.userController.registerUser);
    this.router.post('/login', this.userController.loginUser);
    this.router.get('/keeplogin', verifyToken, this.userController.keepLogin);
    this.router.post('/forgot-password', this.userController.forgotPassword);
    this.router.patch(
      '/reset-password',
      verifyToken,
      this.userController.resetPassword,
    );
    this.router.post(
      '/claim-referralCode',
      this.userController.claimReferralCode,
    );
    this.router.get(`/profile-user/:id`, this.userController.ProfileUser);
    this.router.post('/claim-reward', this.userController.claimReward);
    this.router.get('/', this.userController.getAllUser)
  }

  getRouter(): Router {
    return this.router;
  }
}
