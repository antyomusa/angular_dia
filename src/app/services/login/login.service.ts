import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // private urlUsers = 'https://reqres.in/api/users?page=1';

  // getUsers(): Observable<any> {
  //   return this.http.get<any>(this.urlUsers);
  // }

  public postLogin(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/login', params);
  }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/user', { params: params });
  }

  // public getUserProfile(jobseekerId: any): Observable<unknown> {
  //   const url = `http://54.251.83.205:9091/api/v1/jobseeker/user/${jobseekerId}`;
  //   return this.http.get(url);
  // }

  // public getUserProfile(): Observable<any> {
  //   const url = 'http://54.251.83.205:9091/api/v1/jobseeker/user/156';
  //   return this.http.get(url);
  // }
}
