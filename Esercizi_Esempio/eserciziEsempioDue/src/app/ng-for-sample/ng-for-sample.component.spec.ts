import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForSampleComponent } from './ng-for-sample.component';

describe('NgForSampleComponent', () => {
  let component: NgForSampleComponent;
  let fixture: ComponentFixture<NgForSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
