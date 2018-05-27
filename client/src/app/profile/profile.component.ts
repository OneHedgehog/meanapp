import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import {ProfileService} from "./services/profile.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public user;

    public constructor(private authService: AuthService,
                       private router: Router,
                       private _flashMessagesService: FlashMessagesService,
                       private profileService: ProfileService) {
    }

    public ngOnInit() {
        this.getProfile();
    }

    public onChangePhoto(event) {
        const formData = new FormData();
        formData.append('photo', event.target.files[0], event.target.files[0].name);

        this.profileService.postPhoto(formData).subscribe( (data : any) => {
            if(data.success === true) {
              this.getProfile();
              return;
            }
            this._flashMessagesService.show(data.mes, {cssClass: 'alert-info', timeout: 1000});
        });

    }

    private getProfile(){
      this.authService.getProfile()
        .subscribe(profileData => {
          const data: any = profileData;
          console.log(data);
          if (data.success === false) {
            this._flashMessagesService.show('You are logged out', {cssClass: 'alert-info', timeout: 1000});
            this.router.navigate(['/login']);
          } else {
            this.user = data.user;
          }
        });
    }

}
