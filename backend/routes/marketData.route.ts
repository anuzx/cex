
import { Router } from "express";
import { getAllStocks } from "../controllers/marketData.controller";

const router = Router()

router.get("/orderbook/:symbol")
router.get("/fills/:symbol")
router.get("/stocks", getAllStocks)
export default router
