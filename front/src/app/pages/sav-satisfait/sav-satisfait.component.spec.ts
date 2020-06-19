import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavSatisfaitComponent } from './sav-satisfait.component';

describe('SavSatisfaitComponent', () => {
  let component: SavSatisfaitComponent;
  let fixture: ComponentFixture<SavSatisfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavSatisfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavSatisfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
