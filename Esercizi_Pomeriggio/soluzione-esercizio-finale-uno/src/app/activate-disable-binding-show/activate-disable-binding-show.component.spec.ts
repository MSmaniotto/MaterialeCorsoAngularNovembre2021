import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateDisableBindingShowComponent } from './activate-disable-binding-show.component';

describe('ActivateDisableBindingShowComponent', () => {
  let component: ActivateDisableBindingShowComponent;
  let fixture: ComponentFixture<ActivateDisableBindingShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateDisableBindingShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateDisableBindingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
