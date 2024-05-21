import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  async getContries() {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const data = response.data.data;
      const formatCountries = data.map((country: { country: string }) => ({
        country: country.country,
      }));
      return formatCountries;
    } catch (error) {
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status);
      } else if (error.request) {
        throw new HttpException('Sem resposta do servidor', HttpStatus.BAD_GATEWAY);
      } else {
        throw new HttpException('Erro ao configurar o pedido', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
