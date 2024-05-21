import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component Pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  // export class AppRoutingModule { }
