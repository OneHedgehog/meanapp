import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app.routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedService} from './services/shared.service';
import { BlogComponent } from './blog/blog.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { BlogItemComponentComponent } from './blog-item-component/blog-item-component.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { BlogServiceService } from './services/blog-service.service';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {LikeService} from './services/like.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    BlogitemComponent,
    BlogItemComponentComponent,
    NewPostFormComponent,
    CommentFormComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService, SharedService, BlogServiceService, LikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
