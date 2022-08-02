import jwt, { Jwt, JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import { IncomingHttpHeaders } from "http";
import { privateKey, publicKey } from "./keyJwt";

class HandleToken {
  public getToken(headers: IncomingHttpHeaders): string | null {
    if (headers && headers.authorization != "") {
      if (headers.authorization) {
        const parted = headers.authorization.split(" ");
        if (parted.length == 2) {
          return parted[1];
        }
      }
    }
    return null;
  }

  public async generateToken(
    data: object,
    options?: object
  ): Promise<string | null> {
    const defaulOptions: SignOptions = {
      ...options,
      expiresIn: "30 days",
      algorithm: "RS256",
    };
    const token = await jwt.sign(data, privateKey, defaulOptions);
    if (token) {
      return token;
    }

    return null;
  }

  public async verifyToken(token: string, options?: object) {
    try {
      const data: string | JwtPayload = await jwt.verify(token, publicKey, {
        ...options,
        algorithms: ["RS256"],
      });

      if (data) {
        return data;
      }
      return null;
    } catch (error: any) {
      console.log(error.message);
    }
  }
}

export default new HandleToken();
