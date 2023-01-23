import jwt from "jsonwebtoken";

export function createJwt(payLoad: Object): string {
  return jwt.sign(payLoad, process.env.JWT_KEY as string);
}
