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
}
