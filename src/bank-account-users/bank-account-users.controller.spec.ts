import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountUsersController } from './bank-account-users.controller';

describe('BankAccountUsersController', () => {
  let controller: BankAccountUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountUsersController],
    }).compile();

    controller = module.get<BankAccountUsersController>(BankAccountUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
