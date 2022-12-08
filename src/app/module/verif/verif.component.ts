import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import { VerifModel } from './model/verif.model';

@Component({
  selector: 'app-verif',
  templateUrl: './verif.component.html',
  styleUrls: ['./verif.component.scss']
})
export class VerifComponent implements OnInit {

  verifModel = new VerifModel();

  constructor(
    public readonly registerService: RegisterService,
    public readonly verifyEmailService: VerifyEmailService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let email = data.params.jobseekerEmail,
        params = {
          jobseekerEmail: email,
        }
      console.log(data.params)
      this.registerService.postRegister(params).subscribe(
        (response: any) => {
          this.verifModel.formGroupRegister.patchValue(response.data);
          // console.log(this.verifModel.formGroupRegister.value)
          console.log(response.data)

        },
        (error) => {
        })
    }
    )
  }

}
