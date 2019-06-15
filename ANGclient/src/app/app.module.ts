/*
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  
  // Inner components
  import {  AuthService} from "./services/auth/auth-service.service";
  import { AppComponent } from './app.component';
  import { MainRouter } from './app.router';

  // Inner modules
  import { HeaderModule } from "./components/header/module";
  import { CookieService } from 'ngx-cookie-service';
//


/* 
Definition
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule,
      HeaderModule
    ],
    providers: [ CookieService, AuthService ],
    bootstrap: [ AppComponent ]
  })
//

/* 
Export
*/
  export class AppModule { }
//
