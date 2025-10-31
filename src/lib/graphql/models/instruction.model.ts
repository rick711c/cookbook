import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Instruction {
  @Field()
  id: string;

  @Field()
  recipeId: string;

  @Field()
  stepNumber: number;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
