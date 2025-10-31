import { Injectable } from '@nestjs/common';
import { AddRatingDto } from './dto/addRating.dto';
import { RatingRepository } from './rating.repository';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RatingService } from './rating.service';
import { Rating } from 'src/lib/graphql/models/rating.model';

@Resolver()
export class RatingResolver {
  constructor(private service: RatingService) {}

  @Mutation(() => Rating)
  async addRating(@Args('input') input: AddRatingDto) {
    try {
      const res = await this.service.addRating(input);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
