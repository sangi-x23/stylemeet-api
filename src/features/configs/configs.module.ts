import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Configs } from './entities/configs.entity';
import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Configs])],
  controllers: [ConfigsController],
  providers: [ConfigsService],
})
export class ConfigsModule {}
