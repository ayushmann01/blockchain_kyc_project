import { TestBed } from '@angular/core/testing';

import { Web3Service } from './web3-service.service';

describe('Web3ServiceService', () => {
  let service: Web3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
