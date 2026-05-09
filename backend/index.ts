import express from "express"

const app = express()

app.use(express.json())

import authRouter from "./routes/auth.route"
import orderRouter from "./routes/orders.route"
import marketRouter from "./routes/marketData.route"
import userRouter from "./routes/userData.route"

app.use("/auth", authRouter)
app.use("/order", orderRouter)
app.use("/", marketRouter)
app.use("/user", userRouter)

app.listen(3000)
