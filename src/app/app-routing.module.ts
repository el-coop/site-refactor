import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			state: 'home'
		}
	},
	{
		path: 'contact', component: ContactComponent,
		data: {
			state: 'contact'
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
