import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnyoComponent } from './enyo.component';

describe('EnyoComponent', () => {
  let component: EnyoComponent;
  let fixture: ComponentFixture<EnyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
