import { IsEmail, IsString, IsOptional } from "class-validator";
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string

  @IsOptional()
  @IsEmail()
  email: string;
}