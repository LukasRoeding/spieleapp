import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VierGewinntSquareComponent } from './vier-gewinnt-square.component';

describe('VierGewinntSquareComponent', () => {
  let component: VierGewinntSquareComponent;
  let fixture: ComponentFixture<VierGewinntSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VierGewinntSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VierGewinntSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
