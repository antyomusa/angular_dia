import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import { RegisterModel } from './model/register.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  data: any;
  submitted: boolean = false;
  registerModel = new RegisterModel()

  constructor(
    private readonly registerService: RegisterService,
    private readonly verifyEmailService: VerifyEmailService,
    private readonly router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  checkValidation() {
  }

  onRegister() {
    this.registerService.postRegister(this.registerModel.formGroupRegister.value).subscribe(
      (response) => {
        this.registerService.saveRegisterData(response.data);
        this.verifyEmailService.sendVerificationMail(response.data);
        this.submitted = true;
        this.router.navigate(['verif'])
      },
      (error) => {
      }
    )
  }

  onLogin() {
    this.router.navigate(['login'])
  }
}
