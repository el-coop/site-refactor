import {Component, OnInit} from '@angular/core';
import {routerTransition} from './animations/router.animation';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Component({
	selector: 'coop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routerTransition],
})
export class AppComponent implements OnInit {
	title = 'coop';

	constructor(private http: HttpClient) {
	}


	ngOnInit(): void {
		console.log('here');
		this.http.get('/api/csrf-token').subscribe((res) => {
			console.log('csrf-token');
		}, (err: HttpErrorResponse) => {
			console.log(err);
		});
	}

	prepareRouteTransition(outlet) {
		return outlet.activatedRouteData.state;
	}

}
