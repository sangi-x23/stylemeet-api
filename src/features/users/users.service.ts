import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { Users } from './entities/users.entity';

import { RegisterUserDto } from './dtos/register-user.dto';

import { errorHandler } from 'src/global/handlers/error.handler';
import { successHandler } from 'src/global/handlers/success.handler';

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
      // Verify if the user exists
      const userExists = await queryRunner.manager.findOne(Users, {
        where: { user_name: dto.user_name },
      });

      if (userExists) throw new BadRequestException('The user is already registered');

      // Create the userData
      const userData: any = {
        name: dto.name,
        user_name: dto.user_name,
        email: dto.email,
        rol: { id_roles: dto.id_rol },
      };

      if (dto.id_company) userData.company = { id_companys: dto.id_company };

      if (dto.id_branch) userData.branch = { id_branches: dto.id_branch };

      // Save the user
      const user = queryRunner.manager.create(Users, userData);

      await queryRunner.manager.save(user);

      await queryRunner.commitTransaction();

      return successHandler('User was created successfully');

    } catch (err) {
      await queryRunner.rollbackTransaction();

      errorHandler('registerUser - Users', err);
    } finally {
      await queryRunner.release();
    }
  }
}
