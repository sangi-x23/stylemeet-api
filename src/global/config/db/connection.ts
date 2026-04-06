import { env } from '../env/env';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as fs from 'fs';
import * as path from 'path';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  autoLoadEntities: true,
  synchronize: env.NODE_ENV !== 'prod',
  ssl: env.NODE_ENV === 'prod'
    ? {
        rejectUnauthorized: true,
        ca: fs.readFileSync(path.join(__dirname, '..', 'certs', 'global-bundle.pem')).toString(),
      }
    : env.NODE_ENV === 'dev'
    ? {
        rejectUnauthorized: false,
      }
    : false,
};
