import { BankAccountUser } from "src/bank-account-users/bank-account-users.entity";
import { BankAccount } from "src/bank-account/bank-account.entity";
import { Transaction } from "src/transaction/transaction.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  userid: number;

  // @OneToMany(type => BankAccountUser, user => User)
  // @JoinColumn()
  // bankAccountUser: BankAccountUser

  @ManyToOne(type => BankAccountUser, bankAccountUsers => BankAccountUser)
  bankAccountUser: BankAccountUser;

  @ManyToOne(type => BankAccount, bankAccounts => BankAccount)
  bankAccounts: BankAccount;

  @ManyToMany(type => Transaction, transaction => Transaction)
  transaction: Transaction;

  @Column()
  name: string;

  @Column()
  email: string;
}