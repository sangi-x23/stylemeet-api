import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { dbConfig } from './global/config/db/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './features/users/users.module';
import { NotificationsModule } from './features/notifications/notifications.module';
import { ConfigsModule } from './features/configs/configs.module';
import { PaymentsModule } from './features/payments/payments.module';
import { AppointmentsModule } from './features/appointments/appointments.module';
import { ClientsModule } from './features/clients/clients.module';
import { AuthModule } from './features/auth/auth.module';
import { RolesModule } from './features/roles/roles.module';
import { BranchesModule } from './features/branches/branches.module';
import { CompanysModule } from './features/companys/companys.module';
import { UserModule } from './features/user/user.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig),
    UsersModule,
    UserModule,
    CompanysModule,
    BranchesModule,
    RolesModule,
    AuthModule,
    ClientsModule,
    AppointmentsModule,
    PaymentsModule,
    ConfigsModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
