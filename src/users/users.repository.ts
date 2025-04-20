import { OrderCondition } from '@/common';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  DataSource,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends Repository<User> {
  private saltRound: number = 10;

  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async encryptPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRound);
  }

  public async validatePassword(
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
    const [users, count] = await this.findAndCount({
      where: whereOptions,
      skip: offset,
      take: limit,
      select: selectOptions,
    });
    return { users, count };
  }

  async findUser(
    whereOptions: FindOptionsWhere<User>,
    relations?: FindOptionsRelations<User>,
    selectOptions?: FindOptionsSelect<User>,
  ) {
    return await this.findOne({
      where: whereOptions,
      relations: relations,
      select: selectOptions,
    });
  }

  async findUserById(
    id: number,
    selectOptions?: FindOptionsSelect<User>,
  ): Promise<User | null> {
    return await this.findOne({
      where: { id },
      select: selectOptions,
    });
  }
}
