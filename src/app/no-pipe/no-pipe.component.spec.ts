import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPipeComponent } from './no-pipe.component';

describe('NoPipeComponent', () => {
  let component: NoPipeComponent;
  let fixture: ComponentFixture<NoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
