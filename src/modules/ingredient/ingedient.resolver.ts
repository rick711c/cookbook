import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Ingredient } from 'src/lib/graphql/models/ingredient.model';
import { CreateIngredientDto } from './dto/createIngredient.dto';
import { IngredientService } from './ingedient.service';

@Resolver()
export class IngredientResolver {
  constructor(private service: IngredientService) {}

  @Mutation(() => Ingredient)
  async createIngredient(@Args('input') input: CreateIngredientDto) {
    try {
      return this.service.createIngredient(input);
    } catch (err) {
      throw err;
    }
  }
}
