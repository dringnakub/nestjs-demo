import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
     console.log(context.getArgs()[0])
    const user = context.getArgs()[0].user['http://localhost:3000/roles'] || '';
    console.log("user user ", user)
    return user.indexOf('admin') > -1;
  }
}
