import { IsString } from 'class-validator';

export class CountryDto {
  @IsString()
  country: string;
}
