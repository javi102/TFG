import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerraComponent } from './guerra.component';

describe('GuerraComponent', () => {
  let component: GuerraComponent;
  let fixture: ComponentFixture<GuerraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuerraComponent]
    });
    fixture = TestBed.createComponent(GuerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
