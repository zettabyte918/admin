import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, PopoverController, AlertController, ToastController, IonModal } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  public editorValue: string = '';

  table: string="users";


  view:boolean=true;
  push: boolean=false;
  data: any;
  posts: any;
  image:string="";
  title: string="";
  url: string="";
  urlrewiting: string="";
  meta: string="";
  keyword: string="";
  keywords: any;
  deadlineTask: any;
  postdata: any;
  events: any;
  priority: any;

  firstname: any;
  lastname: any;
  email: any;
  user: any;
  namebank: any;
  dombank: any;
  iban: any;
  rib: any;
  bic: any;
  profilid: any;
  profilId: any;

  edit:boolean=false;
  edit2:boolean=false;


  segType: string = 'info';
  indicatif : string = '+33';
  phone: any;
  address: any;
  number:any = '';
  complement: any;
  city: any;
  cp: any;
  siren: any;
  id: any;

  formgroup!: FormGroup;
  validations_form!: FormGroup;
  datestart: Date= new Date();
  content: string="";
  iduser: any;
  phone_mobile: any;
  phone_number: any;
  company: any;
  notes: any;
  country: any;
  state: any;
  salutation: any="M.";
  customer_type: any="business";
  shipping_cp: any;
  shipping_address: any;
  shipping_city: any;
  shipping_state: any;
  shipping_country: any;
  shipping_phone: any;
  billing_phone: any;
  tva_number: any;
  siret_number: any;
  lng: any;
  lat: any;
 



  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    public loadingController:LoadingController,  
    public redditService:RedditService, 
    private router: Router,  
    public toastCtrl: ToastController) {
   }

    ngOnInit() {}



    

     async  doSaveProfil() {
    
      if(this.address!==""||this.cp!==""||this.city!==""||this.state!==""){ 
      this.getGeocode()}
      else{ this.doSave()};

    }
          
  

    async  doSave() {
    
      var data = {
        email: this.email,
        salutation: this.salutation,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        cp:this.cp,
        city: this.city,
        state: this.state,
        country: this.country,
        phone_mobile: this.phone_mobile,
        phone_number: this.phone_number,
        company: this.company,
        customer_type: this.customer_type,
        notes: this.notes,
  
        shipping_address: this.shipping_address,
        shipping_cp:this.shipping_cp,
        shipping_city: this.shipping_city,
        shipping_state: this.shipping_state,
        shipping_country: this.shipping_country,
        shipping_phone: this.shipping_phone,
        billing_phone: this.billing_phone,
        siret_number: this.siret_number,
        tva_number: this.tva_number,
        role:1,

        lat:this.lat, 
        lng:this.lng
      }
             this.redditService.adduser(data) 
             .toPromise()
             .then((response) =>
             {
               console.log(response);
               setTimeout(() => { 
                this.router.navigateByUrl('/customers');
              }, 100); 
             })
    }


   async getGeocode() {
    this.redditService.getGeocode(this.address+this.cp+this.city).subscribe(data=>{
       this.lng = data.features[0].geometry.coordinates[0];
       this.lat = data.features[0].geometry.coordinates[1];
       this.doSave();
       });
  
   }




}