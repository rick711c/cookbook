import { prismaService } from '../prisma/prisma.service';
import { CreateRecipieInput } from './dto/createRecipe.dto';

export class RecipieRepository {
// recipe.service.ts
async createRecipe(data: CreateRecipieInput) {
  const { recipie, ingredients, instructions } = data;

  return prismaService.recipe.create({
    data: {
      ...recipie,
      ingredients: {
        create: ingredients.map((i) => ({
          name: i.name,
          quantity: i.quantity,
        })),
      },
      instructions: {
        create: instructions.map((i) => ({
          stepNumber: i.stepNumber,
          description: i.description,
        })),
      },
    },
    include: {
      ingredients: true,
      instructions: true,
    },
  });
}

}
