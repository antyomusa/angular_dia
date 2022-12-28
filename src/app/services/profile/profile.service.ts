import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/user', { params: params });
  }

  public getUserSkills(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/detail/get-skill', { params: params });
  }

  public getAllSkills(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/get-skill';
    return this.http.get(url);
  }

  public getAllUniversity(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-university';
    return this.http.get(url);
  }

  public getAllCurrency(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-currency';
    return this.http.get(url);
  }

  public getAllDegree(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-degree';
    return this.http.get(url);
  }

  public addSalary(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('currentCurrency', body.currentCurrency)
      .set('expectedCurrency', body.expectedCurrency)
      .set('currentSalary', body.currentSalary)
      .set('expectedMinimum', body.expectedMinimum)
      .set('expectedMaximum', body.expectedMaximum);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/detail/salary', params);
  }

  public editSkill(body: any): Observable<any> {
    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/add/skill', body);
  }


}
