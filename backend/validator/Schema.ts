import { z } from "zod"


export const SignupSchema = z.object({
  username: z.email(),
  password: z.string().min(6).max(35)
})


export const LoginSchema = z.object({
  username: z.email(),
  password: z.string()
})


export const OrderSchema = z.object({
  type: z.enum(["MARKET", "LIMIT"]),
  price: z.number().optional(),
  qty: z.number(),
  market_id: z.string(),
  side: z.enum(["BUY", "SELL"]),
})
