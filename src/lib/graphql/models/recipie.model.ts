import { Field, ObjectType } from '@nestjs/graphql';
import { Ingredient } from './ingredient.model';
import { Instruction } from './instruction.model';

@ObjectType()
export class Recipie {
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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(()=> [Ingredient])
  ingredients: Ingredient[];

  @Field(()=> [Instruction])
  instructions: Instruction[];
}
