import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Companys } from "src/features/companys/entities/companys.entity";

@Entity('Clients')
export class Clients {
  @PrimaryGeneratedColumn()
  id_clients: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string

  //Relations
  @ManyToOne(() => Companys, company => company.clients)
  @JoinColumn({ name: 'id_company' })
  company: Companys;
}