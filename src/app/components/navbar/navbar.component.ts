import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService} from 'angular2-flash-messages';
import { Routes,Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../../services/data.service";
import { ClientService } from "../../services/client.service";
import { MenuClose } from '../../directives/menuclose';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pendingRequest:boolean = false;
  userName:string;
  username:any;
  location:string;
  inventory:Object[];
  logoutSuccessMsg:string = "You Have Been Succcessfully Logged Out...";
  logOutSuccessful:boolean = false;
  loggedIn:boolean= true;
  subcontractorObject:Object;
  subContractorArray: Object[];
  arrayOfOrderedItems:Number[];

  constructor( public authservice: AuthService, 
               //private flashmessage: FlashMessagesService,
               private router: Router,
               private dataservice:DataService,
               private clientservice: ClientService,
               private activatedroute: ActivatedRoute) { }


  ngOnInit() {

    
    this.username =this.authservice.userName;
    console.log(this.authservice.getUserData());
    this.authservice.userSubscribable.subscribe(value =>{
      console.log("SHADO");
      console.log(value);
      this.username = value;
      console.log(this.username);

    });
    this.authservice.checkIfLoggedIn();
 
    this.activatedroute.params.subscribe((params:Params)=>{

      console.log(params);
      console.log(params.location);
      console.log(this.router.url);
      console.log(this.router.url.slice(16,this.router.url.length));
      this.location = this.router.url.slice(16,this.router.url.length);
      console.log(this.location);
  

    console.log("hello from navbar");
    //setInterval(()=>{
      this.userName = this.authservice.userName;
      this.authservice.loadToken();
      console.log(this.authservice.authToken);
      if(this.authservice.authToken){

        this.loggedIn = true;

      }else{
        this.loggedIn = false;
      }



   

    


  })

    //},2000);
    
 //this.dataservice.getSubcontractors().subscribe(data=>{

     // console.log(data);
      

   // })

  }


    closeNavbar(){

    //document.getElementByClassName("navbar-toggle").click();
     document.getElementById("navbar-toggle").click();

  
}
  onLogoutClick(){

    this.authservice.logOut();
    this.logOutSuccessful = true;
    document.getElementById("navbar-toggle").click();
    
    this.username="";
    setTimeout(()=>{

      this.logOutSuccessful = false;
       this.router.navigate(['/']);   
    return false;

    },2000);
    //this.flashmessage.show("You are now logged out..",{cssClass: 'alert-success',timeout: 5000});
   

  }




}
