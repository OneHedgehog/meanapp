import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'authid': localStorage.getItem('user_id')
  })
};

@Injectable()
export class DashboardService {

  devHost = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getChartData(username): Observable<any> {
    return this.http.get(`${this.devHost }/dashboard?username=${username}`,  httpOptions);
  }

}
