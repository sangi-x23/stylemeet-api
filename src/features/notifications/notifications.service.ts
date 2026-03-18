import { Injectable } from '@nestjs/common';

import { ConfigsService } from '../configs/configs.service';

import { SendEmail } from './interfaces/send-email.interface';

@Injectable()
export class NotificationsService {
  constructor (
    private readonly configsService: ConfigsService,
  ) {}

  async sendEmail(id_company: number, options: SendEmail) {}
}
