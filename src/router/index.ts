import { Request, Response } from "express";
import { Express } from "express-serve-static-core";

import ReponseObject from "../entities/ReponseObject";

export default function route(app: Express) {
  app.use("/", (req: Request, res: Response) => {
    res.status(200).json(new ReponseObject(true, "oke", {}));
  });
}
