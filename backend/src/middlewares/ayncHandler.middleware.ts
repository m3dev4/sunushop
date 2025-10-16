import type { Request, Response, NextFunction } from "express";

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(fn(req, res, next)).catch((error: Error) => {
      res.status(500).json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? null : error.stack,
      });
    });
  };

export default asyncHandler;
