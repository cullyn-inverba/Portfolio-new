import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationHistoryComponent } from './education-history/education-history.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [EducationHistoryComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule
  ]
})
export class EducationModule { }
