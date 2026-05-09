import { z } from "zod"


export const SignupSchema = z.object({
  username: z.string(),
  password: z.string().min(6).max(35)
})


export const LoginSchema = z.object({
  username: z.string(),
  password: z.string()
})
