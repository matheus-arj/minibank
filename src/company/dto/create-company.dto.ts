import { IsEmail, IsString } from "class-validator"

export class CreateCompanyDto {
  @IsString()
  legalName: string

  @IsEmail()
  emailAddress: string
}

