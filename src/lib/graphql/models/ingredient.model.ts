import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ingredient {
  @Field()
  id: string;

  @Field()
  recipeId: string;

  @Field()
  name: string;

  @Field()
  quantity: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
