import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from './global/config/db/connection';

import * as appModules from "./features/index";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig),
    ...Object.values(appModules),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
