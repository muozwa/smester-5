import { Request, Response, NextFunction } from 'express';

export function simpleLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`📡 Request masuk ke: ${req.method} ${req.originalUrl}`);
  next();
}