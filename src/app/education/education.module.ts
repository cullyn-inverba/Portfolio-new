import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationHistoryComponent } from './education-history/education-history.component';


@NgModule({
  declarations: [EducationHistoryComponent],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
