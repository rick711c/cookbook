import { prismaService } from '../prisma/prisma.service';
import { AddFollowerDto } from './dto/follower.dto';

export class FollowerRepositroy {
  async addFollower(dto: AddFollowerDto) {
    try {
      const res = await prismaService.follow.create({ data: { ...dto } });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
