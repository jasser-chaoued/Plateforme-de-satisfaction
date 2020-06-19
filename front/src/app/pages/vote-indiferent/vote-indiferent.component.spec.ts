import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteIndiferentComponent } from './vote-indiferent.component';

describe('VoteIndiferentComponent', () => {
  let component: VoteIndiferentComponent;
  let fixture: ComponentFixture<VoteIndiferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteIndiferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteIndiferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
