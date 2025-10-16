import { prismaService } from '../prisma/prisma.service';
import { CreateRecipieInput } from './dto/createRecipe.dto';

export class RecipieRepository {
  async createRecipie(input: CreateRecipieInput) {
    try {
      const res = await prismaService.recipe.create({ data: input });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
