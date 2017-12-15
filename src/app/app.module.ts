import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loblaws', component: LoblawsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients/:client', component: EachClientComponent },
  { path: 'clients/:client/:location', component: LocationComponent},
  //{ path: 'clients/:client/:location/:location', component: StorenumberComponent},
  { path: 'clients/:client/:location/:supplier/:productcode', component: InventoryComponent},


  { path: 'register/newsubcontractor', component: NewsubcontractorComponent},
    { path: 'register/newclient', component: NewclientComponent},
    { path: 'edit/newsubcontractor', component: EditsubcontractorComponent},
    { path: 'edit/subcontractor/:subcontractor', component:EditsinglesubcontractorComponent},
    { path: 'remove/client', component: RemoveclientComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent,
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


  ],
  imports: [
    //AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
   
    ChartsModule
    
    
    
  ],
  providers: [DataService, ValidateService, AuthService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
