import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { ListUserQuery } from '@/users/dto/request';
import { ILike } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async listUsers(query: ListUserQuery) {
    return await this.usersRepository.listUser(
      query.offset,
      query.limit,
      query.order,
      {
        nickname: query?.nickname ? ILike(`%${query.nickname}%`) : undefined,
        email: query?.email ? ILike(`%${query.email}%`) : undefined,
        isActive: query?.isActive,
      },
    );
  }
}
