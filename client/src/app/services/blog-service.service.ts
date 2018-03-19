import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BlogServiceService {
    private devHost:String = 'http://localhost:8080';

    public constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    public createBlogPost(newBlogData : object): Observable<any>{
        return this.http.post(  this.devHost +  '/blog/create', newBlogData);
    }

    public updateBlogPost(newBlogData : object, id: string): Observable<any>{
        return this.http.put(  this.devHost +  '/blog/post/update/' + id, newBlogData);
    }

    public getPosts(): Observable<any>{
        return this.http.get(  this.devHost +  '/blog/posts') ;
    }

    public getPost(id: string): Observable<any>  {
        return this.http.get(  this.devHost +  '/blog/post/' + id);
    }

    public deletePost(id: string): Observable<any>{
        return this.http.delete( this.devHost + '/blog/post/delete/' + id);
    }

    public addPostComments(id: string, post_data: object): Observable<any>{
        return this.http.post( this.devHost + '/blog/post/addcomment/' + id, post_data);
    }

    public getPostComments(id: string): Observable<any> {
        return this.http.get( this.devHost + '/blog/post/comments/' + id,);
    }
}
