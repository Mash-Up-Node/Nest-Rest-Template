import { BasePaginationQueryDto } from '@/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ListUserQuery extends BasePaginationQueryDto {
  @ApiProperty({
    description: '닉네임 검색',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly nickname?: string;

  @ApiProperty({
    description: '이메일 검색',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly email?: string;

  @ApiProperty({
    description: '상태 검색',
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return undefined;
  })
  readonly isActive?: boolean;
}
