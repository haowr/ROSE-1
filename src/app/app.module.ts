import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';


import { AppComponent } from './app.component';

//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';
//import { AlertModule } from 'ngx-bootstrap';

import { ChartsModule } from 'ng2-charts/ng2-charts';   
import { ClientsComponent } from './components/components//clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { HomeComponent2 } from './components/components/home2/home2.component';
import { DataService } from './services/data.service';
import { ValidateService } from './services/validate.service';
import { ClientService } from './services/client.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute, Params,PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoblawsComponent } from './components/loblaws/loblaws.component';
import { EachClientComponent } from './components/each-client/each-client.component';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { LocationComponent } from './components/location/location.component';
import { EachLocationComponent } from './components/each-location/each-location.component';
import { StorenumberComponent } from './components/storenumber/storenumber.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsubcontractorComponent } from './components/newsubcontractor/newsubcontractor.component';
import { NewcomponentComponent } from './components/newcomponent/newcomponent.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { EditsubcontractorComponent } from './components/editsubcontractor/editsubcontractor.component';
import { EditsinglesubcontractorComponent } from './components/editsinglesubcontractor/editsinglesubcontractor.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ManagementComponent } from './components/management/management.component';
import { RemoveclientComponent } from './components/removeclient/removeclient.component';
import { EditComponent } from './edit/edit.component';
import { EditclientComponent } from './editclient/editclient.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent2 },
  { path: 'loblaws', component: LoblawsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent ,canActivate:[AuthGuard]},
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'clients/:client', component: EachClientComponent,canActivate:[AuthGuard] },
  { path: 'clients/:client/:location', component: LocationComponent,canActivate:[AuthGuard]},
  //{ path: 'clients/:client/:location/:location', component: StorenumberComponent},
  { path: 'clients/:client/:location/:supplier/:productcode', component: InventoryComponent,canActivate:[AuthGuard]},


  { path: 'register/newsubcontractor', component: NewsubcontractorComponent,canActivate:[AuthGuard]},
    { path: 'register/newclient', component: NewclientComponent,canActivate:[AuthGuard]},
    { path: 'edit/newsubcontractor', component: EditsubcontractorComponent,canActivate:[AuthGuard]},
    { path: 'edit/subcontractor/:subcontractor', component:EditsinglesubcontractorComponent,canActivate:[AuthGuard]},
    { path: 'remove', component: RemoveclientComponent,canActivate:[AuthGuard]},
    { path: 'edit', component: EditclientComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent,
    HomeComponent2,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    LoblawsComponent,
    EachClientComponent,
    LocationComponent,
    EachLocationComponent,
    StorenumberComponent,
    SidebarComponent,
    NewsubcontractorComponent,
    NewcomponentComponent,
    NewclientComponent,
    EditsubcontractorComponent,
    EditsinglesubcontractorComponent,
    InventoryComponent,
    ManagementComponent,
    RemoveclientComponent,
    EditComponent,
    EditclientComponent,


  ],
  imports: [
    //AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{ preloadingStrategy: PreloadAllModules}),
   
    ChartsModule
    
    
    
  ],
  providers: [DataService, ValidateService, AuthService,ClientService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
