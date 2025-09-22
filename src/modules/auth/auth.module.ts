import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '10 days' },
    }),
  ],
  providers: [AuthService, AuthRepository, AuthResolver],
})
export class AuthModule {}
