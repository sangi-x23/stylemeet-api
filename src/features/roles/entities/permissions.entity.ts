import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Modules } from "./modules.entity";
import { CompanysRolesPermissions } from "./companys_roles_permissions.entity";

@Entity('Permissions')
export class Permissions {
  @PrimaryGeneratedColumn()
  id_permissions: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string

  //Relations
  @ManyToOne(() => Modules, module => module.permissions, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_module' })
  module: Modules;

  @OneToMany(() => CompanysRolesPermissions, companysRolesPermissions => companysRolesPermissions.company, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  companysrolespermissions: CompanysRolesPermissions[];
}