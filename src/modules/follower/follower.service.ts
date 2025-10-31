import { Injectable } from '@nestjs/common';
import { prismaService } from '../prisma/prisma.service';
import { AddFollowerDto } from './dto/follower.dto';
import { FollowerRepositroy } from './follower.repository';

@Injectable()
export class FollowerService {
  constructor(private repo: FollowerRepositroy) {}
  async addFollower(dto: AddFollowerDto) {
    try {
      const res = await this.repo.addFollower(dto);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
