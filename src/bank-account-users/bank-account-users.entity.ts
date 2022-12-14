import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToOne, JoinTable } from "typeorm";

@Entity()
export class BankAccountUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  user: User;
}