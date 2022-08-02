import express from "express";
import { Express } from "express-serve-static-core";
const router = express.Router();

import AuthRouter from "./api/Auth.route";

router.use("/auth", AuthRouter);

export default function route(app: Express) {
  app.use("/api", router);
}
