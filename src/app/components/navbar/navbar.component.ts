import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService} from 'angular2-flash-messages';
import { Routes, Router, ActivatedRoute, Params } from '@angular/router';
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


  innerWidth: number;
  weatherNow: string = "";
  weatherDescription: string = "";
  temperatureHigh: string = "";
  temperatureLow: string = "";
  temperatureNow: string = ""
  pendingRequest: boolean = false;
  userName: string;
  username: any;
  location: string;
  inventory: Object[];
  logoutSuccessMsg: string = "You Have Been Succcessfully Logged Out...";
  logOutSuccessful: boolean = false;
  loggedIn: boolean = true;
  smallestRoseLogo: boolean = false;
  largeRoseLogo: boolean = false;
  largestRoseLogo: boolean = false;
  weatherInfoDesktop: boolean = false;
  weatherInfo2: boolean = false;
  weatherInfoHidden: boolean = false;
  weatherInfo3Hidden: boolean = true;
  brandMobile: boolean = false;
  brandMobileIphoneX: boolean = false;
  brandFullScreen: boolean = true;
  removeBrand: boolean = false;

  divUnderlineOpen: boolean = false;
  removeWeatherQuickly: boolean = false;
  removeDesktopWeatherInfo: boolean = false;
  subcontractorObject: Object;
  subContractorArray: Object[];
  arrayOfOrderedItems: Number[];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 766) {

      this.brandMobile = true;
      this.brandFullScreen = false;
      this.brandMobileIphoneX = false;

      this.removeBrand = false;
      if (!this.largestRoseLogo) {
        this.smallestRoseLogo = true;
      }


      if (this.removeDesktopWeatherInfo && !this.removeWeatherQuickly && !this.divUnderlineOpen && !this.weatherInfo2) {

        this.removeDesktopWeatherInfo = true;
        //this.weatherInfo3Hidden = true;
        this.removeWeatherQuickly = false;;
        this.divUnderlineOpen = false;
        this.weatherInfo2 = false;
      }
      this.removeDesktopWeatherInfo = true;

      // this.removeWeatherQuickly = false;
      console.log(this.largeRoseLogo)
      console.log(this.innerWidth)
      console.log("Smaller")
    }
    if (this.innerWidth > 766 && this.innerWidth < 1080) {

      
      this.brandMobile = false;
      this.brandFullScreen = false;
      this.removeBrand = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobileIphoneX = false;
      console.log("776!")
      console.log(this.smallestRoseLogo)
      this.smallestRoseLogo = false;

      console.log(this.largeRoseLogo)
      this.largeRoseLogo = true;

    }
    if (this.innerWidth == 375) {

      this.brandMobile = false;
      this.brandFullScreen = false;
      this.removeBrand = false;
      this.removeDesktopWeatherInfo = true;
      this.brandMobileIphoneX = true;

    }
            if (document.documentElement.clientWidth == 360) {

      this.smallestRoseLogo = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobile = true;
      this.brandFullScreen = false;
      this.removeBrand = false;
      this.brandMobileIphoneX = false;      
      console.log("360")


    }
    if(this.innerWidth < 320){

      this.brandMobile = false;
      this.brandFullScreen = false;
      this.removeBrand = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobileIphoneX = false;

    }
    if (this.innerWidth > 1080) { //
      this.brandFullScreen = true;
      console.log("listener fulscreenbrand")
      this.brandMobile = false;
      this.brandMobileIphoneX = false;

      this.largeRoseLogo = true;
      this.removeBrand = false;
      //this.removeDesktopWeatherInfo = false;
      this.removeWeatherQuickly = false;
      this.weatherInfo2 = false;
      this.divUnderlineOpen = false;

      this.smallestRoseLogo = false;
      //this.largestRoseLogo= false;
      console.log(this.largeRoseLogo)
      console.log(this.smallestRoseLogo)
    }
    console.log("POLLYS")
    console.log(this.innerWidth)
    console.log(this.largeRoseLogo);
  }

  constructor(public authservice: AuthService,
    //private flashmessage: FlashMessagesService,
    private router: Router,
    private dataservice: DataService,
    private clientservice: ClientService,
    private activatedroute: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private weatherservice: WeatherService) { }


  ngOnInit() {

    console.log(this.divUnderlineOpen)
    console.log(this.removeWeatherQuickly)

    this.weatherservice.getWeather().subscribe(data => {

      console.log(data)
      this.weatherNow = data.weather[0].icon;
      this.temperatureNow = data.main.temp;
      this.temperatureHigh = data.main.temp_max;
      this.temperatureLow = data.main.temp_min;
      this.weatherDescription = data.weather[0].description;

    })

    this.username = this.authservice.userName;
    console.log(this.authservice.getUserData());
    this.authservice.userSubscribable.subscribe(value => {
      console.log("SHADO");
      console.log(value);
      this.username = value;
      console.log(this.username);

    });
    

  if (document.documentElement.clientWidth > 1080) { //
      this.brandFullScreen = true;
      console.log("listener fulscreenbrand")
      this.brandMobile = false;
      this.brandMobileIphoneX = false;

      this.largeRoseLogo = true;
      this.removeBrand = false;
      //this.removeDesktopWeatherInfo = false;
      this.removeWeatherQuickly = false;
      this.weatherInfo2 = false;
      this.divUnderlineOpen = false;

      this.smallestRoseLogo = false;
      //this.largestRoseLogo= false;
      console.log(this.largeRoseLogo)
      console.log(this.smallestRoseLogo)
    }
    
    if (document.documentElement.clientWidth < 766) {

      this.smallestRoseLogo = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobile = true;
      this.brandFullScreen = false;
      this.removeBrand = false;
      console.log("<766")


    }
        if (document.documentElement.clientWidth == 360) {

      this.smallestRoseLogo = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobile = true;
      this.brandFullScreen = false;
      this.removeBrand = false;
      this.brandMobileIphoneX = false;      
      console.log("360")


    }
     if (document.documentElement.clientWidth > 776 && document.documentElement.clientWidth < 1079) {

      this.brandMobile = false;
      this.brandFullScreen = false;
      this.brandMobileIphoneX = false;
      
      this.removeBrand = true;

    }

    if (document.documentElement.clientWidth == 375) {

      this.brandMobile = false;
      this.brandFullScreen = false;
      this.removeBrand = false;
      this.removeDesktopWeatherInfo = true;
      this.brandMobileIphoneX = true;

    }
    if(document.documentElement.clientWidth < 320){

      this.brandMobile = false;
      this.brandFullScreen = false;
      this.removeBrand = true;
      this.removeDesktopWeatherInfo = true;
      this.brandMobileIphoneX = false;

    }

    else {
      this.brandMobile = true;
      this.brandFullScreen = false;
      this.removeBrand = false;
      this.largeRoseLogo = true;
      this.removeDesktopWeatherInfo = false;
      console.log("Final Condition")

    }
    console.log(this.largeRoseLogo)
    console.log(this.brandFullScreen)
    console.log("brandfullscreen^")
    this.authservice.checkIfLoggedIn();


    this.activatedroute.params.subscribe((params: Params) => {

      console.log(params);
      console.log(params.location);
      console.log(this.router.url);
      console.log(this.router.url.slice(16, this.router.url.length));
      this.location = this.router.url.slice(16, this.router.url.length);
      console.log(this.location);


      console.log("hello from navbar");
      //setInterval(()=>{
      this.userName = this.authservice.userName;
      this.authservice.loadToken();
      console.log(this.authservice.authToken);
      if (this.authservice.authToken) {

        this.loggedIn = true;

      } else {
        this.loggedIn = false;
      }








    })
    console.log(this.brandFullScreen)
    //},2000);

    //this.dataservice.getSubcontractors().subscribe(data=>{

    // console.log(data);


    // })

  }
  closeWeatherInfo() {

    this.weatherInfo2 = false;
    this.divUnderlineOpen = false;
    this.weatherInfo3Hidden = true;
    this.weatherInfoHidden = false;
    console.log(this.weatherInfo2)


  }
  openWeatherInfo() {
    console.log("pressed")
    if (!this.weatherInfoDesktop && document.documentElement.clientWidth > 768) {
      this.removeDesktopWeatherInfo = false;
      this.weatherInfoDesktop = true;

      //console.log(this.weatherInfo)
      //console.log(this.innerWidth)

    }
    else {

      this.weatherInfoDesktop = false;
      // console.log(this.weatherInfo)
      console.log(this.innerWidth)
      console.log(document.documentElement.clientWidth)
    }

    if (!this.weatherInfo2 && document.documentElement.clientWidth < 768) {

      this.weatherInfo2 = true
      this.divUnderlineOpen = true;
      this.weatherInfo3Hidden = false;
      this.weatherInfoHidden = false;
      //this.removeWeatherQuickly=true;
      console.log(this.weatherInfo2)
      console.log(this.divUnderlineOpen)
    } else {

      this.weatherInfo2 = false;
      this.divUnderlineOpen = false;
      this.weatherInfo3Hidden = true;
      this.weatherInfoHidden = false;
      console.log(this.weatherInfo2)
    }
  }

  ngAfterViewInit() {

    this.cdRef.detectChanges();
    console.log("CHAAAAAANGES")

    if (document.documentElement.clientWidth < 766) {

      console.log("smaller")
    }
  }
  closeNavbar() {
    if (document.documentElement.clientWidth < 766) {
      document.getElementById("navbar-toggle").click();

    }
    //document.getElementByClassName("navbar-toggle").click();

    console.log(document.documentElement.clientWidth)

  }
  loadLargeRoseLogo() {

    if (document.documentElement.clientWidth < 766) {
      console.log("pressed")
      this.removeWeatherQuickly = true;
      console.log(this.removeWeatherQuickly)
      if (!this.largestRoseLogo) {
        this.smallestRoseLogo = false
        console.log("mobile")
        this.largestRoseLogo = true;

      } else {
        this.removeWeatherQuickly = false;
        this.weatherInfo2 = false;
        this.divUnderlineOpen = false;
        this.weatherInfo3Hidden = true;
        this.weatherInfoHidden = false;

        setTimeout(() => {

          this.largestRoseLogo = false;
          this.smallestRoseLogo = true;
          //this.removeWeatherQuickly = false;
        }, 300)

      }


    } else {
      this.smallestRoseLogo = true;
      this.largeRoseLogo = false;
    }

  }
  onLogoutClick() {


    this.authservice.logOut();
    if (document.documentElement.clientWidth < 768) {

      document.getElementById('navbar-toggle').click();

    }

    console.log("pressed")
    // this.logOutSuccessful = true;
    //document.getElementById("navbar-toggle").click();


    this.username = "";
    // setTimeout(()=>{

    // this.logOutSuccessful = false;
    this.router.navigate(['/']);
    // return false;

    /// },500);
    //this.flashmessage.show("You are now logged out..",{cssClass: 'alert-success',timeout: 5000});


  }

  closeDropdown() {
    console.log("pressed")

    if (document.documentElement.clientWidth > 768) {
      console.log("fist condition")
      this.largeRoseLogo = true;
      this.largestRoseLogo = false;
      this.smallestRoseLogo = false;

    } else {

      document.getElementById('navbar-toggle').click();
      setTimeout(() => {



      }, 500)
    }

  }


}
