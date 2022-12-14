import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountUsersService } from './bank-account-users.service';

describe('BankAccountUsersService', () => {
  let service: BankAccountUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountUsersService],
    }).compile();

    service = module.get<BankAccountUsersService>(BankAccountUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
