import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService} from 'angular2-flash-messages';
import { Routes,Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../../services/data.service";
import { WeatherService } from '../../services/weather.service'
import { ClientService } from "../../services/client.service";
import { ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {


  innerWidth:number;
  weatherNow:string = "";
  temperatureNow:string = ""
  pendingRequest:boolean = false;
  userName:string;
  username:any;
  location:string;
  inventory:Object[];
  logoutSuccessMsg:string = "You Have Been Succcessfully Logged Out...";
  logOutSuccessful:boolean = false;
  loggedIn:boolean= true;
  smallestRoseLogo:boolean = false;
  largeRoseLogo:boolean = false;
  largestRoseLogo:boolean=false;
  subcontractorObject:Object;
  subContractorArray: Object[];
  arrayOfOrderedItems:Number[];
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth < 766){
    this.smallestRoseLogo = true;
    console.log(this.largeRoseLogo)
    console.log(this.innerWidth)
    console.log("Smaller")
  }else{
    this.largeRoseLogo = true;
    this.smallestRoseLogo = false;
    //this.largestRoseLogo= false;
    console.log(this.largeRoseLogo)
  }
  console.log("POLLYS")
  console.log(this.innerWidth)
  console.log(this.largeRoseLogo);
}

  constructor( public authservice: AuthService, 
               //private flashmessage: FlashMessagesService,
               private router: Router,
               private dataservice:DataService,
               private clientservice: ClientService,
               private activatedroute: ActivatedRoute,
               private cdRef: ChangeDetectorRef,
               private weatherservice: WeatherService) { }


  ngOnInit() {

    
    this.weatherservice.getWeather().subscribe(data=>{

      console.log(data)
     this.weatherNow =  data.weather[0].icon;
     this.temperatureNow = data.main.temp;

    })

    this.username =this.authservice.userName;
    console.log(this.authservice.getUserData());
    this.authservice.userSubscribable.subscribe(value =>{
      console.log("SHADO");
      console.log(value);
      this.username = value;
      console.log(this.username);

    });

    if(document.documentElement.clientWidth < 766){

      this.smallestRoseLogo=true;
      
    }else{
      this.largeRoseLogo = true;
    }
    console.log(this.largeRoseLogo)

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

ngAfterViewInit(){

this.cdRef.detectChanges();
console.log("CHAAAAAANGES")

if(document.documentElement.clientWidth<766){

  console.log("smaller")
}
}
    closeNavbar(){
      if(document.documentElement.clientWidth < 766){
document.getElementById("navbar-toggle").click();

      }
    //document.getElementByClassName("navbar-toggle").click();
     
     console.log(document.documentElement.clientWidth)
  
}
loadLargeRoseLogo(){

  if(document.documentElement.clientWidth< 766){
if(!this.largestRoseLogo){
  this.smallestRoseLogo = false
    console.log("mobile")
    this.largestRoseLogo = true;

}else{
  setTimeout(()=>{

  this.largestRoseLogo = false;
  this.smallestRoseLogo= true;
  },300)

}
    

  }else{
    this.smallestRoseLogo = true;
    this.largeRoseLogo = false;
  }

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
