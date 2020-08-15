import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConactFormComponent } from "./conact-form/conact-form.component";

const routes: Routes = [
  {path: '', component: ConactFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
