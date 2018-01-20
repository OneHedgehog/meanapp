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
        email: ['', Validators.required],
        username: '',
        password: ''
    });
  }

  onRegisterSubmit(){
    console.log('fs');
  }

}
