import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UsersResolver, UsersService, UserRepository],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
