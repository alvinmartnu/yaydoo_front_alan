import { TestBed } from '@angular/core/testing';

import { YaydooService } from './yaydoo.service';

describe('YaydooService', () => {
  let service: YaydooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YaydooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
