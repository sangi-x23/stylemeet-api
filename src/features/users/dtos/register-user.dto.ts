import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  id_rol: number;

  @IsNumber()
  @IsOptional()
  id_branch?: number;

  @IsNumber()
  @IsOptional()
  id_company?: number;
}