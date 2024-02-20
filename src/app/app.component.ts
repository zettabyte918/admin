import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/providers/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appClient = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person' },
  //  { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //  { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public appTech = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clients', url: '/customers', icon: 'person' },
    { title: 'Planning', url: '/calendar', icon: 'calendar' },
    //{ title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    //{ title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //  { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Carte', url: '/map', icon: 'map' },
    { title: 'Profil', url: '/profil', icon: 'person' },
  //  { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //  { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clients', url: '/customers', icon: 'person' },
    { title: 'Techniciens', url: '/techs', icon: 'person' },
    { title: 'Administrateurs', url: '/users', icon: 'person' },
    { title: 'Factures', url: '/invoices', icon: 'document-text' },
    { title: 'Devis', url: '/quotes', icon: 'document' },
    { title: 'Planning', url: '/calendar', icon: 'calendar' },
    //{ title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    //{ title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //  { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Carte', url: '/map', icon: 'map' },
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Emails', url: '/emails', icon: 'person' },
  //  { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //  { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Divers'];
  firstname: any;
  lastname: any;
  role: any;
  constructor(   
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private authenticationService: AuthenticationService,
    public menu: MenuController,
    private storage: Storage,
  
) {

    this.initializeApp();
  }



  initializeApp() {


    this.menu.enable(false);
   // this.menu.enable(false, 'menu1');

    this.platform.ready().then(() => {
    this.router.navigate(['/login']);     
        
     //this.router.navigate(['/home']);     
 //   });

 // this.authenticationService.authState.subscribe(state => {
   // this.loginmenu=state;
   // console.log(this.loginmenu);
 //   });
  //  console.log("AuthGuard");
   // console.log( this.AuthGuard.canActivate());
 //    this.login= this.AuthGuard.canActivate()
      // this.setupDeeplinks();
      // this.splashScreen.hide();
      /*   this.deeplinks
        .route({
          "/home": HomePage,
        })
        .subscribe(
          (match) => {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            console.log("Successfully matched route", match);
          },
          (nomatch) => {
            // nomatch.$link - the full link data
            console.error("Got a deeplink that didn't match", nomatch);
          }
        );*/
    });
  }



  async logout() {


    const alert = await this.alertController.create({
      header: 'Déconnexion',
      subHeader: '',
      message: 'Voulez-vous vraiment déconnecter ?',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
     
          this.authenticationService.logout();
           setTimeout(() => { 
       
           
          this.menu.enable(false);
           this.router.navigateByUrl('/login');
         }, 1000); 
        }
      },
      {
        text: 'Annuler',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }
    ]
    });

    await alert.present();
  }
}
