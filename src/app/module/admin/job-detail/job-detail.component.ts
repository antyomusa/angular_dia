import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { JobDetailModel } from './model/job-detail-model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobDetailModel = new JobDetailModel();

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }

      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.jobDetailModel.singleJobs = response.data;
          console.log(this.jobDetailModel.singleJobs)
        },
        (error) => {
          this.jobDetailModel.singleJobs = error.error;
        })
    })
  }

  submitApply() {
    this.router.navigate(["admin/apply"]);
  }
}
