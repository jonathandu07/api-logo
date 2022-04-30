import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetisComponent } from './metis.component';

describe('MetisComponent', () => {
  let component: MetisComponent;
  let fixture: ComponentFixture<MetisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
