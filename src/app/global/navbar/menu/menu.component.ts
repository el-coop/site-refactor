import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'coop-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	protected open = false;

	constructor() {
	}

	ngOnInit() {
	}

	toggle(open: boolean) {
		this.open = open;
	}

}
