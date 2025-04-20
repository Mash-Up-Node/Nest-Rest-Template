import { OrderCondition } from '@/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import {
  DeepPartial,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  private saltRound: number = 10;

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  private async encryptPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRound);
  }

  private async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async listUser(
    offset: number,
    limit: number,
    order: OrderCondition,
    whereOptions: FindOptionsWhere<User>,
    selectOptions?: FindOptionsSelect<User>,
  ): Promise<{
    users: User[];
    count: number;
  }> {
    const [users, count] = await this.repository.findAndCount({
      where: whereOptions,
      skip: offset,
      take: limit,
      select: selectOptions,
    });
    return { users, count };
  }

  async findUser(
    whereOptions: FindOptionsWhere<User>,
    relations: FindOptionsRelations<User>,
    selectOptions?: FindOptionsSelect<User>,
  ) {
    return await this.repository.findOne({
      where: whereOptions,
      relations: relations,
      select: selectOptions,
    });
  }

  async findUserById(
    id: number,
    selectOptions?: FindOptionsSelect<User>,
  ): Promise<User | null> {
    return await this.repository.findOne({
      where: { id },
      select: selectOptions,
    });
  }

  async createUser(createOptions: DeepPartial<User>): Promise<User> {
    return await this.repository.save(createOptions);
  }
}
