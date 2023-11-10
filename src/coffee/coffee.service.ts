import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  getCoffee() {
    return 'I want some coffee';
  }
}
