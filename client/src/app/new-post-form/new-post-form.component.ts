import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AuthService} from "../services/auth.service";
import { BlogServiceService} from "../services/blog-service.service";


@Component({
    selector: 'app-new-post-form',
    templateUrl: './new-post-form.component.html',
    styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

    private newPostForm: FormGroup;
    private  urlId: any;
    private userData: any;

    public postTitle: String = '';
    public postBody: String = '';

    public alertData ={
        mes: 'Edit in process',
        htmlClass: 'warning'
    };

    public constructor(
        private formBuilder: FormBuilder,
        private currentRoute: ActivatedRoute,
        private authService: AuthService,
        private blogServiceService: BlogServiceService,
        private router: Router
    ) {
    }

    public ngOnInit() {
        this.currentRoute.params.subscribe( (params: Params) => {
            this.urlId = params.id;
        });

        // set this.userData
        this.getProfile();

        if ( this.urlId !== 'new') {
            this.setUpdatePostData();
        }
        this.createForm();
    }

    private createForm() {
        this.newPostForm = this.formBuilder.group({
            title: ['', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40),
            ])],
            body: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(10000),
            ])]
        });
    }

    public onPostFormSubmit(){

        const newPost = {
            title: this.newPostForm.get('title').value,
            body: this.newPostForm.get('body').value,
            action_id: this.urlId,
            author_name: this.userData.username,
            author_id: this.userData._id
        };

        if(this.urlId === 'new') {
            this.blogServiceService.createBlogPost(newPost)
                .subscribe( ( blogData: any ) => {
                    if (blogData.error) {
                        this.alertData.htmlClass = 'danger';
                        this.alertData.mes = blogData.error;
                    }else {
                        this.alertData.htmlClass = 'success';
                        this.alertData.mes = 'Post created';
                        this.redirectToBlog();

                    }
                });
        }else{
            this.blogServiceService.updateBlogPost(newPost, this.urlId)
                .subscribe( (updatedPost: any) => {

                    if (updatedPost.success == false){
                        this.alertData.htmlClass = 'danger';
                        this.alertData.mes = 'can\'t update post';
                        this.redirectToBlog();
                    } else {
                        this.alertData.htmlClass = 'success';
                        this.alertData.mes = 'post updated';
                        this.redirectToBlog();
                    }

                });
        }

    }


    private getProfile() :void{
        this.authService.getProfile()
            .subscribe( (data:any) => {
                if(!data.user){
                    localStorage.removeItem('user_id');
                    this.redirectToBlog();
                }else{
                    this.userData = data.user;
                }
            })
    }

    private setUpdatePostData(): void{
        this.blogServiceService.getPost(this.urlId)
            .subscribe( (post: any) => {
                if(post.success == false) {
                    this.alertData.htmlClass = 'danger';
                    this.alertData.mes = 'Post doesn\'t exist';

                    this.redirectToBlog();

                } else {

                    this.postTitle = post.post.title;
                    this.postBody = post.post.body;
                }
            });
    }

    private redirectToBlog(): void {

        this.newPostForm.controls['title'].disable();
        this.newPostForm.controls['body'].disable();

        setTimeout(() => {
            this.router.navigate(['/blog']);
        }, 2000);
    }

}
