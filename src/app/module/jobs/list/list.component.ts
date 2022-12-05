import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { ListModel } from './model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listModel = new ListModel();

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


    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.listModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }

  keJobSearch() {
    this.router.navigate(["jobs/test"], { queryParams: { data: this.value } });
  };
}
