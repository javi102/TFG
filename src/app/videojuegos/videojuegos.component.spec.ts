import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideojuegosComponent } from './videojuegos.component';
import { ClasificacionComponent } from '../clasificacion/clasificacion.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideojuegosComponent, ClasificacionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    });
    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
