import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './allComponents/category/category.component';
import { HomeComponent } from './allComponents/home/home.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  // {path:'', component:NavbarComponent},
  {path: '', component: LandingPageComponent },
  {path:'home',component:HomeComponent},
  {path:'writeblog',component:WriteBlogComponent,canActivate:[AuthenticationGuard]},
  {path:'category',component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
