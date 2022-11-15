import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { JobFindComponent } from 'src/app/module/admin/job-find/job-find.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'job-find',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-find/job-find.module').then((x) => x.JobFindModule)
      },
      {
        path: 'detail/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-detail/job-detail.module').then((x) => x.JobDetailModule)
      },
      {
        path: 'apply',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/apply/apply.module').then((x) => x.ApplyModule)
      },
      {
        path: 'application-success',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/application-success/application-success.module').then((x) => x.ApplicationSuccessModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
