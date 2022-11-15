import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { LoginService } from 'src/app/services/login/login.service';
import { JobFindModel } from './model/job-find.model';

@Component({
  selector: 'app-job-find',
  templateUrl: './job-find.component.html',
  styleUrls: ['./job-find.component.scss']
})
export class JobFindComponent implements OnInit {

  jobFindModel = new JobFindModel();

  value = '';

  constructor(
    public readonly jobService: JobService,
  ) { }

  ngOnInit(): void {
    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.jobFindModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }


}
