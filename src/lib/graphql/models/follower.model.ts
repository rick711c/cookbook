import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Follow {
  @Field()
  id: string;

  @Field()
  followerId: string;

  @Field()
  followingId: string;

  @Field()
  createdAt: Date;
}
