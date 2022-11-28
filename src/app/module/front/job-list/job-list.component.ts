import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job/job.service';
import { JobDetailModel } from '../../admin/job-detail/model/job-detail-model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobListModel = new JobDetailModel();

  value = '';

  constructor(
    public readonly jobService: JobService,
  ) { }

  ngOnInit(): void {
    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.jobListModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }

}
