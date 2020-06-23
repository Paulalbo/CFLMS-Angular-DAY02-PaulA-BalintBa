import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCarsComponent } from './app-cars/app-cars.component';
import { AppContactComponent } from './app-contact/app-contact.component';



const routes: Routes = [
  {
    path: '', component: AppCarsComponent
  },
  {
    path: 'contact', component: AppContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
