/* eslint-disable no-useless-catch */
import { CreateUserInput } from './dto/create-user.dto';
import { prismaService } from '../prisma/prisma.service';
import { User as IUser } from '../../lib/graphql/types';

export class UserRepository {
  constructor() {}

  async create(input: CreateUserInput) {
    try {
      const data = await prismaService.user.create({ data: input });
      return data;
    } catch (err) {
      throw err;
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const data = await prismaService.user.findUnique({
        where: { email: email },
      });
      return data;
    } catch (err) {
      throw err;
    }
  }
  // async create(data: Prisma.UserCreateInput): Promise<User> {
  //   return prismaService.user.create({
  //     data,
  //   });
  // }
}
