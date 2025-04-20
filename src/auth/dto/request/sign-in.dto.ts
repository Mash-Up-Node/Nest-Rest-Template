import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
  @ApiProperty({
    description: 'User Email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User Password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
