import { Injectable } from '@nestjs/common';
import { User } from '../../lib/graphql/models/users.model';
import { CreateUserInput } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private repo: UserRepository,
    private prisma: PrismaService,
  ) {}
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  async create(data: CreateUserInput) {
    return this.repo.create(data);
  }
}
