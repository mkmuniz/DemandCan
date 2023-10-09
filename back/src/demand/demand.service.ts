import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DemandEntity } from './entities/demand.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class DemandService {
  constructor(
    @InjectRepository(DemandEntity)
    private demandRepository: Repository<DemandEntity>
  ) {}

  async getAllDemands(): Promise<DemandEntity[]> {
    return await this.demandRepository.find();
  }

  async createDemand(demand: any): Promise<DemandEntity> {
    return await this.demandRepository.save(demand);
  }

  async updateDemand(id: any, body): Promise<UpdateResult> {
    return await this.demandRepository.update(id, body);
  }

  async deleteDemand(id: any): Promise<any> {
    return await this.demandRepository.delete(id);
  }
}
