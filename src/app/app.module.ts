import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './global/navbar/navbar.component';
import {MenuComponent} from './global/navbar/menu/menu.component';
import {ButtonComponent} from './global/navbar/menu/button/button.component';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ContainRotatedElementDirective} from './directives/contain-rotated-element.directive';
import {AnimationOverlayComponent} from './global/animation-overlay/animation-overlay.component';
import {IceCreamComponent} from './animations/ice-cream/ice-cream.component';
import {TransitionBottomComponent} from './animations/transition-bottom/transition-bottom.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		MenuComponent,
		ButtonComponent,
		HomeComponent,
		ContactComponent,
		ContainRotatedElementDirective,
		AnimationOverlayComponent,
		IceCreamComponent,
		TransitionBottomComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
