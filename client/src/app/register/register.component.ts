import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
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
            Validators.maxLength(200),
            Validators.email
        ])],
        username: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(200),
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

      this.authService.registerUser(user);
  }

}
