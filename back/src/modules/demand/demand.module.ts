import { Module } from '@nestjs/common';
import { DemandController } from './demand.controller';
import { DemandService } from './demand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntity } from './entities/demand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DemandEntity])],
  controllers: [DemandController],
  providers: [DemandService],
})

export class DemandModule {}
