import {Component, OnInit, ViewChild} from '@angular/core';
import {DetailsComponent} from './details/details.component';

@Component({
	selector: 'coop-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	@ViewChild(DetailsComponent) detailComponent: DetailsComponent;

	public formToggled = true;
	protected touched = false;

	constructor() {
	}

	ngOnInit() {
	}

	touchScreen() {
		if (this.touched) {
			return;
		}
		this.touched = true;
		this.detailComponent.toggleIcons();
	}
}
