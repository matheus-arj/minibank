import { BankAccount } from "src/bank-account/bank-account.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  userId: number

  @Column()
  bankAccountId: number

  @Column()
  value: number;

  @Column()
  createdAt: string;

  @ManyToOne(type => BankAccount, bankaccount => BankAccount)
  bankaccount: BankAccount;

  
  // @Column()
  // type: Enum [ach, wire]
}