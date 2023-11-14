import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { SugarController } from './sugar/sugar.controller';
import { SugarService } from './sugar/sugar.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule.forRoot(new ConfigService().getDatabaseConfig())],
  controllers: [CoffeeController, SugarController],
  providers: [CoffeeService, SugarService],
})
export class AppModule {}
