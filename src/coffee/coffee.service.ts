import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  getCoffee() {
    return "I'd like a cup of coffee";
  }
}
