import { prismaService } from '../prisma/prisma.service';
import { CreateUserInput } from '../users/dto/create-user.dto';
import { User as IUser } from '../../lib/graphql/types';

export class AuthRepository {
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
}
