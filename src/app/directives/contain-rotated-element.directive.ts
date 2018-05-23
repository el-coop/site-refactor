import {AfterViewChecked, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
	selector: '[helpersContainRotatedElement]'
})
export class ContainRotatedElementDirective implements AfterViewChecked {

	constructor(private el: ElementRef) {
	}

	ngAfterViewChecked(): void {
		this.setMinSize(this.el.nativeElement);
	}

	@HostListener('window:resize')
	onResize() {
		// call our matchHeight function here
		this.setMinSize(this.el.nativeElement);
	}

	setMinSize(rotated: HTMLElement) {
		if (!rotated) {
			return;
		}

		const parent = <HTMLElement>rotated.parentElement;

		if (!parent) {
			return;
		}

		parent.style.height = '';
		parent.style.width = '';

		if (rotated.offsetParent === null) {
			return;
		}
		const height = rotated.getBoundingClientRect().height * 1.025;
		const width = rotated.getBoundingClientRect().width * 0.6;


		parent.style.height = `${height}px`;
		parent.style.width = `${width}px`;
	}

}
