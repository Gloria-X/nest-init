import { Injectable } from '@nestjs/common';

@Injectable()
export class SugarService {
  useSugar() {
    return ' with sugar';
  }
}
