import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateIngredientDto{
    @Field()
    recipeId:string;

    @Field()
    name:string;

    @Field()
    quantity:string;
}