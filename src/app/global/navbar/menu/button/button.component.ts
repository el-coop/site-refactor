import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';

@Component({
	selector: 'coop-menu-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	@Output() toggled = new EventEmitter<boolean>();
	public open = false;

	constructor(private router: Router) {
		router.events.subscribe((event: Event) => {
			if (event instanceof NavigationStart) {
				this.open = false;
				this.toggled.emit(this.open);
			}
		});
	}


	ngOnInit() {
	}

	toggle() {
		this.open = !this.open;
		this.toggled.emit(this.open);
	}

}
