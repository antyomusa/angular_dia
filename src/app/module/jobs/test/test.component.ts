import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { TestModel } from './model/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  testModel = new TestModel();

  p: any;

  value = '';

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private activeroute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((params: any) => {
      this.value = params.data;
      params = {
        keyword: this.value
      }
      this.jobService.searchJobs(params).subscribe(
        (response: any) => {
          this.testModel.recentJobs = response.data;
          console.log(response.data)
        },
        (error) => {
        })
    })
  }

  keJobList() {
    this.router.navigate(["jobs/test"], { queryParams: { data: this.value } });
  };

}
