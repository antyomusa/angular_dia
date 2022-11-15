import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  jobs = new Array<any>();
  login = new Array<any>();
  userData: any = {};

  constructor(
    private readonly router: Router,
    public readonly authService: AuthService,
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    // this.authService.getRecentJob().subscribe(
    //   (response) => {
    //     this.jobs = response;
    //   },
    //   (error) => {

    //   }
    // );

    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

  logout() {
    this.authService.logOut()
  }

  opened = false;

}
