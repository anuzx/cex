
import { Router } from "express";
import { deleteOrder, getOrders, postOrder } from "../controllers/orders.controller";

const router = Router()

router.post("/", postOrder)
router.delete("/:orderId", deleteOrder)
router.get("/", getOrders)

export default router
