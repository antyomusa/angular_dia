import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyRoutingModule } from './apply-routing.module';
import { ApplyComponent } from './apply.component';


@NgModule({
  declarations: [
    ApplyComponent
  ],
  imports: [
    CommonModule,
    ApplyRoutingModule
  ]
})
export class ApplyModule { }
