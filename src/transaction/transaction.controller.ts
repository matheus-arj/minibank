import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  createTranfer(@Body() body: CreateTransactionDto) {
    this.transactionService.create(
      body.userId,
      body.bankAccountId,
      body.value,
      body.createdAt)
  }
}
