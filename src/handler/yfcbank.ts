import express, { NextFunction, Request, Response } from 'express'
import requireAccountant from '../middleware/requireAccountant'
import requireStaff from '../middleware/requireStaff'
import setStaff from '../middleware/setStaff'
import prisma from '../prisma'

export default function() {
    const router = express.Router()

    router.use(setStaff(prisma))

    router.get('/yfcbanks', requireStaff, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const banks = await prisma.yFCBank.findMany()
            return res.json(banks)
        } catch (e) {
            next(e)
        }
    })

    return router
}