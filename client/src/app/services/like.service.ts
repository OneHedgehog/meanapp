import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LikeService {

    devHost: String = 'http://localhost:8080'

    constructor(private http: HttpClient) {
    }

    addLike(): Observable<any>{
        return this.http.post(  this.devHost +  '/blog/posts') ;
    }

}
