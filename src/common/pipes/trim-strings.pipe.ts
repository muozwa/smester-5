import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class TrimStringsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Jika nilai yang masuk berupa string, hilangkan spasi di awal dan akhir
    if (typeof value === 'string') {
      return value.trim();
    }

    // Jika berupa objek (misal body DTO), bersihkan setiap properti string di dalamnya
    if (typeof value === 'object' && value !== null) {
      Object.keys(value).forEach((key) => {
        if (typeof value[key] === 'string') {
          value[key] = value[key].trim();
        }
      });
      return value;
    }

    return value;
  }
}