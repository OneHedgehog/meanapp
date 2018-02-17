import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public user;

  public constructor(
      private authService: AuthService,
      private router: Router,
      private _flashMessagesService: FlashMessagesService
  ) { }

  public ngOnInit() {
    this.authService.getProfile()
        .subscribe( profileData => {
            let data: any = profileData;
           if(data.success == false){
               this._flashMessagesService.show('You are logged out', { cssClass: 'alert-info', timeout: 1000 });
               this.router.navigate(['/login']);
           }else{
               this.user = data.user;
           }
        });
  }

}
