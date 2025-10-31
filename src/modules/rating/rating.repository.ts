import { prismaService } from '../prisma/prisma.service';
import { AddRatingDto } from './dto/addRating.dto';

export class RatingRepository {
  async addRating(dto: AddRatingDto) {
    try {
      const res = await prismaService.rating.create({ data: { ...dto } });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
