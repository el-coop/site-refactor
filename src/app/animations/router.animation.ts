import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
	transition('* <=> *', [
		query(':enter, :leave', style({
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: 0,
				left: 0
			})
			, {optional: true}),
		group([
			query(':enter', [
				style({
					'z-index': 1,
					'background-color': '#353c49'
				}),
				animate('3s ease-in-out', style({
					'background-color': '#2c323d'
				})),
			], {optional: true}),
			query(':leave', [
				style({
					'z-index': 10,
					transform: 'translateY(0)',
					'background-color': '#2c323d',
				}),
				animate('3s ease-in-out', style({
					transform: 'translateY(-200vh)',
				})),
			], {optional: true}),
		]),
	])
]);
