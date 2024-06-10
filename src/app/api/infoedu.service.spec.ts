import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfoeduService } from './infoedu.service';

describe('InfoeduService', () => {
  let service: InfoeduService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InfoeduService]
    });
    service = TestBed.inject(InfoeduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
