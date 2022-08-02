import { Request, Response } from "express";
import User, { IUser } from "../entities/User.entity";
import HandleToken from "../jwt/HandleToken";

class AuthControler {
  async register(req: Request, res: Response) {
    try {
      const getToken = await HandleToken.generateToken({ _id: 123 });

      res.json({
        mess: "thien hello",
        token: getToken,
      });
    } catch (error) {}
  }
}

export default new AuthControler();
