import {Component, OnInit} from '@angular/core';
import {fadeOutIn} from 'src/app/animations/fadeOutIn.animation';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
	selector: 'coop-contact-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	animations: [fadeOutIn]
})
export class FormComponent implements OnInit {
	public pageState = 'message';

	protected name = '';
	protected email = '';
	protected message = '';

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
	}

	sendMessage() {
		this.pageState = 'sending';
		this.http.post('/api/contact', {
			name: this.name,
			email: this.email,
			message: this.message
		}).subscribe((res) => {
			this.pageState = 'sent';
			this.message = '';
		}, (err: HttpErrorResponse) => {
			this.pageState = 'fail';
		});
	}
}
