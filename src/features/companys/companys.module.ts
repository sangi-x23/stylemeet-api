import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Companys } from './entities/companys.entity';
import { CompanysService } from './companys.service';
import { CompanysController } from './companys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Companys])],
  controllers: [CompanysController],
  providers: [CompanysService],
})
export class CompanysModule {}
