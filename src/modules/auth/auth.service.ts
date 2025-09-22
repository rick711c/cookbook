import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ErrorMesseges } from 'src/config/enums/errorMessege.enum';
import { loggerObj } from 'src/util/logger.util';
import { CreateUserInput } from '../users/dto/create-user.dto';
import { AuthRepository } from './auth.repository';
import { User as IUser } from '../../lib/graphql/types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/lib/graphql/models/users.model';

@Injectable()
export class AuthService {
  constructor(
    private repo: AuthRepository,
    private jwtService: JwtService,
  ) {}

  /**
   * @purpose to  signup new users
   * @param data contains user information that will be stored into the db
   * @returns user details
   */
  async create(data: CreateUserInput): Promise<IUser> {
    try {
      loggerObj.logInput('UserService', 'getUserByEmail', data);

      /**
       * cheking if user with same email is already exist. If yes then don't allow to cerate user with duplicate emial
       */
      const isUserExist = await this.repo.getUserByEmail(data.email);

      if (isUserExist) {
        throw new HttpException(
          ErrorMesseges.USER_ALREADY_EXIST,
          HttpStatus.CONFLICT,
        );
      }

      /**
       * encrpt the password
       */
      const en_password = await this.hashPassword(data.password);
      data.password = en_password;

      const res = await this.repo.create(data);

      const userInstance = Object.assign(new User(), res);

      return userInstance;
    } catch (err) {
      loggerObj.logError('UserService', 'getUserByEmail', data, err?.message);
      throw err;
    }
  }

  /**
   * @purpose to  loggin users
   * @param data contains user information that will be stored into the db
   * @returns user details with jwt token
   */
  async login(email: string, password: string) {
    try {
      loggerObj.logInput('AuthServie', 'login', {
        email: email,
        password: password,
      });

      const user = await this.getUserByEmail(email);
      if (!user) {
        throw new HttpException(
          ErrorMesseges.USER_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        );
      }

      // /**
      //  * matching the passwords using bycrypt
      //  */
      // const enPassword = user?.password;
      // const isMatch = await this.comparePasswords(password, enPassword);

      // if (!isMatch) {
      //   throw new HttpException(
      //     ErrorMesseges.USER_NOT_FOUND,
      //     HttpStatus.UNAUTHORIZED,
      //   );
      // }

      /**
       * generating jwt token for the user
       */
      const jwtPayload = {
        userid: user.id,
      };
      // Generate access token
      const accessToken = this.jwtService.sign(jwtPayload);

      return { user: user, token: accessToken };
    } catch (err) {
      loggerObj.logError(
        'AuthServie',
        'login',
        { email: email, password: password },
        err.message,
      );
      throw err;
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      loggerObj.logInput('UserService', 'getUserByEmail', email);

      return this.repo.getUserByEmail(email);
    } catch (err) {
      loggerObj.logError('UserService', 'getUserByEmail', email, err.message);
      throw err;
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Number of salt rounds to generate
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  private async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      // Compare the plain text password with the hashed password
      const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
      return isMatch;
    } catch (error) {
      // Handle errors, such as invalid hash or other bcrypt-related errors
      console.error('Error comparing passwords:', error);
      return false;
    }
  }

  async validateUserByPassword(input: any): Promise<IUser | undefined> {
    try {
      loggerObj.logInput('AuthService', 'validateUserByPassword', input);
      const user = await this.getUserByEmail(input.userid);
      if (!user) {
        throw new HttpException(
          ErrorMesseges.USER_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        );
      }

      /**
       * matching the passwords using bycrypt
       */
      const enPassword = user?.password;
      const isMatch = await this.comparePasswords(input.password, enPassword);

      if (!isMatch) {
        throw new HttpException(
          ErrorMesseges.USER_NOT_FOUND,
          HttpStatus.UNAUTHORIZED,
        );
      }

      return user;
    } catch (err) {
      loggerObj.logError(
        'AuthService',
        'validateUserByPassword',
        input,
        err.message,
      );
      throw err;
    }
  }

  async validate() {}
}
