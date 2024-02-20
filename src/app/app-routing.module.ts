import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'techs',
    loadChildren: () => import('./techs/techs.module').then( m => m.TechsPageModule)
  },
  {
    path: 'account/:id',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'form1/:id',
    loadChildren: () => import('./form1/form1.module').then( m => m.Form1PageModule)
  },
  {
    path: 'invoice/:id',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'appointements',
    loadChildren: () => import('./appointements/appointements.module').then( m => m.AppointementsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'form2/:id/:idclient',
    loadChildren: () => import('./form2/form2.module').then( m => m.Form2PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quote/:id',
    loadChildren: () => import('./quote/quote.module').then( m => m.QuotePageModule)
  },
  {
    path: 'modal-signature',
    loadChildren: () => import('./modal-signature/modal-signature.module').then( m => m.ModalSignaturePageModule)
  },
  {
    path: 'form3/:id/:idclient',
    loadChildren: () => import('./form3/form3.module').then( m => m.Form3PageModule)
  },
  {
    path: 'emails',
    loadChildren: () => import('./emails/emails.module').then( m => m.EmailsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
