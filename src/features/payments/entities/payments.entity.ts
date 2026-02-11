import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { PaymentType } from "../enums/payment-type.enum";

import { Appointments } from "src/features/appointments/entities/appointments.entity";

@Entity('Payments')
export class Payments {
  @PrimaryGeneratedColumn()
  id_payments: number;

  @Column({ type: 'enum', enum: PaymentType, nullable: false })
  payment_type: string;

  @Column({ nullable: true })
  voucher: string;

  //Relations
  @OneToOne(() => Appointments, appointment => appointment.payment, { eager: true })
  @JoinColumn({ name: 'id_appointment' })
  appointment: Appointments;
}