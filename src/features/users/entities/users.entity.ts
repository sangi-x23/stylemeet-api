import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Roles } from "src/features/roles/entities/roles.entity";

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
}