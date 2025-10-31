import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AddFollowerDto {
  @Field()
  followerId: string;

  @Field()
  followingId: string;
}
