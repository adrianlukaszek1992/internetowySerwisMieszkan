import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {BookingMainComponent} from './booking-main/booking-main.component';
import {VisitorComponent} from './visitor/visitor.component';
import {MemberComponent} from './member/member.component';
import {RegisterPointComponent} from './register-point/register-point.component';

const appRoutes

: Routes = [
  {path: 'auth', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: VisitorComponent},
  {path: 'booking-main', component: BookingMainComponent},
  {path: 'member', component: MemberComponent},
  {path: 'register-point', component: RegisterPointComponent},
  // otherwise redirect to map
  {path: '**', redirectTo: 'visitor'}
];

export const routing = RouterModule.forRoot(appRoutes);
