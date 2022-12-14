import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { CompanyModule } from './company/company.module';
import { TransactionModule } from './transaction/transaction.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { BankAccountUsersModule } from './bank-account-users/bank-account-users.module';
import { Transaction } from './transaction/transaction.entity';
import { Company } from './company/company.entity';
import { BankAccountUser } from './bank-account-users/bank-account-users.entity';
import { BankAccount } from './bank-account/bank-account.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    database: 'minibank',
    username: 'postgres',
    password: 'postgres',
    entities: [User, Transaction, Company, BankAccountUser, BankAccount],
    // entities will be 'User entity' and 'Report entity'
    synchronize: true,
  }),
    UsersModule, CompanyModule, TransactionModule, BankAccountModule, BankAccountUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
