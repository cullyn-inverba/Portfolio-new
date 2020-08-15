import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchBioComponent } from "./research-bio/research-bio.component";

const routes: Routes = [
  {path:'', component: ResearchBioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
