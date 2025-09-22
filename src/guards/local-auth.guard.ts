import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
    console.log('LocalAuthGuard initialized');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    request.body = ctx.getArgs(); 
    // console.log(request.body, request.headers);
    // console.log('Local auth guard');

    return super.canActivate(context);
  }

  getRequest(context: ExecutionContext) {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    const gqlContext = gqlExecutionContext.getContext();
    const req = gqlContext.req;

    const args = gqlExecutionContext.getArgs();

    if (args.loginInput) {
      req.body = {
        username: args.loginInput.email,
        password: args.loginInput.password,
      };
    //   console.log(req.body);
    }
    return gqlContext.req;
  }
}
