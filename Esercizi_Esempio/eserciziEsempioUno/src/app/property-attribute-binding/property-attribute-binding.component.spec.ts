import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAttributeBindingComponent } from './property-attribute-binding.component';

describe('PropertyEventBindingComponent', () => {
  let component: PropertyAttributeBindingComponent;
  let fixture: ComponentFixture<PropertyAttributeBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyAttributeBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
