import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { Companys } from "src/features/companys/entities/companys.entity";

@Entity('Configs')
export class Configs {
  @PrimaryGeneratedColumn()
  id_configs: number;

  @Column()
  email_company: string;

  @Column()
  logo_company: string;

  //Relations
  @OneToOne(() => Companys, company => company.config)
  @JoinColumn({ name: 'id_company' })
  company: Companys;
}