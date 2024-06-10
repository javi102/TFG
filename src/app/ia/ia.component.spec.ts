import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IaComponent } from './ia.component';
import { BotNoticiaService } from '../api/bot-noticia.service';

describe('IaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaComponent],
      imports: [HttpClientTestingModule],
      providers: [BotNoticiaService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
