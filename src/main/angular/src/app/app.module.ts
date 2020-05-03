import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AlertService, AuthenticationService, UserService} from './_services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {VisitorComponent} from './visitor/visitor.component';
import {BookingMainComponent} from './booking-main/booking-main.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapsComponent} from './visitor/google-maps/google-maps.component';
import {MemberComponent} from './member/member.component';
import {RegisterFlatComponent} from './register-flat/register-flat.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserComponent } from './user/user.component';
@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATnS8LB0SOwUBcnYAX3IThpD7HnmN-BtU',
      libraries: ['places', 'geocoding', 'geolocation'],
    }),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookingMainComponent,
    VisitorComponent,
    GoogleMapsComponent,
    AdministratorComponent,
    MemberComponent,
    UserComponent,
    RegisterFlatComponent],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
