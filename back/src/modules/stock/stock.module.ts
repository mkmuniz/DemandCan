import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { StockService } from './stock.service';

@Module({
  imports: [TypeOrmModule.forFeature([StockEntity])],
  controllers: [StockController],
  providers: [StockService],
})

export class StockModule {}
