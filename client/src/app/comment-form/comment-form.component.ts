import { Component,  EventEmitter, OnInit, Input, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BlogServiceService} from "../services/blog-service.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input() post_id;
  @Input() user_id;
  @Input() user_name;

  @Input() isCommented: BehaviorSubject<boolean>;

  private commentForm: FormGroup;
  public alertErr: string = '';

  public constructor(
      private formBuilder: FormBuilder,
      private blogService: BlogServiceService
  ) { }

  public ngOnInit() {
    this.createForm();
  }

    private createForm() {
        this.commentForm = this.formBuilder.group({
            title: ['', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40),
            ])],
            content: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(10000),
            ])]
        });
    }

    public onFormSubmit(){
    console.log('submitted');
      const postData: object = {
          title: this.commentForm.get('title').value,
          content: this.commentForm.get('content').value,
          user_id: this.user_id,
          post_id: this.post_id,
          user_name: this.user_name
      };



      this.blogService.addPostComments(this.post_id, postData)
          .subscribe( (data: any) => {
              if(data.success === false){
                    this.alertErr = data.mes;
              }else{
                  this.isCommented.next(true);
              }

          });
    }

}