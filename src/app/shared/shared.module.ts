import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxFileDropModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule
  ]
})
export class SharedModule { }
