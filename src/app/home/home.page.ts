import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Geolocation } from '@capacitor/geolocation';


import * as Leaflet from 'leaflet';
import { LocalService } from 'src/providers/local.service';
import { el } from '@fullcalendar/core/internal-common';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map!: Leaflet.Map;
  lat!: number;
  lng!: number;
  location:boolean=false; 
  locationButton:boolean=false; 
  table: string = "users";
  iduser!: any;
  posts: any;
  role: any;
  id: any;

  constructor
  ( public navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    public popoverCtrl: PopoverController,
    public alertController: AlertController, 
    public menu: MenuController,
    public loadingController:LoadingController,  
    public redditService:RedditService, 
    private router: Router,  
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public LoadingController: LoadingController,
    private localStore: LocalService ) {

  }


  async ngOnInit() {

    this.iduser = this.localStore.getItem('iduser');
    this.role = this.localStore.getItem('role');
    this.redditService.postByid(this.table, this.iduser).subscribe(data => {
      this.posts = data;
      console.log(this.posts);
      if(data[0].lat ==null && (this.role == 2 || this.role == 3 )){
        this.locationButton= true; 
        this.presentAlert();
      } else if(data[0].lat !==null && (this.role == 2 || this.role == 3 ))   {
        this.lat = data[0].lat; 
        this.lng =data[0].lng; 
        this.location = true; 
        this.locationButton= true; 
        setTimeout(() => { 
          this.leafletMap();
        }, 1000); 
      }else if(data[0].lat !==null && (this.role == 1  ))   {
        this.lat = data[0].lat; 
        this.lng =data[0].lng; 
        this.location = true; 
        setTimeout(() => { 
          this.leafletMap();
        }, 1000); 
      }
    }); 
  }

  async getPosition() {

    const loader = await this.LoadingController.create({
      message: 'Recherche localisation',
      });
      loader.present();
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    if(coordinates.coords.latitude!==null){
     this.lat = coordinates.coords.latitude; 
     this.lng = coordinates.coords.longitude; 
     this.location = true; 
     this.doSaveUser();
     setTimeout(() => { 
      this.leafletMap();
    }, 2000); 
 
    }
  
    setTimeout(() => { 
      loader.dismiss();
    }, 2000); 
  }


  leafletMap() {
    var startIcon = Leaflet.icon({
      iconUrl: './assets/icon/marker-icon.png',
      iconAnchor:   [2, 32] 
    });
    this.map = new Leaflet.Map('mapId2').setView([this.lat, this.lng], 12);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    }).addTo(this.map);
    const markPoint = Leaflet.marker([this.lat, this.lng],{icon: startIcon});
    this.map.addLayer(markPoint);

  }


  async  doSaveUser() {
    var data = {
     id:this.id,
     lat:this.lat, 
     lng:this.lng
   }
         console.log(data); 
          this.redditService.update(this.table,this.iduser,data) 
          .toPromise()
          .then((response) =>
          {
            console.log(response);
            setTimeout(async () => { 
              const toast = await this.toastCtrl.create({
                cssClass: 'bg-profile',
                message: 'Mise à jour de la position',
                duration: 3000,
                position: 'bottom',
          
              });
              toast.present();
           }, 400); 
          
          })}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Position',
      subHeader: '',
      message: 'Vous devez validez votre localisation',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          this.getPosition(); 
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
