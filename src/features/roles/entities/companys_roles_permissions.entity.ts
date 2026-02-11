import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Companys } from "src/features/companys/entities/companys.entity";
import { Permissions } from "./permissions.entity";
import { Roles } from "./roles.entity";

@Entity('Companys_Roles_Permissions')
export class CompanysRolesPermissions {
  @PrimaryGeneratedColumn()
  id_companysrolespermissions: number;

  //Relations
  @ManyToOne(() => Companys, company => company.companysrolespermissions)
  @JoinColumn({ name: 'id_company' })
  company: Companys;

  @ManyToOne(() => Permissions, permission => permission.companysrolespermissions)
  @JoinColumn({ name: 'id_permission' })
  permission: Permissions;

  @ManyToOne(() => Roles, role => role.companysrolespermissions)
  @JoinColumn({ name: 'id_role' })
  role: Roles;
}