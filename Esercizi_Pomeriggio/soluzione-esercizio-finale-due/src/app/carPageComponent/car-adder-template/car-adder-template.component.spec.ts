import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdderTemplateComponent } from './car-adder-template.component';

describe('CarAdderTemplateComponent', () => {
  let component: CarAdderTemplateComponent;
  let fixture: ComponentFixture<CarAdderTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAdderTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
