import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { SugarModule } from 'src/sugar/sugar.module';
import { CoffeeService } from './coffee.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
