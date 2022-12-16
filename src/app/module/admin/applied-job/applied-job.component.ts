import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { AppliedJobModel } from './model/applied-job.model';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.scss']
})
export class AppliedJobComponent implements OnInit {

  appliedJobModel = new AppliedJobModel();
  filteredString: string = 'sent';

  config: any;

  fill = '';
  jobs: any = {};
  loader = true;
  page: number = 1;
  noOfRows = 2;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobseekerId: id
        }
      this.jobService.getAppliedJob(params).subscribe(
        (response: any) => {
          this.appliedJobModel.appliedJobs = response.data;
          console.log(response.data)
          this.jobs = this.appliedJobModel.appliedJobs;
        },
        (error) => {
        })
    })
  }



  // createRange(lastPage: number): any {
  //   let paginationArray: any = [];
  //   for (let i = 0; i < lastPage; i++) {
  //     const page = {
  //       label: `${i + 1}`,
  //       value: i + 1,
  //     };
  //     paginationArray.push(page);
  //   }
  //   return paginationArray;
  // }



}
