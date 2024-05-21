import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatalogDTO } from '../dto/catalog.dto';

@Injectable()
export class CatalogRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(CatalogDTO: CatalogDTO) {
    return this.prisma.catalog.create({ data: CatalogDTO });
  }

  get() {
    return this.prisma.catalog.findMany();
  }
}
