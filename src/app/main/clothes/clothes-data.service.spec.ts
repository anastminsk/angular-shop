import { TestBed, inject } from '@angular/core/testing';

import { ClothesDataService } from './clothes-data.service';

describe('ClothesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClothesDataService]
    });
  });

  it('should be created', inject([ClothesDataService], (service: ClothesDataService) => {
    expect(service).toBeTruthy();
  }));
});
