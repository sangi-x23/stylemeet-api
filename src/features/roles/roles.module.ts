import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as entities from './entities/index';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(entities))],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
