import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdechoComponent } from './ardecho.component';

describe('ArdechoComponent', () => {
  let component: ArdechoComponent;
  let fixture: ComponentFixture<ArdechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdechoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
