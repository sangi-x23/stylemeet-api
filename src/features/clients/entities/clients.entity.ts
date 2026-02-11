import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Companys } from "src/features/companys/entities/companys.entity";
import { Appointments } from "src/features/appointments/entities/appointments.entity";

@Entity('Clients')
export class Clients {
  @PrimaryGeneratedColumn()
  id_clients: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string

  //Relations
  @ManyToOne(() => Companys, company => company.clients)
  @JoinColumn({ name: 'id_company' })
  company: Companys;

  @OneToMany(() => Appointments, appointments => appointments.user, { eager: true, onDelete: 'CASCADE' })
  appointments: Appointments[];
}