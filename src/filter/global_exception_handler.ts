// // src/common/filters/all-exceptions.filter.ts
// import {
//   Catch,
//   ArgumentsHost,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

// @Catch()
// export class AllExceptionsFilter implements GqlExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const gqlHost = GqlArgumentsHost.create(host);
//     const response = gqlHost.getContext().res;
//     const req = gqlHost.getContext().req;

//     const status =
//       exception instanceof HttpException
//         ? exception.getStatus()
//         : HttpStatus.INTERNAL_SERVER_ERROR;

//     const message =
//       exception instanceof HttpException
//         ? exception.message
//         : 'Internal server error';

//     return new HttpException(message, status);
//   }
// }
