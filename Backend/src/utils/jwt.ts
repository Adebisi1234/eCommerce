import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const signToken = (id: string) => {
  const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN!, {
    expiresIn: "15mins",
  });
  const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN!, {
    expiresIn: "10d",
  });
  return { accessToken, refreshToken };
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).json("Not authorized");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN!, (err, decoded) => {
    if (err) {
      console.log(err);
      //   Check if's a expired Error
      updateAccessToken(req, res);
      next(err);
    }
    console.log(decoded);
    next();
  });
};

const updateAccessToken = async (req: Request, res: Response) => {
  // It's currently 12:53am may be writing nonsense
  try {
    const refreshTokenCookie = req.cookies?.refreshToken;
    if (!refreshTokenCookie) {
      return res.sendStatus(403);
    }

    const { id } = jwt.decode(refreshTokenCookie) as { id: string };
    if (!id) res.sendStatus(403);
    const user = await User.findById(id).select("refreshToken");
    if (!user) {
      return res.sendStatus(403);
    }
    if (refreshTokenCookie !== user?.refreshToken) {
      return res.sendStatus(403);
    }
    const { accessToken, refreshToken } = signToken(id);
    user.refreshToken = refreshToken;
    await user.save();
    req.body.accessToken = accessToken;
    req.body.refreshToken = refreshToken;
  } catch (err) {
    return res.sendStatus(403);
  }
};
