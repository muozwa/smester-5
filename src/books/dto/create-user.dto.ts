import { IsNotEmpty, IsEmail, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'; // <--- DARI CLASS-TRANSFORMER
import { AddressDto } from './address.dto';

export class CreateUserDto {
  @IsNotEmpty()
  readonly fullName: string;

  @IsEmail()
  readonly email: string;

  // ⚠️ DUA DEKORATOR INI ADALAH PASANGAN WAJIB!
  @ValidateNested()
  @Type(() => AddressDto) // Memberitahu NestJS untuk mengonversi plain object ke instance AddressDto
  readonly address: AddressDto;
}