import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfSampleComponent } from './ng-if-sample.component';

describe('NgIfSampleComponent', () => {
  let component: NgIfSampleComponent;
  let fixture: ComponentFixture<NgIfSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
