import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    user;

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile()
        .subscribe( profileData => {
            let data: any = profileData;
           if(data.success == false){
               this.router.navigate(['/login']);
           }else{
               this.user = data.user;
           }
        });
  }

}
