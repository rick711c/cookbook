import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionHandlerInterceptor } from './interceptors/exceptionHandle.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/lib/graphql/types.ts'),
        outputAs: 'interface',
      },
      debug: false,
      includeStacktraceInErrorResponses: false,
      formatError: (error) => {
        console.log(error.extensions?.code);
        return {
          message: error.message,
          extensions: {
            code: error.extensions?.code ?? 400,
          },
        };
      },
    }),
    UsersModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ExceptionHandlerInterceptor,
    },
  ],
})
export class AppModule {}
