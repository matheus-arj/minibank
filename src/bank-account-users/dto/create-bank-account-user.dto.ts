import { IsString, IsNumber } from "class-validator";

export class CreateBankAccountUserDto {
  id: number

  userId: string
  
  bankAccountId: string
}