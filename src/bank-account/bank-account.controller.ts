import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { createBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Controller('bankAccount')
export class BankAccountController {
  constructor(private bankAccountService: BankAccountService) {}

@Post('')
createBankAccount(@Body() body: createBankAccountDto) {
  this.bankAccountService.create(
    body.userId,
    body.companyId,
    body.baasId,
    body.numberAccount
    )
}

@Get('/:id')
async findUser(@Param('id') id: number) {
  const bankAccount = await this.bankAccountService.getById(id);
  if (!bankAccount) {
    throw new NotFoundException('bank account not found')
  }
  return bankAccount;
}

@Get()
findAllBankAccount(@Query('bankAccountId') id: number) {
  return this.bankAccountService.find(id);
}

@Patch('/:bankAccountId')
updateBankAccount(@Param('bankAccountId') id: number, @Body() body: UpdateBankAccountDto) {
  return this.bankAccountService.update((id), body)
}

}