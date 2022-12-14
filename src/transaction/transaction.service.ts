import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {}

  create(userId: number, bankAccountId: number, value: number, createdAt: string) {
    const user = this.repo.create({ userId, bankAccountId, value, createdAt});

    return this.repo.save(user)
  }
}
