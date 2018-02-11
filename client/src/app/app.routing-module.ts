import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from "./home/home.component";
import { DashboardComponent} from "./dashboard/dashboard.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent} from "./profile/profile.component";
import { BlogComponent} from "./blog/blog.component";
import { NewPostFormComponent} from "./new-post-form/new-post-form.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/new-post/:id',
        component: NewPostFormComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [],
    exports: [   RouterModule ]
})

export class AppRoutingModule {

}