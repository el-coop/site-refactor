import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {SlicesAnimationComponent} from '../../../animations/slices-animation/slices-animation.component';

@Component({
	selector: 'coop-contact-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {
	@ViewChildren(SlicesAnimationComponent) iconsElements: QueryList<SlicesAnimationComponent>;
	protected icons = [];

	constructor() {
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.icons = this.iconsElements.toArray();
	}

	toggleIcons() {
		this.icons.forEach((item) => {
			item.showItems();
		});
	}
}
