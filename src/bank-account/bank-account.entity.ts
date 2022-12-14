import { Company } from "src/company/company.entity";
import { Transaction } from "src/transaction/transaction.entity";
import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userId: number

  @Column()
  companyId: number

  @Column()
  baasId: string

  @Column()
  numberAccount: number

  
  user: User
  company: Company
  transaction: Transaction;

    // @ManyToOne(type => User, user => User)
}
