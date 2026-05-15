import type { Request, Response } from "express";
import { OrderSchema } from "../validator/Schema";
import { prisma } from "../client";
/*
    body = {
        type:           "market" | "limit",
        price:          number | null,
        qty:            number,
        market_id:      string,
        side:           "buy" | "sell"
    }

    @returns {
        orderId: string,
        filledQty: number,
        averagePrice
    }
*/
export const postOrder = async (req: Request, res: Response) => {
  const { success, data } = OrderSchema.safeParse(req.body)
  const user_id = req.userId

  if (!success) {
    return res.status(400).json({ message: "invalid input" })
  }

  const { type, price, qty, market_id, side } = data

  const order = await prisma.order.create({
    data: {
      type,
      price,
      side,
      quantity: qty,
      stock_id: market_id,
      user_id,
      filled_quantity: 0,
      status: "OPEN"
    }
  })


  return res.status(201).json({ message: "order created", orderId: order.id })

}

export const deleteOrder = async (req: Request, res: Response) => {

}
/*
    returns the status of an order (partially filled, success, cancellled)
    ALSO RETURNS THE INDIVIDUAL FILLS OF THIS ORDER 
*/
export const getOrders = async (req: Request, res: Response) => {

}
