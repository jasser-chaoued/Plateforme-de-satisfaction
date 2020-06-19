import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoVoteComponent } from './go-vote.component';

describe('GoVoteComponent', () => {
  let component: GoVoteComponent;
  let fixture: ComponentFixture<GoVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
