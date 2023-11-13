import { CoffeeService } from './coffee.service';
import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  constructor(
    private readonly coffeeService: CoffeeService,
  ) {}

  @Get('order')
  aCupOfCoffee() {
    return this.coffeeService.getCoffee();
  }
}
