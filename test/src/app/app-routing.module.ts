import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"homepage",pathMatch:"full"},
      {path:"homepage",component:HomeComponent},
      {path:"*",redirectTo:"homepage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
