import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSplashEffectComponent } from './text-splash-effect.component';

describe('TextSplashEffectComponent', () => {
  let component: TextSplashEffectComponent;
  let fixture: ComponentFixture<TextSplashEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSplashEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSplashEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
