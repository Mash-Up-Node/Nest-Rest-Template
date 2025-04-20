import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const ListUserDocs = applyDecorators(
  ApiOperation({
    summary: '사용자 목록 조회',
  }),
);
