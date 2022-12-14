import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>){}

  create(name: string, email: string) {
    const user = this.repo.create({name, email});

    return this.repo.save(user)
  }

  getById(userid: number) {
     // return this.repo.find({where: { id }})
     return this.repo.findOneBy({ userid })
  }

  find(name: string) {
   return this.repo.find({ where: { name }});
  }

 async update(id: number, attrs: Partial<User>) {
  const user = await this.getById(id);
  if (!user) {
    throw new NotFoundException('user not found')
  }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
}