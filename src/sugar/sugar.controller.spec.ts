import { Test, TestingModule } from '@nestjs/testing';
import { SugarController } from './sugar.controller';

describe('SugarController', () => {
  let controller: SugarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugarController],
    }).compile();

    controller = module.get<SugarController>(SugarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
