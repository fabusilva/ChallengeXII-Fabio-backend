import { IsNotEmpty, IsString } from 'class-validator';

export class CatalogDTO {
  @IsNotEmpty({ message: 'O title não pode ser vazio' })
  @IsString({ message: 'O title é uma string' })
  title: string;

  @IsNotEmpty({ message: 'O text não pode ser vazio' })
  @IsString({ message: 'O text é uma string' })
  text: string;

  @IsNotEmpty({ message: 'O url não pode ser vazio' })
  @IsString({ message: 'O url é uma string' })
  urlImage: string;
}