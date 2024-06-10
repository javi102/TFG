import { TestBed } from '@angular/core/testing';

import { ReconocimientoVozService } from './reconocimiento-voz.service';

describe('ReconocimientoVozService', () => {
  let service: ReconocimientoVozService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconocimientoVozService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
