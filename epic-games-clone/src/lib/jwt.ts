import jwt from "jsonwebtoken"
import * as jose from "jose";

const secretKey = process.env.JWT_SECRET || "Jwt key";

export const signToken = (payload: object) => {
  return jwt.sign(payload, secretKey);
}

export const verifyToken = async <T>(token: string) => {
  const secretKeyJose = new TextEncoder().encode(secretKey);
  const payloadJose = await jose.jwtVerify<T>(token, secretKeyJose);
  return payloadJose.payload;
}