import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private demandRepository: Repository<StockEntity>
  ) {}

  async getAllStocks(): Promise<StockEntity[]> {
    return await this.demandRepository.find();
  }

  async createStock(demand: any): Promise<StockEntity> {
    return await this.demandRepository.save(demand);
  }

  async updateStock(id: any, body): Promise<UpdateResult> {
    return await this.demandRepository.update(id, body);
  }

  async deleteStock(id: any): Promise<any> {
    return await this.demandRepository.delete(id);
  }
}
