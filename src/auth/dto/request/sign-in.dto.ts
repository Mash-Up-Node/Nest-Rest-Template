import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
  @ApiProperty({
    description: 'User Email',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User Password',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
