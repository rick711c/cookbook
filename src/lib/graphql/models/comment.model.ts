import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Comment{
    @Field()
    id: string;

    @Field()
    recipeId: string;

    @Field()
    userId:string

    @Field()
    content: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}