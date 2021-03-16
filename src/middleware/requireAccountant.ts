import { NextFunction, Request, Response } from "express"

export default function(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.roleId === 2) {
        return next()
    }
    return res.status(401).json({
        message: 'Required Accountant'
    })
}