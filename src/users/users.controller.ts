import { Controller, Get, Query } from '@nestjs/common';
import { ListUserQuery } from '@/users/dto/request';
import { UsersService } from '@/users/users.service';
import { ListUserResponse } from '@/users/dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: '사용자 목록 조회',
  })
  @ApiResponse({
    status: 200,
    type: ListUserResponse,
  })
  async listUsers(@Query() query: ListUserQuery) {
    const { users, count } = await this.userService.listUsers(query);
    return new ListUserResponse(query.page, query.limit, count, users);
  }
}
