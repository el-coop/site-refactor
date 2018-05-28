import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
	selector: 'coop-animation-middle-slice-rotation',
	templateUrl: './middle-slice-rotation.component.html',
	styleUrls: ['./middle-slice-rotation.component.scss']
})
export class MiddleSliceRotationComponent implements OnInit, AfterViewInit {
	@Input() src: string;
	@Input() height: number;
	@Input() width: number;

	protected image = new Image();
	protected canvas: ElementRef;
	protected items = [{
		type: 'image',
		value: this.image,
		options: {
			opacity: 0.2,
			angle: 0,
			piecesSpacing: 5,
			extraSpacing: {extraX: 10, extraY: 10},
			piecesWidth: () => {
				return this.width / 2;
			},
			ty: function () {
				return Pieces.random(-200, 200);
			}
		}
	}];

	constructor(private elementRef: ElementRef) {
	}


	ngOnInit() {
	}

	ngAfterViewInit() {
		this.canvas = this.elementRef.nativeElement.firstElementChild;
		this.image.src = this.src;

		this.image.onload = () => {
			this.startAnimation();
		};
	}

	startAnimation() {
		const pieces = new Pieces({
			canvas: this.canvas, // CSS selector to get the canvas
			items: this.items, // the Array of items we've built before
			x: 'centerAll', // center all items in the X axis
			y: 'centerAll', // center all items in the Y axis
			animation: { // animation options to use in any operation
				duration: function () {
					return Pieces.random(1000, 2000);
				},
				easing: 'easeOutQuint'
			},
		});

		pieces.animateItems({
			items: [0],
			duration: 20000,
			angle: 360,
			loop: true
		});

		pieces.showPieces({
			items: 0,
			ty: function (p, i) {
				return p.s_ty - [-3, 3][i % 2];
			}
		});
	}

}
