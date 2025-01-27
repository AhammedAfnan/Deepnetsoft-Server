import "dotenv/config";
import express from "express";
import {connectDatabase} from "./config/db"
import { getEnv } from "./env";
import cors from "cors"

import categoryRouter from "./routes/category.router"
import menuRouter from "./routes/menu.router"

const app = express();

app.use(express.json())
  .use(cors({
    origin: getEnv('WEB_URL')
  }));

app.use('/api/categories', categoryRouter)
app.use('/api/menus', menuRouter)

const PORT = getEnv('PORT', '8080');
app.listen(PORT, async () => {
  console.log("Server running at http://127.0.0.1:%d", PORT);
    await connectDatabase()
});