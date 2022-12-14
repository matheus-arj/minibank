import { BankAccount } from "src/bank-account/bank-account.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn} from "typeorm";

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => BankAccount, company => Company)
  @JoinColumn({ name: "bank_accountId"})
  bankAccount: BankAccount

  @Column()
  legalName: string;

  @Column()
  emailAddress: string;
}