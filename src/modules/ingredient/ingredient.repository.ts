import { prismaService } from '../prisma/prisma.service';
import { CreateIngredientDto } from './dto/createIngredient.dto';

export class IngredinetRepository {
  async createIngredient(input: CreateIngredientDto) {
    try {
      const res = await prismaService.ingredient.create({ data: { ...input } });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
