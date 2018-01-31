import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const authToken = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    });
};

@Injectable()
export class AuthService {

  devHost = 'http://localhost:8080';

  constructor(
      private http: HttpClient
    ) {}

    registerUser(userData){
      return this.http.post(  this.devHost +  '/auth/register', JSON.stringify(userData), httpOptions);
    }

    checkUser(user){
        return this.http.get(  this.devHost +  '/auth/usercheck/' + user);
    }

    checkEmail(email){
        return this.http.get(  this.devHost +  '/auth/emailcheck/' + email);
    }

    login(userData){
        return this.http.post(  this.devHost +  '/login', JSON.stringify(userData), httpOptions);
    }

}
