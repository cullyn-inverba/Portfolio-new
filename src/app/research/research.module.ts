import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchBioComponent } from './research-bio/research-bio.component';


@NgModule({
  declarations: [ResearchBioComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
