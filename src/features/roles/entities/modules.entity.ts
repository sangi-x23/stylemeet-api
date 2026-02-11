import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Permissions } from "./permissions.entity";

@Entity('Modules')
export class Modules {
  @PrimaryGeneratedColumn()
  id_modules: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string;

  //Relations
  @OneToMany(() => Permissions, permission => permission.module)
  permissions: Permissions[];
}