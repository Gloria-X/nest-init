// database.module.ts
import { Module, DynamicModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  static forRoot(databaseConfig: any): DynamicModule {
    return {
      module: ConfigModule,
      imports: [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.database,
          autoLoadModels: true,
          synchronize: true,
        }),
      ],
      providers: [ConfigService],
      exports: [SequelizeModule],
    };
  }
}
