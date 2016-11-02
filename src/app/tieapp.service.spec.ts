/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TieappService } from './tieapp.service';

describe('Service: Tieapp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TieappService]
    });
  });

  it('should ...', inject([TieappService], (service: TieappService) => {
    expect(service).toBeTruthy();
  }));
});
