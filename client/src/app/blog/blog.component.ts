import { Component, OnInit } from '@angular/core';

import { BlogServiceService} from "../services/blog-service.service";
import {AuthService} from "../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    public userId;
    public userName;
    public userObserve;

  public posts: Array<any>;

  public constructor(
      private blogServiceService: BlogServiceService,
      private authService: AuthService,
      private _flashMessagesService: FlashMessagesService,
      private router: Router,
  ) {
  }

  public ngOnInit() {
      this.userObserve = this.authService.getProfile();
      this.userObserve
          .subscribe((user: any) => {
              if (user.success === false) {
                  localStorage.removeItem('user_id');
                  this._flashMessagesService.show('You are logged out', {cssClass: 'alert-info', timeout: 1000});
                  this.router.navigate(['/login']);
              }
              this.userId = user.user._id;
              this.userName = user.user.username;
          });

    this.blogServiceService.getPosts()
        .subscribe( (postsData: any) => {
          if(postsData.success === false){
            //redirect to errorPage
          }else{
              this.posts = postsData.posts;
          }
        });
  }

}
