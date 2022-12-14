import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from './bank-account.entity';

@Injectable()
export class BankAccountService {
  constructor(@InjectRepository(BankAccount) private repo: Repository<BankAccount>) {}

  async create(userId: number, companyId: number, baasId: string, numberAccount: number) {
    const bankAccount = await this.repo.save({ userId, companyId, baasId, numberAccount });

    return this.repo.save(bankAccount)
  }

  async update(id: number, attrs: Partial<BankAccount>) {
    const bankAccount = await this.getById(id);
    if (!bankAccount) {
      throw new NotFoundException('bank account not found')
    }

    Object.assign(bankAccount, attrs);
    return this.repo.save(bankAccount)
  }
  
  find(id: number) {
    return this.repo.find({ where: { id }})
  } 

  getById(id: number) {
    return this.repo.findOneBy({ id });
  }
}