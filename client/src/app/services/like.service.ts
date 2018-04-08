import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LikeService {

    devHost: String = 'http://localhost:8080'

    constructor(private http: HttpClient) {
    }

    addLike(likeData, post_id): Observable<any>{
        return this.http.post(  this.devHost +  `/blog/post/like/${post_id}`, likeData, httpOptions) ;
    }

}
