import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"


declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}


export const VerifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "unauthorized" })
  }


  const decodedToken = jwt.verify(token, "secret") as { id: string }

  req.userId = decodedToken.id

  next()

}
