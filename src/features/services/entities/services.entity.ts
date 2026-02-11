import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Branches } from "src/features/branches/entities/branches.entity";
import { Appointments } from "src/features/appointments/entities/appointments.entity";

@Entity('Services')
export class Services {
  @PrimaryGeneratedColumn()
  id_services: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  duration_minutes: number;

  //Relations
  @ManyToOne(() => Branches, branch => branch.services)
  @JoinColumn({ name: 'id_branch' })
  branch: Branches;

  @OneToMany(() => Appointments, appointments => appointments.user, { eager: true, onDelete: 'CASCADE' })
  appointments: Appointments[];
}