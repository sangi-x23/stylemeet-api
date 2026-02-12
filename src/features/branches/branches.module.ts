import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Branches } from './entities/branches.entity';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Branches])],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
