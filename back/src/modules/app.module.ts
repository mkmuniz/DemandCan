import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DemandModule } from './demand/demand.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../db/data-source';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [DemandModule, StockModule, ConfigModule.forRoot({
    envFilePath: '.env',
  }),
    TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
})

export class AppModule { }
