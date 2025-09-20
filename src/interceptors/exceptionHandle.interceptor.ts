import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class ExceptionHandlerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    let message: string;
    let status: number;
    return next.handle().pipe(
      map((data) => {
        return {
          error: false,
          statuscode: 200,
          message: 'ok',
          data: data,
        };
      }),
      catchError((error) => {
        if (error instanceof HttpException) {
          throw new GraphQLError(error.message, {
            extensions: { code: error.getStatus() },
          });
        } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
          switch (error.code) {
            case 'P2002': // Unique constraint violation
              status = HttpStatus.CONFLICT;
              message = `Duplicate entry for ${error.meta?.target as string}.`;
              break;
            case 'P2025': // Record not found
              status = HttpStatus.NOT_FOUND;
              message = 'Record not found.';
              break;
            // Add more cases for other Prisma error codes as needed
            default:
              message = `Database error: ${error.message}`;
              break;
          }
          throw new HttpException(message, status);
        } else {
          throw new HttpException(error.message, 403);
        }
      }),
    );
  }
}
