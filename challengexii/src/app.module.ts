import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryController } from './country/country.controller';
import { CountryService } from './country/country.service';
import { CountryModule } from './country/country.module';
import { CityController } from './city/city.controller';
import { CityService } from './city/city.service';
import { CityModule } from './city/city.module';
import { CatalogController } from './catalog/catalog.controller';
import { CatalogService } from './catalog/catalog.service';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogRepository } from './catalog/repository/catalog.repository';

@Module({
  imports: [UserModule, CountryModule, CityModule, CatalogModule],
  controllers: [AppController, CountryController, CityController, CatalogController],
  providers: [AppService, PrismaService, CountryService, CityService, CatalogService,CatalogRepository],
})
export class AppModule { }
