import { Field, InputType } from '@nestjs/graphql';
import { CreateIngredientDto } from 'src/modules/ingredient/dto/createIngredient.dto';
import { AddInstructionDto } from 'src/modules/instruction/dto/addInstruction.dto';

@InputType()
export class RecipieInput {
  @Field()
  userId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  prepTime: number;

  @Field()
  cookTime: number;

  @Field()
  servings: number;
}

@InputType()
export class CreateRecipieInput {
  @Field()
  recipie: RecipieInput;

  @Field(() => [CreateIngredientDto])
  ingredients: CreateIngredientDto[];

  @Field(() => [AddInstructionDto])
  instructions: AddInstructionDto[];
}
