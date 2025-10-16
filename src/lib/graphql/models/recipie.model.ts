import { Field, ObjectType } from '@nestjs/graphql';

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
}
