import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionLecComponent } from './clasificacion-lec.component';

describe('ClasificacionLecComponent', () => {
  let component: ClasificacionLecComponent;
  let fixture: ComponentFixture<ClasificacionLecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasificacionLecComponent]
    });
    fixture = TestBed.createComponent(ClasificacionLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
