import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddInstructionDto {
  @Field()
  recipeId: string;

  @Field()
  stepNumber: number;

  @Field()
  description: string;
}
