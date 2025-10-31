import { Injectable } from '@nestjs/common';
import { prismaService } from '../prisma/prisma.service';
import { AddFollowerDto } from './dto/follower.dto';
import { FollowerRepositroy } from './follower.repository';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FollowerService } from './follower.service';
import { Follow } from 'src/lib/graphql/models/follower.model';

@Resolver()
export class FollowerResolver {
  constructor(private service: FollowerService) {}

  @Mutation(() => Follow)
  async addFollower(@Args('input')input: AddFollowerDto) {
    try {
      const res = await this.service.addFollower(input);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
