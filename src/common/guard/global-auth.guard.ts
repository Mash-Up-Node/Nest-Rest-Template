import { User } from '@/users/entities/user.entity';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_PUBLIC } from '@/common/decorator/public.decorator';
import { ROLES_KEY } from '@/common/decorator/roles.decorator';
import {
  ForbiddenException,
  UnauthorizedException,
} from '@/common/exception/auth.exception';

@Injectable()
export class GlobalAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    // @Public() 검사
    if (requiredRoles?.length === 1 && requiredRoles[0] === ROLES_PUBLIC) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const user = request.user as User;

    if (!user) {
      throw new UnauthorizedException();
    }

    // @Roles() 검사
    if (requiredRoles?.includes(user.role)) {
      return true;
    }

    throw new ForbiddenException();
  }
}
