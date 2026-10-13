import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    // 1. Ambil ID pelacak dari header client, atau ciptakan UUID baru jika belum ada
    const correlationId = req.header('x-correlation-id') || randomUUID();

    // 2. Tempelkan ke request context dan response header
    req['correlationId'] = correlationId;
    res.setHeader('X-Correlation-Id', correlationId);

    next();
  }
}