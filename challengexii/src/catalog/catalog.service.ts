import { Injectable } from '@nestjs/common';
import { CatalogRepository } from './repository/catalog.repository';
import { CatalogDTO } from './dto/catalog.dto';

@Injectable()
export class CatalogService {
  constructor(private readonly repository: CatalogRepository) {}

  create(CatalogDTO: CatalogDTO) {
    return this.repository.create(CatalogDTO);
  }

  get() {
    return this.repository.get();
  }
}
