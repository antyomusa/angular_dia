import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalPersonalInformationRoutingModule } from './modal-personal-information-routing.module';
import { ModalPersonalInformationComponent } from './modal-personal-information.component';


@NgModule({
  declarations: [
    ModalPersonalInformationComponent
  ],
  imports: [
    CommonModule,
    ModalPersonalInformationRoutingModule
  ]
})
export class ModalPersonalInformationModule { }
