import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn()
  id_users: number;

  @Column({ nullable: false })
  name: string;
  
  @Column({ nullable: false, unique: true })
  user_name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: true })
  state: boolean;
}