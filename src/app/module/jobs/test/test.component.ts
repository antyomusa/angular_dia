import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  p: any;

  fill = '';
  onSearch: boolean = false;
  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private activeroute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((params: any) => {
      this.fill = params.data;
      params = {
        keyword: this.fill
      }
      this.jobService.searchJobs(params).subscribe(
        (response: any) => {
          this.testModel.recentJobs = response.data;
          this.testModel.recentJobs.paginator = this.paginator;
          console.log(response.data)
        },
        (error) => {
        })
    })
  }

  keJobList() {
    this.router.navigate(["jobs/test"], { queryParams: { data: this.fill } });
    this.onSearch = true;
  };

}
