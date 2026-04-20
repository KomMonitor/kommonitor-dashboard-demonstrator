import { TestBed } from '@angular/core/testing';

import { GridHandler } from './grid-handler';

describe('GridHandler', () => {
  let service: GridHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
