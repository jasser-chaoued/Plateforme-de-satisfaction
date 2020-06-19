import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteForServiceComponent } from './vote-for-service.component';

describe('VoteForServiceComponent', () => {
  let component: VoteForServiceComponent;
  let fixture: ComponentFixture<VoteForServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteForServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
