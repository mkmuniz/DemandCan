import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockEntity } from './entities/stock.entity';
import { UpdateResult } from 'typeorm';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getAllDemands(): Promise<StockEntity[]> {
    return this.stockService.getAllStocks();
  }

  @Post()
  createDemand(@Body() body: any): Promise<StockEntity> {
    return this.stockService.createStock(body);
  }

  @Patch()
  updateDemand(@Param() params: any, @Body() body: any): Promise<UpdateResult> {
    return this.stockService.updateStock(params.id, body);
  }

  @Delete(':id')
  deleteDemand(@Param() params: any): Promise<any> {
    return this.stockService.deleteStock(params.id);
  }
}
