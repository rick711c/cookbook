/* eslint-disable no-useless-catch */
import { CreateUserInput } from './dto/create-user.dto';
import { prismaService } from '../prisma/prisma.service';
import { User as IUser } from '../../lib/graphql/types';
import { loggerObj } from 'src/util/logger.util';

export class UserRepository {
  constructor() {}

  // async create(data: Prisma.UserCreateInput): Promise<User> {
  //   return prismaService.user.create({
  //     data,
  //   });
  // }

  async getUserById(userid: string): Promise<IUser | null> {
    try {
      loggerObj.logInput('UserRepository', 'getUserById', { userid });
      const data = await prismaService.user.findUnique({ where: { id: userid } });
      return data;
    } catch (err) {
      loggerObj.logError(
        'UserRepository',
        'getUserById',
        { userid },
        err.message,
      );
      throw err;
    }
  }
}
