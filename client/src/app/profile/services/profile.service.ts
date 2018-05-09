import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
        'authid': localStorage.getItem('user_id')
    })
};


@Injectable()
export class ProfileService {

    devHost = 'http://localhost:5000';

    constructor(private http: HttpClient) {
    }

    postPhoto(fileData): Observable<any> {
        return this.http.post(`${this.devHost }/profile/data`, fileData, httpOptions);
    }

}
