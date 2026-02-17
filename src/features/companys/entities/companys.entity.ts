import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Users } from "src/features/users/entities/users.entity";
import { Clients } from "src/features/clients/entities/clients.entity";
import { Configs } from "src/features/configs/entities/configs.entity";
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
  @OneToMany(() => Users, users => users.company, { onDelete: 'CASCADE' })
  users: Users[];

  @OneToMany(() => Branches, branches => branches.company, { eager: true, onDelete: 'CASCADE' })
  branches: Branches[];

  @OneToMany(() => Clients, clients => clients.company, { eager: true, onDelete: 'CASCADE' })
  clients: Clients[];

  @OneToMany(() => CompanysRolesPermissions, companysRolesPermissions => companysRolesPermissions.company, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  companysrolespermissions: CompanysRolesPermissions[];

  @OneToOne(() => Configs, config => config.company, { eager: true, onDelete: 'CASCADE' })
  config: Configs;
}