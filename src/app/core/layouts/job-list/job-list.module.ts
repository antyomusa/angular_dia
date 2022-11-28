import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListRoutingModule } from './job-list-routing.module';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { TopbarListComponent } from './topbar-list/topbar-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListLayoutComponent,
    TopbarListComponent
  ],
  imports: [
    CommonModule,
    JobListRoutingModule,
    SharedModule
  ]
})
export class JobListModule { }
