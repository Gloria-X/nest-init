import { Module } from '@nestjs/common';

@Module({
  exports: [SugarModule],
})
export class SugarModule {}
