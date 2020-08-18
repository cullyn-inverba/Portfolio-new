import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorkHistoryComponent } from './work-history/work-history.component';

import { SharedModule } from "../shared/shared.module";
import { MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [WorkHistoryComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class WorksModule {}
