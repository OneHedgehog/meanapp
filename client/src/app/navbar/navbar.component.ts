import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { SharedService} from "../services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public isUserLoggedIn: boolean;

  constructor(
      private authService: AuthService,
      private _flashMessagesService: FlashMessagesService,
      private sharedService: SharedService
  ) { }

  ngOnInit() {
      this.sharedService.IsUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
      });

      if(localStorage.getItem('user_id')){
          this.isUserLoggedIn = true;
      }else{
          this.isUserLoggedIn = false;
      }

  }

  logout(){
    this._flashMessagesService.show('You are logged out', { cssClass: 'alert-info', timeout: 1000 });
    this.sharedService.IsUserLoggedIn.next(false);
    this.authService.logout();
  }


}
