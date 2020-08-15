import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},
  {path: 'home', component: HomeComponent},
  {path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)},
  {path: 'works', loadChildren: () => import('./works/works.module').then(m => m.WorksModule)},
  {path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
