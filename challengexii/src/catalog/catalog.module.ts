import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatalogRepository } from './repository/catalog.repository';

@Module({
  controllers: [CatalogController],
  providers: [PrismaService, CatalogService, CatalogRepository],
})
export class CatalogModule {}
