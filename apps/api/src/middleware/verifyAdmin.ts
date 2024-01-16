import { NextFunction, Request, Response } from "express";

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.body.user.roleId !== 2) throw new Error("Cannot access except for admin")
        next()
    } catch (error) {
        throw error
    }
}