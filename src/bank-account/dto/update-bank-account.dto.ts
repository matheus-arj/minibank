import { IsEmail, IsString, IsOptional, IsNumber } from "class-validator";
export class UpdateBankAccountDto {

  @IsNumber()
  numberAccount: number
}