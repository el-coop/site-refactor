import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicesAnimationComponent } from './slices-animation.component';

describe('SlicesAnimationComponent', () => {
  let component: SlicesAnimationComponent;
  let fixture: ComponentFixture<SlicesAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicesAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
