import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DemandService } from './demand.service';
import { DemandEntity } from './entities/demand.entity';
import { UpdateResult } from 'typeorm';

@Controller('demand')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @Get()
  getAllDemands(): Promise<DemandEntity[]> {
    return this.demandService.getAllDemands();
  }

  @Post()
  createDemand(@Body() body: any): Promise<DemandEntity> {
    return this.demandService.createDemand(body);
  }

  @Patch(':id')
  updateDemand(@Param() params: any, @Body() body: any): Promise<UpdateResult> {
    return this.demandService.updateDemand(params.id, body);
  }

  @Delete(':id')
  deleteDemand(@Param() params: any): Promise<any> {
    return this.demandService.deleteDemand(params.id);
  }
}
