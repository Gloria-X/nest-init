import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { SugarModule } from 'src/sugar/sugar.module';
import { CoffeeService } from './coffee.service';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  imports: [SugarModule, ConfigModule],
})
export class CoffeeModule {}
