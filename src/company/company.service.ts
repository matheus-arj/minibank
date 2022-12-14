import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private repo: Repository<Company>) {}

  create(legalName: string, emailAddress: string) {
    const company = this.repo.create({legalName, emailAddress}); 
    return this.repo.save(company)
  }

  getById(id: number) {
    // return this.repo.find({where: { id }})
    return this.repo.findOneBy({ id })
 }

 find(legalName: string) {
   return this.repo.find({ where: { legalName }});
 }

async update(id: number, attrs: Partial<Company>) {
 const company = await this.getById(id);
 if (!company) {
   throw new NotFoundException('company not found')
 }
   Object.assign(company, attrs);
   return this.repo.save(company);
 }
}
