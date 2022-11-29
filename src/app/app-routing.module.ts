import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule)
  // },
  // {
  //   path: 'job-find',
  //   loadChildren: () => import('../app/module/job-find/job-find.module').then((x) => x.JobFindModule)
  // },
  {
    path: 'admin',
    loadChildren: () => import('../app/core/layouts/admin/admin.module').then((x) => x.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/core/layouts/front/front.module').then((x) => x.FrontModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('../app/core/layouts/jobs/jobs.module').then((x) => x.JobsModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('../app/module/verif/verif.module').then((x) => x.VerifModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../app/module/forgot-password/forgot-password.module').then((x) => x.ForgotPasswordModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('../app/module/change-password/change-password.module').then((x) => x.ChangePasswordModule)
  }
  // {
  //   path: 'detail-job',
  //   loadChildren: () => import('../app/module/detail-job/detail-job.module').then((x) => x.DetailJobModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
