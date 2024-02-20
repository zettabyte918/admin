import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthenticationService {

  authState = new BehaviorSubject(false);
  token: any;
  constructor(
    private router: Router,
    private platform: Platform,

    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

ifLoggedIn() {
  this.authState.next(true);
  /*
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        
      }
    });
    */
  }


async login(userinfo: string) {

   // this.storage.set('USER_INFO', userinfo).then((response) => {
   //   this.router.navigate(['dashboard']);
      this.authState.next(true);
   // });

  
  }

  logout() {

    this.router.navigate(['login']);
    this.authState.next(false);


  }

  isAuthenticated() {
    return this.authState.value;
  }


   getToken() {

   /* 
    this.storage.get('token').then((token: string) => {
     this.token=token
   });
   return this.token;

  */
  }  
  


}