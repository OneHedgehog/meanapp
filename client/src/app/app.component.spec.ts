import { TestBed, async,  inject } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { NavbarComponent } from  './navbar/navbar.component'
import { FlashMessagesComponent } from "angular2-flash-messages/module/flash-messages.component";

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from "./services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { SharedService } from "./services/shared.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent }
        ]),
        HttpClientTestingModule

      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FlashMessagesComponent
      ],
      providers: [
        AuthService, FlashMessagesService,  SharedService
      ]
    }).compileComponents();
  }));
  it('should create the app',  async(inject([AuthService, FlashMessagesService, SharedService], () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })));
  // it(`should have as title 'Create your posts'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Create your posts');
  // }));
  it('should have navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  }));
  it('should have router', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
  it('should have flash-messages', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('flash-messages')).toBeTruthy();
  }));
});
