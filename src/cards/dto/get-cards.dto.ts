import { IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
export class GetCardsFilterDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit: number = 15;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  offset: number = 0;

  @IsOptional()
  @IsNotEmpty({ message: 'La cadena a buscar no puede estar vacía.' })
  search: string;
}
