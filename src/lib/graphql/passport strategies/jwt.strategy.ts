import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { UsersService } from 'src/modules/users/users.service';
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
      const user = await this.userService.getUserById(payload.userid);
      const { ...rest } = user;
      return rest;
    } catch (err) {
      throw err;
    }
  }
}
