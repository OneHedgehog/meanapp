import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthService {

  devHost = 'http://localhost:8080';
  authHeaders;

  constructor(
      private http: HttpClient,
      private router: Router
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

    //if user login
    createAuthHeaders(){
        const user_id = localStorage.getItem('user_id');
        if(!user_id){
            this.router.navigate(['/login']);
        }
        this.authHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authid':  localStorage.getItem('user_id')
                })
        };

    }

    getProfile(){
        this.createAuthHeaders();
        return this.http.get(this.devHost +  '/profile/data', this.authHeaders);
    }

    logout(){
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
    }

}
