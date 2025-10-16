import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRecipieInput{
    @Field()
    userId: string;

    @Field()
    title:string;

    @Field()
    description:string;

    @Field()
    prepTime: number;

    @Field()
    cookTime: number;

    @Field()
    servings:number;
}


