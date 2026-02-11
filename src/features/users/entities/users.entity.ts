import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Roles } from "src/features/roles/entities/roles.entity";
import { Appointments } from "src/features/appointments/entities/appointments.entity";

@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn()
  id_users: number;

  @Column({ nullable: false })
  name: string;
  
  @Column({ nullable: false, unique: true })
  user_name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: true })
  state: boolean;

  //Relations
  @ManyToOne(() => Roles, rol => rol.users, { eager: true })
  @JoinColumn({ name: 'id_rol' })
  rol: Roles;

  @OneToMany(() => Appointments, appointments => appointments.user, { eager: true, onDelete: 'CASCADE' })
  appointments: Appointments[];
}