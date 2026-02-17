import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Roles } from "src/features/roles/entities/roles.entity";
import { Branches } from "src/features/branches/entities/branches.entity";
import { Companys } from "src/features/companys/entities/companys.entity";
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

  @Column({ nullable: true })
  password: string;

  @Column({ default: false })
  state: boolean;

  @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  //Relations
  @ManyToOne(() => Roles, rol => rol.users, { eager: true })
  @JoinColumn({ name: 'id_rol' })
  rol: Roles;

  @ManyToOne(() => Branches, branch => branch.users, { eager: true, nullable: true })
  @JoinColumn({ name: 'id_branch' })
  branch: Branches;

  @ManyToOne(() => Companys, company => company.users, { nullable: true })
  @JoinColumn({ name: 'id_company' })
  company: Companys;

  @OneToMany(() => Appointments, appointments => appointments.user, { eager: true, onDelete: 'CASCADE' })
  appointments: Appointments[];
}