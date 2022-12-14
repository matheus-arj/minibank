import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateCompanyDto {
  @IsString()
  @IsOptional()
  legalName: string

  @IsOptional()
  @IsEmail()
  email: string;
}