import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { SharedService} from "../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    mes;
    cssclass;
    submitted = false;

  form: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private sharedService: SharedService
  ) { }


  ngOnInit() {

      if(sessionStorage.getItem('user_id')){
          this.router.navigate(['/dashboard']);
      };
    this.createForm();
  }

  createForm(){
      this.form = this.formBuilder.group({
          login:['', Validators.compose([
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(40),
          ])],
          password:['', Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(200),
          ])]
      });
  }

  onLoginSubmit(){
      const user = {
          login: this.form.get('login').value,
          password: this.form.get('password').value
      };
    this.authService.login(user)
        .subscribe( (data) => {
            this.submitted = true;
            if(data.error){
                this.mes = data.error.msg;
                this.cssclass = 'alert-danger';
            }else{
                this.mes = 'succefully login';
                this.cssclass = 'alert-success';

                this.form.controls['login'].disable();
                this.form.controls['password'].disable();

                sessionStorage.setItem('user_id', data._id);
                this.sharedService.IsUserLoggedIn.next(true);
                this.router.navigate(['/dashboard']);
            }
        } );
  }

}
