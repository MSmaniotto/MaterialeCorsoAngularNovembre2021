import { TestBed } from '@angular/core/testing';

import { FoodProviderService } from './food-provider.service';

describe('FoodProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodProviderService = TestBed.get(FoodProviderService);
    expect(service).toBeTruthy();
  });
});
