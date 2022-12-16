import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditSalaryComponent } from './modal-edit-salary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalEditSalaryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalEditSalaryComponent
  ],
})
export class ModalEditSalaryModule { }
