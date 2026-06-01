import { createClient } from "redis";

const BALANCES = {

}
const ORDERBOOKS = {
  SOL: {},
  BTC: {}
}

const client = createClient({ url: process.env.REDIS_URL || `redis://localhost:6379` })
  .on("error", (err) => console.log("Redis Client Error", err))



const publisherClient = createClient({ url: process.env.REDIS_URL || `redis://localhost:6379` })
  .on("error", (err) => console.log("Redis Client Error", err))


await Promise.all([client.connect(), publisherClient.connect()]);
