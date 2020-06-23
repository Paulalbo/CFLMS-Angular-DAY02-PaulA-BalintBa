import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarsComponent } from './app-cars.component';

describe('AppCarsComponent', () => {
  let component: AppCarsComponent;
  let fixture: ComponentFixture<AppCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
