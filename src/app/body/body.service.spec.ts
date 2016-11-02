/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BodyService } from './body.service';

describe('Service: Body', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyService]
    });
  });

  it('should ...', inject([BodyService], (service: BodyService) => {
    expect(service).toBeTruthy();
  }));
});
