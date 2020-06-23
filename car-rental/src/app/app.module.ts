import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCarsComponent } from './app-cars/app-cars.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppContactComponent } from './app-contact/app-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCarsComponent,
    AppNavbarComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
