import { AuthService } from '@/auth/auth.service';
import { AuthSignInDto, AuthSignUpDto } from '@/auth/dto/request';
import { AuthTokenResponse } from '@/auth/dto/response';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @ApiOperation({
    summary: 'Sign In',
  })
  @ApiResponse({
    type: AuthTokenResponse,
  })
  async signIn(@Body() body: AuthSignInDto) {
    const accessToken = await this.authService.signIn(
      body.email,
      body.password,
    );
    return new AuthTokenResponse(accessToken);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Sign Up',
  })
  @ApiResponse({
    type: AuthTokenResponse,
  })
  async signUp(@Body() body: AuthSignUpDto) {
    const accessToken = await this.authService.signUp(
      body.nickname,
      body.email,
      body.password,
    );
    return new AuthTokenResponse(accessToken);
  }
}
