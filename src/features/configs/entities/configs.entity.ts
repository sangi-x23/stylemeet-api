import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { Companys } from "src/features/companys/entities/companys.entity";

@Entity('Configs')
export class Configs {
  @PrimaryGeneratedColumn()
  id_configs: number;

  @Column()
  email_company: string;

  @Column({ nullable: true })
  logo_company: string;

  // FIELDS FOR DYNAMIC SMTP
  @Column({ nullable: true })
  smtp_host: string;

  @Column({ nullable: true, default: 587 })
  smtp_port: number;

  @Column({ nullable: true }) 
  smtp_password: string; 

  @Column({ default: false })
  smtp_secure: boolean;

  @Column({ nullable: true })
  from_name: string;

  //Relations
  @OneToOne(() => Companys, company => company.config)
  @JoinColumn({ name: 'id_company' })
  company: Companys;
}