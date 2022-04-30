import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YhwhComponent } from './yhwh.component';

describe('YhwhComponent', () => {
  let component: YhwhComponent;
  let fixture: ComponentFixture<YhwhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YhwhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YhwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
