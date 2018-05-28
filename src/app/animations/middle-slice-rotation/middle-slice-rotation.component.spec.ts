import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSliceRotationComponent } from './middle-slice-rotation.component';

describe('MiddleSliceRotationComponent', () => {
  let component: MiddleSliceRotationComponent;
  let fixture: ComponentFixture<MiddleSliceRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleSliceRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSliceRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
