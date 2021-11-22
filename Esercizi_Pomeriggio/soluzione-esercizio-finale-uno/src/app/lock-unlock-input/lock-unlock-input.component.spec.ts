import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockUnlockInputComponent } from './lock-unlock-input.component';

describe('LockUnlockInputComponent', () => {
  let component: LockUnlockInputComponent;
  let fixture: ComponentFixture<LockUnlockInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockUnlockInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockUnlockInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
