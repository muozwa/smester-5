import { Module } from '@nestjs/common';
import { AuthController } from './auth.controllers.js';
import { AuthService } from './auth.service.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}