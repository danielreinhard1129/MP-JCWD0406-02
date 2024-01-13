import { NextFunction, Request, Response } from 'express'
import { registerAction } from '@/actions/user/register.action'

export class UserController {
    async registerUser(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await registerAction(req.body)
            return res.status(result.status).send(result)
        } catch (error) {
            next(Error)
        }
    }
}