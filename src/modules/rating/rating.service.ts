import { Injectable } from '@nestjs/common';
import { AddRatingDto } from './dto/addRating.dto';
import { RatingRepository } from './rating.repository';

@Injectable()
export class RatingService {
  constructor(private repo: RatingRepository) {}
  async addRating(dto: AddRatingDto) {
    try {
      const res = await this.repo.addRating(dto);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
