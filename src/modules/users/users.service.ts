/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../lib/graphql/models/users.model';
import { CreateUserInput } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { PrismaService } from '../prisma/prisma.service';
import { User as IUser } from '../../lib/graphql/types';
import { ErrorMesseges } from 'src/config/enums/errorMessege.enum';
import { loggerObj } from 'src/util/logger.util';

@Injectable()
export class UsersService {
  constructor(
    private repo: UserRepository,
    private prisma: PrismaService,
  ) {}
  private users: User[] = [];

  findAll(): IUser[] {
    return this.users;
  }

  async create(data: CreateUserInput): Promise<IUser | undefined> {
    try {
      loggerObj.logInput('UserService', 'getUserByEmail', data);

      /**
       * cheking if user with same email is already exist. If yes then don't allow to cerate user with duplicate emial
       */
      const isUserExist = await this.repo.getUserByEmail(data.email);

      if (isUserExist) {
        throw new HttpException(
          ErrorMesseges.USER_ALREADY_EXIST,
          HttpStatus.CONFLICT,
        );
      }

      return this.repo.create(data);
    } catch (err) {
      loggerObj.logError('UserService', 'getUserByEmail', data, err?.message);
      throw err;
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      loggerObj.logInput('UserService', 'getUserByEmail', email);

      return this.repo.getUserByEmail(email);
    } catch (err) {
      loggerObj.logError('UserService', 'getUserByEmail', email, err.message);
      throw err;
    }
  }
}
