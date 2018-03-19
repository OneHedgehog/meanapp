import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

import {BlogServiceService} from "../services/blog-service.service";
import {AuthService} from "../services/auth.service";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-blogitem',
    templateUrl: './blogitem.component.html',
    styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {
    @Input() post;
    public likes: number;
    public dislikes: number;
    public userId: string;
    public userName: string;
    public exist = true;
    public comments = null;

    constructor(private authService: AuthService,
                private blogServiceService: BlogServiceService,
                private router: Router,
                private _flashMessagesService: FlashMessagesService) {
    }

    ngOnInit() {
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

        this.likes = this.post.likes.length;
        this.dislikes = this.post.likes.length;

        this.getPostComments();
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
}
