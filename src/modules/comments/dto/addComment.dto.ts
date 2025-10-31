import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AddCommentDto {
  @Field()
  recipeId: string;

  @Field()
  userId: string;

  @Field()
  content: string;
}
