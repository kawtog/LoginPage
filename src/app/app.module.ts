import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent }
  , { path: 'Register', component: RegisterComponent }
  , { path: 'ResetPassword', component: ResetPasswordComponent }
  , { path: 'Home', component: HomeComponent }
  , { path: '', redirectTo: '/Login', pathMatch: 'full' }
  , { path: '**', component: NopagetodisplayComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NopagetodisplayComponent,
    HomeComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
