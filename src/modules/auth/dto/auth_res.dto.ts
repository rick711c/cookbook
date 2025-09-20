import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "src/lib/graphql/models/users.model";
import { User  as IUser} from "src/lib/graphql/types";

@ObjectType()
export class AuthPayload {
  @Field()
  token: string;

  @Field(() => User)
  user: IUser;
}
