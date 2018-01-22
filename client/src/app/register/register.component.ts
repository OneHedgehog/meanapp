import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
      private formBuilder: FormBuilder
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
    console.log('fd');
  }

}
