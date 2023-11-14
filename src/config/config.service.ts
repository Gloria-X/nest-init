import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getDatabaseConfig(): any {
    return {
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '66013699',
      database: 'nest_init',
    };
  }
}
