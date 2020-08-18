import { TestBed } from '@angular/core/testing';

import { ApiDragonService } from './api-dragon.service';

describe('ApiDragonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDragonService = TestBed.get(ApiDragonService);
    expect(service).toBeTruthy();
  });
});
