import {IsString, IsNumber } from "class-validator"

export class CreateTransactionDto {
  userId: number
  bankAccountId: number
  value: number
  createdAt: string
}

