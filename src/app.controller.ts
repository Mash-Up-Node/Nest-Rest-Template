import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorator/public.decorator';
import { Roles } from './common/decorator/roles.decorator';
import { UserRole } from './users/entities/user.entity';

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('need-auth')
  @Roles(UserRole.Staff)
  getNeedAuth(): string {
    return this.appService.getHello();
  }
}
