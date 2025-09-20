/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import { User } from '../../lib/graphql/models/users.model';
import { UserRepository } from './user.repository';
import { User as IUser } from '../../lib/graphql/types';
import { ErrorMesseges } from 'src/config/enums/errorMessege.enum';
import { loggerObj } from 'src/util/logger.util';

@Injectable()
export class UsersService {
  constructor(private repo: UserRepository) {}
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  async getUserById(userid: string): Promise<IUser | null> {
    try {
      loggerObj.logInput('UserService', 'getUserById', { userid });
      return this.repo.getUserById(userid);
    } catch (err) {
      loggerObj.logError('UserService', 'getUserById', { userid }, err.message);
      throw err;
    }
  }
}
