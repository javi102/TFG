import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EducacionComponent } from './educacion.component';
import { InfoeduService } from '../api/infoedu.service';

describe('EducacionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducacionComponent],
      imports: [HttpClientTestingModule],
      providers: [InfoeduService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EducacionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
