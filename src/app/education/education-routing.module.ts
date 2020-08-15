import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationHistoryComponent } from "./education-history/education-history.component";

const routes: Routes = [
  {path: '', component: EducationHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
