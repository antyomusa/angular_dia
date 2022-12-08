import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobSearchComponent } from './job-search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JobSearchComponent
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule
  ]
})
export class JobSearchModule { }
