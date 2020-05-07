import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VierGewinntBoardComponent } from './vier-gewinnt-board.component';

describe('VierGewinntBoardComponent', () => {
  let component: VierGewinntBoardComponent;
  let fixture: ComponentFixture<VierGewinntBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VierGewinntBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VierGewinntBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
