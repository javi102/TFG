import { TestBed } from '@angular/core/testing';

import { AutomatizacionVozService } from './automatizacion-voz.service';

describe('AutomatizacionVozService', () => {
  let service: AutomatizacionVozService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomatizacionVozService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
