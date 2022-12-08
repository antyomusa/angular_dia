import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { EditSkillsModel } from './model/edit-skills.model';

@Component({
  selector: 'app-modal-edit-skills',
  templateUrl: './modal-edit-skills.component.html',
  styleUrls: ['./modal-edit-skills.component.scss']
})
export class ModalEditSkillsComponent implements OnInit {

  @Input() data: any;

  userData: any = {};
  editSkillsModel = new EditSkillsModel;
  profile: any = {};
  skillsSet: any = {};


  constructor(
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
      console.log(this.authService.loadUserData())
    }
    const param = {
      jobseekerId: this.data.jobseekerId
    }
    this.profileService.getUserProfile(param).subscribe(
      (response: any) => {
        this.editSkillsModel.userSkills = response.data;
        this.profile = this.editSkillsModel.userSkills;
        this.editSkillsModel.skills = response.data.skills;
      })
  }

}
