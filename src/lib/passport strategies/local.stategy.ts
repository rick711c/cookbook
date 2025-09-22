import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
    super();
  }

  async validate(username: string, password: string) {
    console.log('validate local stategy isrunnning');
    const user = await this.authService.validateUserByPassword(
      username,
      password,
    );
    if (!user) {
      throw new HttpException('error from local stategy', 401);
    }
    return user;
  }
}
