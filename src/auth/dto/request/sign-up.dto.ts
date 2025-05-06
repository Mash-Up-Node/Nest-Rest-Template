import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthSignUpDto {
  @ApiProperty({
    description: 'Nickname',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  nickname: string;

  @ApiProperty({
    description: 'Email',
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
