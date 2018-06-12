import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'category/:categoryName', component: CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
