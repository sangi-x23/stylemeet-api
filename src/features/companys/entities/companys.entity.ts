import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Branches } from "src/features/branches/entities/branches.entity";
import { CompanysRolesPermissions } from "src/features/roles/entities/companys_roles_permissions.entity";

@Entity('Companys')
export class Companys {
  @PrimaryGeneratedColumn()
  id_companys: number;

  @Column({ type: "varchar", length: 150, nullable: false })
  name: string;

  @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  // Relations
  @OneToMany(() => Branches, branches => branches.company)
  branches: Branches[];

  @OneToMany(() => CompanysRolesPermissions, companysRolesPermissions => companysRolesPermissions.company, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  companysrolespermissions: CompanysRolesPermissions[];
}