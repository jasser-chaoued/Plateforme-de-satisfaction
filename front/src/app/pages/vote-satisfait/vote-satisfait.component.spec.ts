import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSatisfaitComponent } from './vote-satisfait.component';

describe('VoteSatisfaitComponent', () => {
  let component: VoteSatisfaitComponent;
  let fixture: ComponentFixture<VoteSatisfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSatisfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSatisfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
