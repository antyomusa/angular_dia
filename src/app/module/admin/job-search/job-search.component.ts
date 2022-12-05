import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { JobSearchModel } from './model/job-search.model';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  jobSearchModel = new JobSearchModel();

  config: any;

  value = '';

  loader = true;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.value = params.data;
      params = {
        keyword: this.value
      }
      this.jobService.searchJobs(params).subscribe(
        (response: any) => {
          this.jobSearchModel.recentJobs = response.data;
          console.log(response.data)
        },
        (error) => {
        })
    })
  }

  keJobSearch() {
    this.router.navigate(["main/job-search"], { queryParams: { data: this.value } });
  };

}
