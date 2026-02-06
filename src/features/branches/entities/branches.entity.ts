import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { AccountType } from "../enums/account-type.enum";

import { Companys } from "src/features/companys/entities/companys.entity";

@Entity('Branches')
export class Branches {
  @PrimaryGeneratedColumn()
  id_branches: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  account_number: string;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.AHORROS })
  account_type: string;

  @Column({ nullable: true })
  account_qr: string;

  // Relations
  @ManyToOne(() => Companys, company => company.branches, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: 'id_company' })
  company: Companys;
}