import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)},
  {path: 'works', loadChildren: () => import('./works/works.module').then(m => m.WorksModule)},
  {path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
