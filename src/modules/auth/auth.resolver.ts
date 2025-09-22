import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/lib/graphql/models/users.model';
import { CreateUserInput } from '../users/dto/create-user.dto';
import { User as IUser } from '../../lib/graphql/types';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.dto';
import { loggerObj } from 'src/util/logger.util';
import { AuthPayload } from './dto/auth_res.dto';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authservice: AuthService) {}

  @Mutation(() => User, { name: 'signup' })
  async createUser(@Args('data') data: CreateUserInput): Promise<IUser> {
    return this.authservice.create(data);
  }

  @Query(() => User)
  getUserByEmail(@Args('email') email: string) {
    return this.authservice.getUserByEmail(email);
  }

  // @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthPayload)
  async login(@Args('loginInput') loginInput: LoginInput) {
    try {
      loggerObj.logInput('AuthResolver', 'login', loginInput);
      const res = await this.authservice.login(
        loginInput.email,
        loginInput.password,
      );
      return res;
    } catch (err) {
      throw err;
    }
  }
}
