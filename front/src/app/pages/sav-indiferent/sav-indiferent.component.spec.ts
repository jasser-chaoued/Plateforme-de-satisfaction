import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavIndiferentComponent } from './sav-indiferent.component';

describe('SavIndiferentComponent', () => {
  let component: SavIndiferentComponent;
  let fixture: ComponentFixture<SavIndiferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavIndiferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavIndiferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
