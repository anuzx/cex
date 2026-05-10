import type { Request, Response } from "express"
import { LoginSchema, SignupSchema } from "../validator/Schema"
import { prisma } from "../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const handleSignup = async (req: Request, res: Response) => {
  const { success, data } = SignupSchema.safeParse(req.body)

  if (!success) {
    return res.status(400).json({ message: "inavlid input" })
  }

  const { username, password } = data

  const existingUser = await prisma.users.findFirst({
    where: {
      username
    }
  })

  if (existingUser) {
    return res.status(400).json({ message: "user with this username already exists" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.create({
    data: {
      username,
      password: hashedPassword
    }
  })


}


export const handleLogin = async (req: Request, res: Response) => {
  const { success, data } = LoginSchema.safeParse(req.body)

  if (!success) {
    return res.status(400).json({ message: "inavlid input" })
  }

  const { username, password } = data

  const user = await prisma.users.findFirst({
    where: {
      username
    }
  })

  if (!user) {
    return res.status(401).json({ message: "invalid username or password" })
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return res.status(401).json({ message: "invalid username or password" })
  }

  const token = jwt.sign({
    id: user.id
  }, "secret123")

  return res.status(200).json({ message: "login done", token })
}
