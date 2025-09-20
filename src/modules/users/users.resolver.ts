import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../../lib/graphql/models/users.model';
import { CreateUserInput } from './dto/create-user.dto';
import { User as IUser } from '../../lib/graphql/types';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  getUserByEmail(@Args('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Mutation(() => User)
  async createUser(
    @Args('data') data: CreateUserInput,
  ): Promise<IUser | undefined> {
    return this.usersService.create(data);
  }
}
