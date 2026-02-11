import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Users } from "src/features/users/entities/users.entity";
import { CompanysRolesPermissions } from "./companys_roles_permissions.entity";

@Entity('Roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id_roles: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string;

  // Relations
  @OneToMany(() => Users, user => user.rol)
  users: Users[];

  @OneToMany(() => CompanysRolesPermissions, companysRolesPermissions => companysRolesPermissions.company, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  companysrolespermissions: CompanysRolesPermissions[];
}
