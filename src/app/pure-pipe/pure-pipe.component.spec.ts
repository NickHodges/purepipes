import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurePipeComponent } from './pure-pipe.component';

describe('PurePipeComponent', () => {
  let component: PurePipeComponent;
  let fixture: ComponentFixture<PurePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
