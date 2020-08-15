import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkHistoryComponent } from "./work-history/work-history.component";

const routes: Routes = [
  {path: '', component: WorkHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
