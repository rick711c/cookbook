import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rating {
  @Field()
  id: string;

  @Field()
  recipeId: string;

  @Field()
  userId: string;

  @Field()
  rating: number;

  @Field()
  createdAt: Date;
}
