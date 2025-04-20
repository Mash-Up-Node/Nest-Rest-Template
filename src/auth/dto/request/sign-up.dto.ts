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
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
