import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({
    'authid': localStorage.getItem('user_id')
  })
};

@Injectable()
export class BlogServiceService {
    private devHost:String = 'http://localhost:5000';

    public constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    public createBlogPost(newBlogData : object): Observable<any>{
        return this.http.post(  this.devHost +  '/blog/create', newBlogData, httpOptions );
    }

    public updateBlogPost(newBlogData : object, id: string): Observable<any>{
        return this.http.put(  this.devHost +  '/blog/post/update/' + id, newBlogData, httpOptions );
    }

    public getPosts(): Observable<any>{
        return this.http.get(  this.devHost +  '/blog/posts', httpOptions ) ;
    }

    public getPost(id: string): Observable<any>  {
        return this.http.get(  this.devHost +  '/blog/post/' + id, httpOptions );
    }

    public deletePost(id: string): Observable<any>{
        return this.http.delete( this.devHost + '/blog/post/delete/' + id, httpOptions );
    }

    public addPostComments(id: string, post_data: object): Observable<any>{
        return this.http.post( this.devHost + '/blog/post/comments/' + id, post_data, httpOptions );
    }

    public getPostComments(id: string): Observable<any> {
        return this.http.get( this.devHost + '/blog/post/comments/' + id, httpOptions );
    }

  public deletePostComments(id: string): Observable<any> {
    return this.http.delete( this.devHost + '/blog/post/comments/' + id, httpOptions );
  }
}
