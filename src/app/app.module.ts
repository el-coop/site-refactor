import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


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
import {FormsModule} from '@angular/forms';
import {MiddleSliceRotationComponent} from './animations/middle-slice-rotation/middle-slice-rotation.component';
import {TextSplashEffectComponent} from './animations/text-splash-effect/text-splash-effect.component';
import {FormComponent} from './pages/contact/form/form.component';
import {SlicesAnimationComponent} from './animations/slices-animation/slices-animation.component';
import {DetailsComponent} from './pages/contact/details/details.component';

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
		TransitionBottomComponent,
		MiddleSliceRotationComponent,
		TextSplashEffectComponent,
		FormComponent,
		SlicesAnimationComponent,
		DetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
