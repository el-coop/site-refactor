import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'coop-animation-text-splash-effect',
	templateUrl: './text-splash-effect.component.html',
	styleUrls: ['./text-splash-effect.component.scss']
})
export class TextSplashEffectComponent implements OnInit {

	@Input() text: string;

	constructor() {
	}

	ngOnInit() {
	}

}
