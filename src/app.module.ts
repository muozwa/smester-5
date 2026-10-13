import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { HttpLoggerMiddleware } from './common/middleware/http-logger.middleware.js';
import { BooksModule } from './books/books.module.js';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      // Contoh 1: Diterapkan pada seluruh rute aplikasi
      .forRoutes('*');

      // Contoh 2: Diterapkan hanya pada controller tertentu
      // .forRoutes(BooksController);

      // Contoh 3: Diterapkan hanya pada rute POST /books
      // .forRoutes({ path: 'books', method: RequestMethod.POST });

      // Contoh 4: Mengabaikan rute tertentu (exclude)
      // .exclude({ path: 'health', method: RequestMethod.GET })
      // .forRoutes('*');
  }
}