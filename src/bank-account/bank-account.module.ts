import { Module } from '@nestjs/common';
import { BankAccountController } from './bank-account.controller';
import { BankAccountService } from './bank-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bank-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  controllers: [BankAccountController],
  providers: [BankAccountService]
})
export class BankAccountModule {}
