import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveExampleComponent } from './form-reactive-example.component';

describe('FormReactiveExampleComponent', () => {
  let component: FormReactiveExampleComponent;
  let fixture: ComponentFixture<FormReactiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
