import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AddRatingDto {
  @Field()
  recipeId: string;

  @Field()
  userId: string;

  @Field()
  rating: number;
}
