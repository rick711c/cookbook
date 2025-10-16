import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Recipie } from 'src/lib/graphql/models/recipie.model';
import { CreateRecipieInput } from './dto/createRecipe.dto';
import { RecipieService } from './recipie.service';

@Resolver(() => Recipie)
export class RecipieResolver {
  constructor(private service: RecipieService) {}

  @Mutation(() => Recipie, { name: 'createrecipie' })
  async createRecipie(@Args('createRecipieInput') input: CreateRecipieInput) {
    try {
      return this.service.createRecipie(input);
    } catch (err) {}
  }
}
