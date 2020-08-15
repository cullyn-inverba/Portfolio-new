import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorkHistoryComponent } from './work-history/work-history.component';


@NgModule({
  declarations: [WorkHistoryComponent],
  imports: [
    CommonModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
