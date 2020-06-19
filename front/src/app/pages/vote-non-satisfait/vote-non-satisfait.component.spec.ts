import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteNonSatisfaitComponent } from './vote-non-satisfait.component';

describe('VoteNonSatisfaitComponent', () => {
  let component: VoteNonSatisfaitComponent;
  let fixture: ComponentFixture<VoteNonSatisfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteNonSatisfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteNonSatisfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
