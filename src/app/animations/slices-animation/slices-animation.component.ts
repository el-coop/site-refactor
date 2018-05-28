import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'coop-animation-slices-animation',
	templateUrl: './slices-animation.component.html',
	styleUrls: ['./slices-animation.component.scss']
})
export class SlicesAnimationComponent implements OnInit, AfterViewInit {
	@Input() src: string;
	@Input() height: number;
	@Input() width: number;
	@Input() slices: number;
	@Input() title: string;

	protected style;
	protected image;
	protected canvas: ElementRef;
	protected pieces;
	protected items;

	constructor(private elementRef: ElementRef, private sanitizer: DomSanitizer) {
	}


	ngOnInit() {
		this.style = this.sanitizer.bypassSecurityTrustStyle(`height: ${this.height}px; width: ${this.width}px; margin-left: ${this.width * 0.25}px`);
		this.image = new Image(this.width, this.height);
		this.items = [{
			type: 'image',
			value: this.image,
			options: {
				piecesSpacing: 0,
				angle: 45, // rotate item pieces 45deg
				extraSpacing: {extraX: 100, extraY: 200}, // this extra spacing is needed to cover all the item, because angle != 0
				piecesWidth: () => {
					return this.width / this.slices;
				}, // every piece will have a random width between 50px and 200px
				ty: function () {
					return Pieces.random(-400, 400);
				} // every piece will be translated in the Y axis a random distance between -400px and 400px
			}
		}];

		if (this.title) {
			this.items.push({
				type: 'text',
				value: this.title,
				options: {
					fontWeight: 400,
					color: '#fff',
					backgroundColor: '#0066CC',
					fontSize: 16,
					padding: '6 8 6 8',
					angle: -45,
					extraSpacing: {extraX: 0, extraY: 300},
					piecesWidth: 30,
					piecesSpacing: 1,
					ty: function () {
						return Pieces.random(-200, 200);
					},
					translate: {translateX: 0, translateY: -this.height / 15}
				}
			});
		}
	}

	ngAfterViewInit() {
		this.canvas = this.elementRef.nativeElement.getElementsByTagName('canvas')[0];
		this.image.src = this.src;

		this.image.onload = () => {
			this.startAnimation();
		};
	}

	startAnimation() {
		this.pieces = new Pieces({
			canvas: this.canvas, // CSS selector to get the canvas
			items: this.items, // the Array of items we've built before
			x: 'centerAll', // center all items in the X axis
			y: 'centerAll', // center all items in the Y axis
			animation: { // animation options to use in any operation
				duration: function () {
					return 1000;
				},
				easing: 'easeOutQuint'
			}
		});

	}

	showItems() {
		this.pieces.showPieces({
			items: 0,
			ignore: ['tx'],
			singly: true
		});

		this.pieces.showPieces({
			item: 1
		});
	}

	hideItems() {
		this.pieces.hidePieces({
			items: [0, 1],
			ignore: ['tx'],
			singly: true
		});

	}
}
