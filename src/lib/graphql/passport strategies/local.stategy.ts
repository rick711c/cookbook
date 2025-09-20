import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/modules/auth/auth.service';
import { loggerObj } from 'src/util/logger.util';
// import { UserValidationService } from 'src/modules/shared/user-validation/Validation.service';
// import { plainToInstance } from 'class-transformer';
// import { PassWordLoginDto } from 'src/modules/login/dto/passwordLogin.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    });
  }

  async validate(input: any): Promise<any> {
    loggerObj.logInfo('validate local stategy isrunnning')
    // const credentials = plainToInstance(PassWordLoginDto, req.body);
    const user = await this.authService.validateUserByPassword(input);
    if (!user) {
      throw new UnauthorizedException();
    }
    const { password, ...rest } = user;
    return rest;
  }
}
