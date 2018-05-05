import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {BlogServiceService} from "../../services/blog-service.service";
import {LikeService} from "../../services/like.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-blogitem',
    templateUrl: './blogitem.component.html',
    styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {
    @Input() post;
    @Input() user;
    public isCommented: Subject<boolean> = new BehaviorSubject(false);
    public userId: string;
    public userName: string;
    public exist = true;
    public comments = null;

    constructor(
                private blogServiceService: BlogServiceService,
                private router: Router,
                private likeService: LikeService) {
    }

    ngOnInit() {
        if (this.post.likes === null) {
            this.post.likes = [];
        }
        if (this.post.dislikes === null) {
            this.post.dislikes = [];
        }
        if(this.user !== null){
            this.userId = this.user.user._id;
            this.userName = this.user.user.username;
        }

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
            .subscribe((comments: any) => {
                console.log(comments);
                this.comments = comments;
            });
    }

    public updateComments() {
        this.isCommented.subscribe((data: boolean) => {
            if (data) {
                this.getPostComments();
            }
        });
    }

    public addLike() {
        const likeData = {
            authorname: this.user.user.username,
        }
        this.likeService.addLike(likeData, this.post._id, 'post').subscribe((likedData: any) => {
            console.log(likedData);
            if (likedData.success === true) {
                if (likedData.like === null) {
                    this.post.likes.splice(-1, 1);
                } else {
                    this.post.likes.push(likedData.like);
                }
            }
        });
    }

    public addDislike() {
        console.log(this.post.dislikes);
        const dislikeData = {
            authorname: this.user.user.username,
        }
        this.likeService.addDislike(dislikeData, this.post._id, 'post').subscribe((dislikedData: any) => {
            if (dislikedData.success === true) {
                console.log(dislikedData);
                if (dislikedData.dislike === null) {
                    this.post.dislikes.splice(-1, 1);
                } else {
                    this.post.dislikes.push(dislikedData.dislike);
                }
            }
        });
    }
}
