import { Module } from '@nestjs/common';
import { BankAccountUsersController } from './bank-account-users.controller';
import { BankAccountUsersService } from './bank-account-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountUser } from './bank-account-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountUser])],
  controllers: [BankAccountUsersController],
  providers: [BankAccountUsersService]
})
export class BankAccountUsersModule {}
