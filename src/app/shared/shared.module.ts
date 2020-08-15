import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


import { ShellComponent } from './shell/shell.component';

const components = [ShellComponent];

const modules = [
  CommonModule,
  LayoutModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
