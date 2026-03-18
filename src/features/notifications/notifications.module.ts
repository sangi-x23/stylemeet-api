import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';

import { ConfigsService } from '../configs/configs.service';

@Module({
  imports: [ConfigsService],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
