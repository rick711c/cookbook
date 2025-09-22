import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { UsersService } from 'src/modules/users/users.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { loggerObj } from 'src/util/logger.util';
dotenv.config({ path: './.env' });

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    try {
      loggerObj.logInput('JwtStrategy', 'validate', payload);
      const context = GqlExecutionContext.create(this['context']);
      const req = context.getContext().req;
      console.log('Request Headers:', req.headers);
      console.log('JWT Payload:', payload);
      const user = await this.userService.getUserById(payload.userid);
      const { ...rest } = user;
      return rest;
    } catch (err) {
      throw err;
    }
  }
}
