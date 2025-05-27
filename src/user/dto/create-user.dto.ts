/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';
import { UserRole } from '../user.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsIn(['shepherd', 'tesoureiro', 'admin'])
  role?: UserRole;

  @IsNotEmpty()
  @IsString()
  churchName: string;

  @IsOptional()
  @IsString()
  churchId?: string;
}
