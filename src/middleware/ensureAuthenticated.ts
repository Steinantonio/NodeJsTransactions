import { Request, Response, NextFunction } from "express";
import { verify, } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, nextFunction: NextFunction) {

  const bearerToken = request.headers.authorization;

  if (!bearerToken) {
    return response.status(401).end();
  }

  const [, token] = bearerToken.split(" ");

  try {
    const { sub } = verify(token, "e4cd96753ea7b327d0ee08bb23b9193d",);

    request.user_id = sub.toString();

    return nextFunction();
  }
  catch (err) {
    return response.status(401).end();
  }
}