import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VierGewinntComponent } from './vier-gewinnt.component';

describe('VierGewinntComponent', () => {
  let component: VierGewinntComponent;
  let fixture: ComponentFixture<VierGewinntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VierGewinntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VierGewinntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
