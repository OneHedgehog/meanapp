import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

  constructor() { }

  public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  public IsCommentCreated:  Subject<boolean> = new Subject<boolean>();

}
