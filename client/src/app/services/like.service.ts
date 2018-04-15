import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LikeService {

    devHost: String = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    /**
     *
     * @param likeData
     * @param id
     * @param mode = 'post' | 'comment'
     * @returns {Observable<any>}
     */
    addLike(likeData, id, mode): Observable<any>{
        return this.http.post(  this.devHost +  `/blog/${mode}/like/${id}`, likeData, httpOptions) ;
    }

    /**
     *
     * @param dislikeData
     * @param id
     * @param mode = 'post' | 'comment'
     * @returns {Observable<any>}
     */
    addDislike(dislikeData, id, mode): Observable<any>{
        return this.http.post(  this.devHost +  `/blog/${mode}/dislike/${id}`, dislikeData, httpOptions) ;
    }

}
