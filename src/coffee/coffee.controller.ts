import { SugarService } from 'src/sugar/sugar.service';
import { CoffeeService } from './coffee.service';
import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  constructor(
    private readonly coffeeService: CoffeeService,
    private readonly sugarService: SugarService,
  ) {}

  @Get('order')
  aCupOfCoffee() {
    const coffee = this.coffeeService.getCoffee();
    const sugar = this.sugarService.useSugar();
    return coffee + sugar;
  }
}
