import { Test, TestingModule } from '@nestjs/testing';
import { SugarService } from './sugar.service';

describe('SugarService', () => {
  let service: SugarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SugarService],
    }).compile();

    service = module.get<SugarService>(SugarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
