import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BotNoticiaService } from './bot-noticia.service';

describe('BotNoticiaService', () => {
  let service: BotNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BotNoticiaService]
    });
    service = TestBed.inject(BotNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
