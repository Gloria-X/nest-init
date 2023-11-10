import { SugarService } from './sugar.service';
import { Controller, Get } from '@nestjs/common';

@Controller('sugar')
export class SugarController {
  constructor(private readonly sugarService: SugarService) {}

  @Get('order')
  addSomeSugar() {
    return this.sugarService.addSugar();
  }
}
