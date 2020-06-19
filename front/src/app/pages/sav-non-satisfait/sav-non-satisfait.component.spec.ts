import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavNonSatisfaitComponent } from './sav-non-satisfait.component';

describe('SavNonSatisfaitComponent', () => {
  let component: SavNonSatisfaitComponent;
  let fixture: ComponentFixture<SavNonSatisfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavNonSatisfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavNonSatisfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
