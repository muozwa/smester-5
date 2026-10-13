import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class AddressDto {
  @IsNotEmpty({ message: 'Nama jalan wajib diisi' })
  @IsString()
  readonly street: string;

  @IsNotEmpty({ message: 'Kota wajib diisi' })
  @IsString()
  readonly city: string;

  @IsInt({ message: 'Kode pos harus berupa angka' })
  readonly postalCode: number;
}