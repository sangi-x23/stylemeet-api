import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Users } from "src/features/users/entities/users.entity";
import { Clients } from "src/features/clients/entities/clients.entity";
import { Services } from "src/features/services/entities/services.entity";

@Entity('Appointments')
export class Appointments {
  @PrimaryGeneratedColumn()
  id_appointments: number;

  @Column({ type: 'datetime', nullable: false })
  start_time: Date;

  @Column({ type: 'datetime', nullable: false })
  end_time: Date;

  //Relations
  @ManyToOne(() => Users, user => user.appointments, { eager: true })
  @JoinColumn({ name: 'id_user' })
  user: Users;

  @ManyToOne(() => Clients, client => client.appointments, { eager: true })
  @JoinColumn({ name: 'id_client' })
  client: Clients;

  @ManyToOne(() => Services, service => service.appointments, { eager: true })
  @JoinColumn({ name: 'id_service' })
  service: Services;
}