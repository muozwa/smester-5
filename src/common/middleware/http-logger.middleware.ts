import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  // Menggunakan Logger resmi NestJS dengan konteks 'HTTP'
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'Unknown Client';
    const startTime = Date.now();

    // res.on('finish') akan dipicu saat server selesai mengirimkan respons ke client
    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - startTime;

      const logMessage = `[${method}] ${originalUrl} | Status: ${statusCode} | Durasi: ${duration}ms | IP: ${ip} | Agent: ${userAgent}`;

      if (statusCode >= 500) {
        this.logger.error(logMessage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessage);
      } else {
        this.logger.log(logMessage);
      }
    });

    // PENTING: Wajib memanggil next() agar request diteruskan ke pos berikutnya!
    next();
  }
}