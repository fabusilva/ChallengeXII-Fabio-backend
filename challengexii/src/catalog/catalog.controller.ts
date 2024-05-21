import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogDTO } from './dto/catalog.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly service: CatalogService) {}

  @Post()
  async createCatalog(@Body() CatalogDTO: CatalogDTO) {
    return await this.service.create(CatalogDTO);
  }

  @Get()
  async findAll(){
    return await this.service.get();
  }
}
