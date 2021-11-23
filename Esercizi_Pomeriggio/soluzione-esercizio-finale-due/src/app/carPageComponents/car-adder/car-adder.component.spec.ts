import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdderComponent } from './car-adder.component';

describe('CarAdderComponent', () => {
  let component: CarAdderComponent;
  let fixture: ComponentFixture<CarAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
