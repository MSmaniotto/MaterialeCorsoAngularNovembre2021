import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolazioneComponent } from './interpolazione.component';

describe('InterpolazioneComponent', () => {
  let component: InterpolazioneComponent;
  let fixture: ComponentFixture<InterpolazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
