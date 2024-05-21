import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'O fistName não pode ser vazio' })
  @IsString({ message: 'O fistName é uma string' })
  fistName: string;

  @IsNotEmpty({ message: 'O lastName não pode ser vazio' })
  @IsString({ message: 'O lastName é uma string' })
  lastName: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  @IsString({ message: 'O email é uma string' })
  email: string;

  @IsNotEmpty({ message: 'O country não pode ser vazio' })
  @IsString({ message: 'O country é uma string' })
  country: string;

  @IsNotEmpty({ message: 'O city não pode ser vazio' })
  @IsString({ message: 'O city é uma string' })
  city: string;

  @IsNotEmpty({ message: 'O referralCode não pode ser vazio' })
  @IsString({ message: 'O referralCode é uma string' })
  referralCode: string;

  @IsNotEmpty({ message: 'O typeCar não pode ser vazio' })
  @IsString({ message: 'O typeCar é uma string' })
  typeCar: string;
}
