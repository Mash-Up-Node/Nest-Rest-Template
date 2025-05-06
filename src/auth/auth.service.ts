import { JwtPayload } from '@/common';
import { UsersRepository } from '@/users/users.repository';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly jwtModule: JwtService,
  ) {}

  private async issueAccessToken(payload: JwtPayload) {
    return await this.jwtModule.signAsync(payload, {
      secret: process.env.JWT_SECRET ?? '',
      expiresIn: process.env.JWT_EXPIRES_IN ?? '6h',
    });
  }

  async signIn(email: string, password: string) {
    const user = await this.userRepository.findUser({
      email,
    });
    if (!user) {
      // 재영이 PR 머지된 이후 BaseExecption으로 변경
      throw new NotFoundException('User not found');
    }
    const isPasswordValid = await this.userRepository.validatePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return await this.issueAccessToken({
      id: user.id,
      role: user.role,
    });
  }

  async signUp(nickname: string, email: string, password: string) {
    const user = await this.userRepository.findUser({
      email,
    });
    if (user) {
      throw new ForbiddenException('User already exists');
    }
    const hashedPassword = await this.userRepository.encryptPassword(password);
    const newUser = await this.userRepository.save({
      nickname,
      email,
      password: hashedPassword,
    });
    return await this.issueAccessToken({
      id: newUser.id,
      role: newUser.role,
    });
  }
}
