import {Component} from '@angular/core';
import {routerTransition} from './animations/router.animation';


@Component({
	selector: 'coop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routerTransition],
})
export class AppComponent {
	title = 'coop';

	constructor() {
	}


	prepareRouteTransition(outlet) {
		return outlet.activatedRouteData.state;
	}

}
