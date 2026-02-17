import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

import { Users } from './entities/users.entity';

import { RegisterUserDto } from './dtos/register-user.dto';

import { errorHandler } from 'src/global/handlers/error.handler';

@Injectable()
export class UsersService {
  constructor (
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async registerUser(dto: RegisterUserDto): Promise<any> {
    // Create queryRunner
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      
    } catch (err) {
      await queryRunner.rollbackTransaction();

      errorHandler('registerUser - Users', err);
    } finally {
      await queryRunner.release();
    }
  }
}
