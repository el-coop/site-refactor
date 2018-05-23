import {Component, ElementRef, OnInit} from '@angular/core';
import * as mojs from 'mo-js';

@Component({
	selector: 'coop-animation-ice-cream',
	templateUrl: './ice-cream.component.html',
	styleUrls: ['./ice-cream.component.scss']
})
export class IceCreamComponent implements OnInit {


	constructor(private elementRef: ElementRef) {
	}

	ngOnInit() {

		class Sundae extends mojs.CustomShape {
			getShape() {
				return '<path d="M 12.75,93.75 C 12.75,90 20.25,90 20.25,90 C 24,90 12.75,33.75 5.25,33.75 C 24,37.5 31.5,37.5 50.25,33.75 C 42.75,33.75 31.5,90 35.25,90 C 35.25,90 42.75,90 42.75,93.75 z M 24,75 C 24.75,75 20.25,48.75 18.75,48.75 M 31.5,75 C 30.75,75 35.25,48.75 36.75,48.75 M 27.75,71.25 L 27.75,45 M 5.25,33.75 C 1.5,33.75 0,22.5 6,22.5 C 1.5,7.5 25.5,7.5 24,22.5 C 31.5,22.5 31.5,30 27.75,30 M 23.25,15 C 21.75,16 27,12 27,12.75 M 29,12 C 29,9 34.5,9 34.5,12 C 34.5,15 29,15 29,12 M 31.5,9.75 C 32.25,11.25 35.25,3.75 24,0 M 36,10.5 C 50.25,10.5 46.5,24 46.5,24 C 54.75,21.75 54,31.5 50.25,33.75" style="stroke-linecap: round"></path>';
			}

			getLength() {
				return 284.3055114746094;
			}
		}

		class Petal extends mojs.CustomShape {
			getShape() {
				return '<path d="M 35,100 C 10,50 50,10 50,0 C 50,10 90,50 65,100 C 55,97 45,97 35,100"/>';
			}

			getLength() {
				return 242.66876220703125;
			}
		}

		class UFO extends mojs.CustomShape {
			getShape() {
				return '<path d="M 30,20 C 30,0 60,0 60,20 C 90,40 0,40 30,20 M 33,20 C 33,5 57,5 57,20 C 57,23 48,23 48,23 C 56,10 34,10 42,23 C 42,23 33,23 33,20 M 42.5,18 A 1,0.5 45 1,1 42.5,18.01 M 47.5,18 A 1,0.5 -45 1,0 47.5,18.01"/>';
			}

			getLength() {
				return 208.47227478027344;
			}
		}

		mojs.addShape('petal', Petal);
		mojs.addShape('sundae', Sundae);
		mojs.addShape('ufo', UFO);

		const sun = new mojs.Shape({
			parent: this.elementRef.nativeElement,
			shape: 'circle',
			isShowStart: true,
			radius: 90,
			fill: 'transparent',
			stroke: '#f1f1f1',
			easing: 'ease.inout',
			strokeWidth: 2,
			angle: 180,
			strokeDasharray: '100%',
			strokeDashoffset: {'100%': '0%'},
			duration: 2000,
			y: -100,
		}).then({
			delay: 1500,
			duration: 1000,
			easing: 'ease.in',
			stroke: {'#f1f1f1': '#fcffb3'},
			fill: {'transparent': '#fcffb3'}
		}).then({
			delay: 1500,
			duration: 1500,
			x: {'0%': '100%'},
			y: {'-100': '-350'},
			scale: {1: 0.3}
		}).then({
			delay: 4000,
			duration: 1000,
			opacity: {1: 0}
		});


		const petals = [];

		for (let i = 0; i < 8; i++) {
			const x = 140 * Math.sin(i * 45 * Math.PI / 180.0);
			const y = -140 * Math.cos(i * 45 * Math.PI / 180.0);

			petals.push(
				new mojs.Shape({
					parent: sun.el,
					shape: 'petal',
					radius: 50,
					fill: 'transparent',
					stroke: '#fcffb3',
					strokeDasharray: '100%',
					strokeDashoffset: {'100%': '0%'},
					delay: 2000,
					duration: 1500,
					easing: 'ease.inout',
					angle: i * (360 / 8),
					x: x,
					y: y,
				}).then({
					easing: 'ease.in',
					fill: {'transparent': '#fcffb3'},
					duration: 1000
				}).then({
					radiusX: {50: 2},
					duration: 1500
				})
			);
		}

		const ufo = new mojs.Shape({
			parent: this.elementRef.nativeElement,
			shape: 'ufo',
			isShowStart: true,
			radius: 90,
			fill: 'transparent',
			stroke: '#f1f1f1',
			easing: 'ease.inout',
			strokeWidth: 2,
			strokeDasharray: '100%',
			strokeDashoffset: {'100%': '0%'},
			duration: 1500,
			y: -182,
			x: '-75%',
			delay: 7500
		}).then({
			duration: 500,
			x: '-35%',
			stroke: '#ff9494',
		}).then({
			duration: 500,
			x: '23%',
			stroke: '#90ff94',
		}).then({
			duration: 500,
			x: '80%',
			stroke: '#9094ff',
		}).then({
			duration: 500,
			x: '100%',
			stroke: '#f1f1f1',
		}).then({
			duration: 1500,
			strokeDashoffset: {'0%': '100%'},
		});

		const timeline = new mojs.Timeline({
			delay: 2000
		}).add(sun, petals, ufo);

		const colors = [
			'#ff9494',
			'#90ff94',
			'#9094ff',
		];
		let sundaeX = -55;
		for (let i = 0; i < 3; i++) {
			const xVal = sundaeX.toString() + '%';
			const endXval = sundaeX + 100 + Math.floor(Math.sin((i + 1) * 90 * Math.PI / 180.0)) * 105;
			const sundae = new mojs.Shape({
				parent: this.elementRef.nativeElement,
				shape: 'sundae',
				radius: 50,
				fill: 'transparent',
				stroke: colors[i],
				strokeWidth: 1,
				x: xVal,
				y: -160,
				scale: 0.7,
				delay: 9350 + (i * 500),
			}).then({
				duration: 2000,
				onUpdate: (progress) => {
					const bounceProgress = mojs.easing.bounce.out(progress);
					sundae.el.style.transform = 'translate(' + xVal + ',' + (350 * bounceProgress - 150) + 'px) scale(0.7)';
				}
			}).then({
				delay: 1000 - (i * 500),
				easing: 'cubic.out',
				duration: 2000,
				stroke: '#f1f1f1',
				scale: {0.7: 6},
				x: endXval,
				y: {200: 50}
			});

			sundaeX += 105;
			timeline.add(sundae);
		}

		timeline.play();
	}


}
