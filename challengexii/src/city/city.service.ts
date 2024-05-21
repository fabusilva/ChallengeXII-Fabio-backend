import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CityService {
  async getCities(country: string) {
    try {
      const response = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/cities',
        { country: country },
      );
      const data = response.data.data;
      return data;
    } catch (error) {
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status);
      } else if (error.request) {
        throw new HttpException('Sem resposta do servidor',HttpStatus.BAD_GATEWAY);
      } else {
        throw new HttpException('Erro ao configurar o pedido',HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
