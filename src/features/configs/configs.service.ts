import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Configs } from './entities/configs.entity';

import { errorHandler } from 'src/global/handlers/error.handler';
import { successHandler, type SuccessResponse } from 'src/global/handlers/success.handler';

@Injectable()
export class ConfigsService {
  constructor (
    @InjectRepository(Configs)
    private readonly configsRepo: Repository<Configs>,
  ) {}

  async findByCompany(id_company: number): Promise<SuccessResponse<Configs>> {
    try {
      const config = await this.configsRepo
        .createQueryBuilder('config')
        .where('config.company = :id_company', { id_company })
        .getOne();

      if (!config) throw new NotFoundException(`Config for company ${id_company} not found`);

      return successHandler<Configs>('Config founded', config);
    } catch (err) {
      return errorHandler('findByCompany - Configs', err);
    }
  }
}
