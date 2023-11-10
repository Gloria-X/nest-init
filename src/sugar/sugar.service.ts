import { Injectable } from '@nestjs/common';

@Injectable()
export class SugarService {
  addSugar() {
    return ' + sugar';
  }
}
