import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Branches } from "src/features/branches/entities/branches.entity";

@Entity('Services')
export class Services {
  @PrimaryGeneratedColumn()
  id_services: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  //Relations
  @ManyToOne(() => Branches, branch => branch.services)
  @JoinColumn({ name: 'id_branch' })
  branch: Branches;
}