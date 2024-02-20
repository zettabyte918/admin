"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(J,m,n)=>{n.r(m),n.d(m,{LoginPageModule:()=>c});var f=n(6895),l=n(433),t=n(5035),b=n(4126),u=n(655),e=n(8256),h=n(1053),v=n(849),y=n(4512),P=n(7330);function w(a,r){1&a&&(e.TgZ(0,"p",15)(1,"ion-text",16),e._uU(2," * Email requis. "),e.qZA()())}function C(a,r){1&a&&(e.TgZ(0,"p",17)(1,"ion-text",16),e._uU(2," * Mot de passe requis. "),e.qZA()())}const O=function(){return["/forgotpassword"]};class d{constructor(r,o,i,g,p,L,Z,x,M,U,T,A){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"menu",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"toastCtrl",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"alertCtrl",{enumerable:!0,configurable:!0,writable:!0,value:g}),Object.defineProperty(this,"LoadingController",{enumerable:!0,configurable:!0,writable:!0,value:p}),Object.defineProperty(this,"formBuilder",{enumerable:!0,configurable:!0,writable:!0,value:L}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:Z}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:x}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:M}),Object.defineProperty(this,"storage",{enumerable:!0,configurable:!0,writable:!0,value:U}),Object.defineProperty(this,"authService",{enumerable:!0,configurable:!0,writable:!0,value:T}),Object.defineProperty(this,"localStore",{enumerable:!0,configurable:!0,writable:!0,value:A}),Object.defineProperty(this,"email",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"token",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onLoginForm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"roleUser",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}ionViewWillEnter(){this.menu.enable(!1)}ngOnInit(){this.onLoginForm=this.formBuilder.group({email:[null,l.kI.compose([l.kI.required])],password:[null,l.kI.compose([l.kI.required])]})}goLogin(){return(0,u.mG)(this,void 0,void 0,function*(){const r=yield this.LoadingController.create({message:"Connexion en cours"});r.present();var o=JSON.stringify({email:this.email,password:this.password});this.redditService.login(o).subscribe(i=>(0,u.mG)(this,void 0,void 0,function*(){console.log(i),setTimeout(()=>{r.dismiss()},1300),(yield this.toastCtrl.create({cssClass:"bg-profile",message:"Connexion r\xe9ussie ",duration:3e3,position:"bottom"})).present(),JSON.stringify({}),console.log(i),console.log("------------ROLE ---------"),console.log(i[0].role),this.roleUser=i[0].role,this.localStore.saveItem("iduser",i[0].id),this.localStore.saveItem("role",i[0].role),this.getMenu(),setTimeout(()=>{this.router.navigateByUrl("/home")},2e3)}),i=>{console.log(i),r.dismiss(),this.presentAlert()})})}goToRegister(){return(0,u.mG)(this,void 0,void 0,function*(){this.router.navigateByUrl("/register")})}forgotPass(){return(0,u.mG)(this,void 0,void 0,function*(){this.router.navigateByUrl("/forgotpassword")})}presentAlert(){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Erreur",subHeader:"",message:"E-mail ou mot de passe incorrect",buttons:[{text:"Ok",cssClass:"primary",handler:o=>{console.log("Confirm Ok: blah")}},{text:"Annuler",cssClass:"secondary",handler:o=>{console.log("Confirm Cancel: blah")}}]})).present()})}presentAlertError(){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Erreur",subHeader:"",message:"Identifiant ou mot passe incorrect ",buttons:[{text:"Ok",cssClass:"primary",handler:o=>{console.log("Confirm Ok: blah")}},{text:"Annuler",cssClass:"secondary",handler:o=>{console.log("Confirm Cancel: blah")}}]})).present()})}getMenu(){console.log("------MENU ROLE --------"),console.log(this.roleUser),1==this.roleUser&&this.menu.enable(!0,"menu1"),2==this.roleUser&&this.menu.enable(!0,"menu2"),3==this.roleUser&&this.menu.enable(!0,"menu3")}}Object.defineProperty(d,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||d)(e.Y36(t.SH),e.Y36(t._q),e.Y36(t.yF),e.Y36(t.Br),e.Y36(t.HT),e.Y36(l.qu),e.Y36(h.I),e.Y36(b.F0),e.Y36(t.Br),e.Y36(v.K),e.Y36(y.$),e.Y36(P.C))}}),Object.defineProperty(d,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:d,selectors:[["app-login"]],decls:30,vars:8,consts:[[2,"padding-top","2%"],["sizeLg","4","sizeMd","4","sizeXs","12",2,"border","2px","border-width","2px"],[1,"ion-padding-horizontal","ion-text-center"],["src","../assets/icon/logobe.png"],[1,"list-form",3,"formGroup"],["position","floating"],["name","mail-outline","item-start",""],["type","email","formControlName","email",3,"ngModel","ngModelChange"],["ion-text","","class","text08",4,"ngIf"],["name","lock-closed-outline","item-start",""],["type","password","formControlName","password",3,"ngModel","ngModelChange"],["ion-text","","color","warning","class","text08",4,"ngIf"],[1,"ion-margin-top","ion-text-right"],[3,"routerLink"],["icon-left","","size","primary","expand","full","shape","round","tappable","",3,"disabled","click"],["ion-text","",1,"text08"],["color","light"],["ion-text","","color","warning",1,"text08"]],template:function(r,o){1&r&&(e.TgZ(0,"ion-content")(1,"ion-grid",0)(2,"ion-row"),e._UZ(3,"ion-col",1),e.TgZ(4,"ion-col",1)(5,"div",2),e._UZ(6,"img",3),e._uU(7," version 1.2.0 "),e.qZA(),e.TgZ(8,"form",4)(9,"ion-item")(10,"ion-label",5),e._UZ(11,"ion-icon",6),e._uU(12," Email "),e.qZA(),e.TgZ(13,"ion-input",7),e.NdJ("ngModelChange",function(g){return o.email=g}),e.qZA()(),e.YNc(14,w,3,0,"p",8),e.TgZ(15,"ion-item")(16,"ion-label",5),e._UZ(17,"ion-icon",9),e._uU(18," Mot de passe "),e.qZA(),e.TgZ(19,"ion-input",10),e.NdJ("ngModelChange",function(g){return o.password=g}),e.qZA()(),e.YNc(20,C,3,0,"p",11),e.qZA(),e.TgZ(21,"div",12)(22,"a",13)(23,"ion-text")(24,"strong"),e._uU(25," Mot de passe oubli\xe9 "),e.qZA()()()(),e.TgZ(26,"div")(27,"ion-button",14),e.NdJ("click",function(){return o.goLogin()}),e._uU(28," Connexion "),e.qZA()()(),e._UZ(29,"ion-col",1),e.qZA()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",o.onLoginForm),e.xp6(5),e.Q6J("ngModel",o.email),e.xp6(1),e.Q6J("ngIf",o.onLoginForm.get("email")),e.xp6(5),e.Q6J("ngModel",o.password),e.xp6(1),e.Q6J("ngIf",o.onLoginForm.get("password")),e.xp6(2),e.Q6J("routerLink",e.DdM(7,O)),e.xp6(5),e.Q6J("disabled",!o.onLoginForm.valid))},dependencies:[f.O5,l._Y,l.JJ,l.JL,l.sg,l.u,t.YG,t.wI,t.W2,t.jY,t.gu,t.pK,t.Ie,t.Q$,t.Nd,t.yW,t.j9,t.Fo,b.rH]})});const j=[{path:"",component:d}];class s{}Object.defineProperty(s,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||s)}}),Object.defineProperty(s,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:s})}),Object.defineProperty(s,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[b.Bz.forChild(j),b.Bz]})});class c{}Object.defineProperty(c,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||c)}}),Object.defineProperty(c,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:c})}),Object.defineProperty(c,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[f.ez,l.u5,l.UX,t.Pc,s]})})}}]);