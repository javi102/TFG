import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurovisionComponent } from './eurovision.component';

describe('EurovisionComponent', () => {
  let component: EurovisionComponent;
  let fixture: ComponentFixture<EurovisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EurovisionComponent]
    });
    fixture = TestBed.createComponent(EurovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
