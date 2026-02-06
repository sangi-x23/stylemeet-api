import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Branches } from "src/features/branches/entities/branches.entity";

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
}