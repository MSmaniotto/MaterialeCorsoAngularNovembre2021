import { TestBed } from '@angular/core/testing';

import { PeopleProviderService } from './people-provider.service';

describe('PeopleProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleProviderService = TestBed.get(PeopleProviderService);
    expect(service).toBeTruthy();
  });
});
