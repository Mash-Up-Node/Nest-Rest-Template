import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenResponse {
  @ApiProperty({
    description: 'Access Token',
  })
  accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }
}
