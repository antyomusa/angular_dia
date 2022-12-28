import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { SalaryModel } from './model/edit-salary.model';

@Component({
  selector: 'app-modal-edit-salary',
  templateUrl: './modal-edit-salary.component.html',
  styleUrls: ['./modal-edit-salary.component.scss']
})
export class ModalEditSalaryComponent implements OnInit {

  profileModel = new ProfileModel();

  @Input() data: any;
  @Input() onUpload: any;

  salaryModel = new SalaryModel();
  profile: any = {};
  id: any;
  userData: any = {};

  constructor(
    public activeModal: NgbActiveModal,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    const param = {
      jobseekerId: this.data.jobseekerId
    }
    this.profileService.getUserProfile(param).subscribe(
      (response: any) => {
        this.salaryModel.userProfile = response.data;
        this.profile = this.salaryModel.userProfile;
        this.salaryModel.salary = response.data.jobseekerSalary;
      })


  }

  upload() {
    this.onUpload()
    this.activeModal.dismiss('Cross click');
  }


}
