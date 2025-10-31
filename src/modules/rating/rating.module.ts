import { Module } from '@nestjs/common';
import { RatingRepository } from './rating.repository';
import { RatingService } from './rating.service';
import { RatingResolver } from './rating.resolver';

@Module({
  providers: [RatingRepository, RatingService, RatingResolver],
})
export class RatingModule {}
