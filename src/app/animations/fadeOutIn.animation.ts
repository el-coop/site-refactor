import {trigger, state, animate, style, group, query, transition} from '@angular/animations';

export const fadeOutIn = trigger('fadeOutIn', [
	state('void', style({
		opacity: 0
	})),
	transition('void => *', [
		style({
			opacity: 0
		}),
		animate('1s 0.5s', style({
			opacity: 1
		}))
	]),
	transition('* => void', [
		style({
			opacity: 1,
			position: 'absolute',
			top: 0,
			left: 0,
		}),
		animate('0.5s', style({
			opacity: 0
		}))
	])
]);
