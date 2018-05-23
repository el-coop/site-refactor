import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
	selector: 'coop-animation-transition-bottom',
	templateUrl: './transition-bottom.component.html',
	styleUrls: ['./transition-bottom.component.scss']
})
export class TransitionBottomComponent implements OnInit {
	@ViewChild('animation') animation: ElementRef;

	constructor(private router: Router) {
		router.events.subscribe((event: Event) => {

			if (event instanceof NavigationStart) {
				this.animation.nativeElement.beginElement();
			}
		});
	}


	ngOnInit() {
	}

}
