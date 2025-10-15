import express, { type Request, type Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "./config/env/env.config.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
