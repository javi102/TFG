import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PoliticaComponent } from './politica.component';
import { PoliticaApiService } from '../api/politica-api.service';

describe('PoliticaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliticaComponent],
      imports: [HttpClientTestingModule],
      providers: [PoliticaApiService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PoliticaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
