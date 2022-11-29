import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  config: any;

  value = '';

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Previous Page',
    nextLabel: 'Next Page',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 1,
      totalItems: 0,
    }
    activatedRoute.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1
    )
    for (let i = 1; i <= 100; i++) {
      this.jobFindModel.recentJobs.push(`items ${i}`);
    }
  }

  pageChange(newPage: number) {
    this.router.navigate(['/admin/job-find'], { queryParams: { page: newPage } });
  }

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
