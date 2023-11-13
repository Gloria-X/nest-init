import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeModule } from './coffee/coffee.module';
import { SugarController } from './sugar/sugar.controller';
import { SugarService } from './sugar/sugar.service';
import { SugarModule } from './sugar/sugar.module';

@Module({
  imports: [CoffeeModule, SugarModule],
  controllers: [CoffeeController, SugarController],
  providers: [CoffeeService, SugarService],
})
export class AppModule {}
