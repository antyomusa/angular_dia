import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal/modal-upload-cv/modal-upload-cv.component';
import { SharedModule } from '../shared.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddExperienceComponent } from './modal/modal-add-experience/modal-add-experience.component';
import { ModalAddEducationComponent } from './modal/modal-add-education/modal-add-education.component';
import { ModalPersonalInformationComponent } from './modal/modal-personal-information/modal-personal-information.component';
import { ModalEditSkillsComponent } from './modal/modal-edit-skills/modal-edit-skills.component';
import { ModalVerifyModule } from './modal/modal-verify/modal-verify.module';
import { ModalEditSkillsModule } from './modal/modal-edit-skills/modal-edit-skills.module';
import { ModalPersonalInformationModule } from './modal/modal-personal-information/modal-personal-information.module';
import { ModalEditSalaryModule } from './modal/modal-edit-salary/modal-edit-salary.module';
import { ModalAddSalaryModule } from './modal/modal-add-salary/modal-add-salary.module';


@NgModule({
  declarations: [
    ModalUploadCvComponent,
    ModalAddExperienceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ModalPersonalInformationModule,
    ModalEditSkillsModule,
    ModalVerifyModule,
    FormsModule,
    ReactiveFormsModule,
    ModalEditSalaryModule,
    ModalAddSalaryModule
  ]
})
export class ComponentModule { }
