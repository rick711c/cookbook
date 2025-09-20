import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionHandlerInterceptor } from './interceptors/exceptionHandle.interceptor';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/lib/graphql/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/lib/graphql/types.ts'),
        outputAs: 'interface',
      },
      debug: false,
      includeStacktraceInErrorResponses: false,
      formatError: (error) => {
        console.log(error);
        return {
          message: error.message,
          extensions: {
            code: error.extensions?.code ?? 400,
          },
        };
      },
    }),
    UsersModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ExceptionHandlerInterceptor,
    },
  ],
})
export class AppModule {}
