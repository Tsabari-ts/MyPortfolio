import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MywebComponent } from './myweb/myweb.component';

const routes: Routes = [
  { path: '', redirectTo: '/myweb', pathMatch: 'full' },
  { path: 'myweb', component: MywebComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
