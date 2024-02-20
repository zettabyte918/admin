import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../../providers/authentication.service';
import { LocalService } from 'src/providers/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  email: any;
  password: number | undefined;
  token: any;

  public onLoginForm!: FormGroup;
  roleUser: any;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public LoadingController: LoadingController,
    public formBuilder: FormBuilder,
    public redditService:RedditService,
    private router: Router,
    public alertController: AlertController,
    private storage: Storage,
    private authService: AuthenticationService,
    private localStore: LocalService,

  ) { }

  ionViewWillEnter() {
 

   this.menu.enable(false);


  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });

   
  }



  async goLogin() {

    
    const loader = await this.LoadingController.create({
    message: 'Connexion en cours',
    });
    loader.present();

   // this.password2=Md5.hashStr(this.password);

    var data = JSON.stringify({ 
    email:this.email,
    password: this.password,
    }); 
    
    this.redditService.login(data)
      .subscribe(async (response) => {

        console.log(response);

        setTimeout(() => { 
           loader.dismiss();
         }, 1300); 
  
          const toast = await this.toastCtrl.create({
          cssClass: 'bg-profile',
          message: 'Connexion réussie ',
          duration: 3000,
          position: 'bottom',
    
        });
        toast.present();
        var userinfo = JSON.stringify({ 
       //  email:response.user.email,
        // firstname: response.user.firstname,
        // lastname: response.user.lastname,
        // id:response.user.id
        }); 

    // this.authService.login(userinfo);
   

    console.log(response);


  // this.authService.login(response);



   console.log("------------ROLE ---------"); 
console.log(response[0].role);
this.roleUser=response[0].role;
   this.localStore.saveItem('iduser',response[0].id);
   this.localStore.saveItem('role',response[0].role);

this.getMenu();
      setTimeout(() => { 
        handler: async () => {}
        this.router.navigateByUrl('/home');
      
        

   
    

      }, 2000); 
     
        },
       error => {    
      console.log(error);
       loader.dismiss();
      this.presentAlert();
      });
  }
 

  async goToRegister() {
    this.router.navigateByUrl('/register');
  }

  async forgotPass() {
    this.router.navigateByUrl('/forgotpassword');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      subHeader: '',
      message: 'E-mail ou mot de passe incorrect',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
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

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      subHeader: '',
      message: 'Identifiant ou mot passe incorrect ',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
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



  getMenu(){
    console.log("------MENU ROLE --------");

    console.log(this.roleUser);

    if(this.roleUser==1){
      this.menu.enable(true, 'menu1');

    }


    if(this.roleUser==2){
      this.menu.enable(true, 'menu2');

    }

    if(this.roleUser==3){
      this.menu.enable(true, 'menu3');
    
    }


  }

}
