import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HestiaComponent } from './hestia.component';

describe('HestiaComponent', () => {
  let component: HestiaComponent;
  let fixture: ComponentFixture<HestiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HestiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HestiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
