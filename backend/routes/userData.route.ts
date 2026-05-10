
import { Router } from "express";
import { getUserBalance } from "../controllers/userData.controller";

const router = Router()

router.get("/balance", getUserBalance)

export default router
