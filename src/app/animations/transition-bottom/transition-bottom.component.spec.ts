import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransitionBottomComponent} from './transition-bottom.component';

describe('TransitionBottomComponent', () => {
	let component: TransitionBottomComponent;
	let fixture: ComponentFixture<TransitionBottomComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TransitionBottomComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TransitionBottomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
