import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { SharedService} from "../services/shared.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    res;
    mes;
    cssclass;

    email_mes;
    email_exist;
    email_cssclass;

    user_mes;
    user_exist;
    user_cssclass;

  form: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private sharedService: SharedService
  ) {

  }

  ngOnInit() {
      this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
        email: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(40),
            Validators.email,
            Validators.pattern('\\S+@\\S+\\.\\S+')
        ])],
        username: ['', Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40),
        ])],
        password: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(200),
        ])],
    });
  }

  onRegisterSubmit(){
      const user = {
          email: this.form.get('email').value,
          username: this.form.get('username').value,
          password: this.form.get('password').value
      };

      this.authService.registerUser(user)
          .subscribe( data => {
              this.res = data;
              if(data.error){
                  this.mes = data.error.msg;
                  this.cssclass = 'alert-danger';
              }else{
                  this.mes = data.dbmessage;
                  this.cssclass = 'alert-success';

                  this.form.controls['username'].disable();
                  this.form.controls['password'].disable();
                  this.form.controls['email'].disable();

                  sessionStorage.setItem('user_id', data.user._id);
                  this.sharedService.IsUserLoggedIn.next(true);
                  this.router.navigate(['/dashboard']);
              }
          });
  }

  checkEmail(){
      const email = this.form.get('email').value;
      return this.authService.checkEmail( email)
          .subscribe(
          (data)=>{
              if(!data.error){
                  this.email_mes = data.successmes;
                  this.email_exist = true;
                  this.email_cssclass = '-success';
              }else{
                  this.email_mes = data.error.msg;
                  this.email_exist = false;
                  this.email_cssclass = '-danger';
              }
          }
      );
  }

    checkUser(){
        const username = this.form.get('username').value;
        return this.authService.checkUser(username)
            .subscribe(
            (data)=>{
                if(!data.error){
                    this.user_mes = data.successmes;
                    this.user_exist = true;
                    this.user_cssclass = '-success';
                }else{
                    this.user_mes = data.error.msg;
                    this.user_exist = false;
                    this.user_cssclass = '-danger';
                }
            }
        );

    }

}
