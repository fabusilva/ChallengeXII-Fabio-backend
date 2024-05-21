import { Body, Controller, Post } from '@nestjs/common';
import { CityService } from './city.service';
import { CountryDto } from './dto/CityDTO';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}
  @Post()
  async getcities(@Body() countryDto: CountryDto) {
    return await this.cityService.getCities(countryDto.country);
  }
}
