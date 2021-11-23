import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesSampleComponent } from './pipes-sample.component';

describe('PipesSampleComponent', () => {
  let component: PipesSampleComponent;
  let fixture: ComponentFixture<PipesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
