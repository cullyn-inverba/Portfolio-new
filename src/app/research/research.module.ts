import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchBioComponent } from './research-bio/research-bio.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [ResearchBioComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    SharedModule,
  ]
})
export class ResearchModule { }
