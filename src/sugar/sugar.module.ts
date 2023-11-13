import { Module } from '@nestjs/common';
import { SugarController } from 'src/sugar/sugar.controller';
import { SugarService } from './sugar.service';
@Module({
  controllers: [SugarController],
  providers: [SugarService],
})
export class SugarModule {}
