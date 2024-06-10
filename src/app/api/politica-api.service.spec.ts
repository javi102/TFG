import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PoliticaApiService } from './politica-api.service';

describe('PoliticaApiService', () => {
  let service: PoliticaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PoliticaApiService]
    });
    service = TestBed.inject(PoliticaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
