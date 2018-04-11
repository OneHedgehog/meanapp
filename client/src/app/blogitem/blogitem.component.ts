import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {BlogServiceService} from "../services/blog-service.service";
import {AuthService} from "../services/auth.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {LikeService} from "../services/like.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-blogitem',
    templateUrl: './blogitem.component.html',
    styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {
    @Input() post;
    public isCommented: Subject<boolean> = new BehaviorSubject(false);
    public userId: string;
    public userName: string;
    public exist = true;
    public comments = null;

    constructor(private authService: AuthService,
                private blogServiceService: BlogServiceService,
                private router: Router,
                private likeService: LikeService,
                private _flashMessagesService: FlashMessagesService) {
    }

    ngOnInit() {
        if(this.post.likes === null){
            this.post.likes = [];
        }
        if(this.post.dislikes === null){
            this.post.dislikes = [];
        }

        this.authService.getProfile()
            .subscribe((user: any) => {
                if (user.success === false) {
                    localStorage.removeItem('user_id');
                    this._flashMessagesService.show('You are logged out', {cssClass: 'alert-info', timeout: 1000});
                    this.router.navigate(['/login']);
                }
                this.userId = user.user._id;
                this.userName = user.user.username;
            });

        this.getPostComments();
        this.updateComments();
    }


    public deleteBlog(id) {
        this.blogServiceService.deletePost(id)
            .subscribe((deletedData) => {

            });
        this.exist = false;
    }

    public getPostComments() {
        this.blogServiceService.getPostComments(this.post._id)
            .subscribe( (comments: any) => {
                this.comments = comments;
            });
    }

    public updateComments(){
      this.isCommented.subscribe( (data: boolean) => {
          if(data){
            this.getPostComments();
          }
      } );
    }
    public addLike() {
        const likeData = {
            authorname: this.userName,
        }
        this.likeService.addLike(likeData, this.post._id).subscribe( (likedData:any) => {
            if(likedData.success === true){
                this.post.likes.push(likedData.like);
            }else{
                this.post.likes.splice(-1,1);
            }
        } );
    }
}
