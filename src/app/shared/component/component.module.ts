import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal/modal-upload-cv/modal-upload-cv.component';
import { SharedModule } from '../shared.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalAddExperienceComponent } from './modal/modal-add-experience/modal-add-experience.component';
import { ModalAddEducationComponent } from './modal/modal-add-education/modal-add-education.component';
import { ModalPersonalInformationComponent } from './modal/modal-personal-information/modal-personal-information.component';


@NgModule({
  declarations: [
    ModalUploadCvComponent,
    ModalAddExperienceComponent,
    ModalAddEducationComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class ComponentModule { }
