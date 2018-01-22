import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
      private http: HttpClient
    ) {}

    registerUser(userData){
      return this.http.post('/auth/register', userData)
          .subscribe(
              data => console.log(data)
          );
    }

}
