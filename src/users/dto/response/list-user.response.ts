import { BasePaginationResponse } from '@/common';
import { User } from '@/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ListUserResponse extends BasePaginationResponse<User> {
  @ApiProperty({
    description: 'Users',
    type: User,
    isArray: true,
  })
  data: User[];
}
