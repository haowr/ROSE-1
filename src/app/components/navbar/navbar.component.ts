import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
//import { FlashMessagesService} from 'angular2-flash-messages';
import { Routes,Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../services/data.service";
import { ClientService } from "../services/client.service";
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
            this.authservice.getClients().subscribe(profile => {

     // this.username = profile.user.name;
      console.log(this.username);

    },
    err =>{

      console.log(err);
      return false;


    })
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

    if (this.location == "Anta Janitorial") {
      console.log("I ran!" + this.location);

      this.dataservice.getTobaSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory

      })
    }
    if (this.location == "K.N. Janitorial") {
      console.log("I ran!" + this.location);

      this.dataservice.getKnJanitorialSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory

      })
    }
    if (this.location == "Anta Janitorial") {
      console.log("Anta Janitorial");
      console.log("ANTAKJFLKSDJLFDKLFJDF");
      this.dataservice.getAntaSubContractorInventory().subscribe(inventory => {

        this.inventory = inventory.subcontractorinventory;
        console.log(this.inventory);
        for(let i =0;i<this.inventory.length; i++){

        

        }
      })

    }
    if (this.location === "Mansheel Janitorial Services") {
      console.log("I ran!");

      this.dataservice.getMansheelSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
      })
    }
    if (this.location === "AAK Building Maintenance") {
      console.log("I ran!");

      this.dataservice.getAAKSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Jossy Quality Cleaning Inc.") {
      console.log("Jossy has run");

      this.dataservice.getJossySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory[index].ordered;

      })
    }
    if (this.location === "Super Generator Ltd.") {
      console.log("I ran!" + this.location);

      this.dataservice.getSuperGenSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Mayamy Cleaning") {
      console.log("I ran!");

      this.dataservice.getMayamySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Double H Zerit Inc.") {
      console.log("I ran!");

      this.dataservice.getDoubleHSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Gaius Commercial and Domestic Cleaners Inc.") {
      console.log("I ran!");

      this.dataservice.getGaiusLeducSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Aredie Cleaning Services Ltd.") {
      console.log("I ran!");

      this.dataservice.getAredieSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "DMB Solutions") {
      console.log("I ran!");

      this.dataservice.getDMBSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "G. Welcome Janitorial Ltd.") {
      console.log("I ran!");

      this.dataservice.getGWelcomeSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Safe Building Maintenance Inc.") {
      console.log("SAFERRR@@@");

      this.dataservice.getSafeBuildingSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Mex Cleaning") {
      console.log("I ran!");

      this.dataservice.getMexCleaningSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
      })
    }
    if (this.location === "Crystal Clean Care") {
      console.log("Crystal Clean Care");

      this.dataservice.getCrystalSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Gion's Cleaning Services") {
      console.log("Crystal Clean Care");

      this.dataservice.getGionSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Delinagenet Janitorial Services") {
      console.log("Deli");

      this.dataservice.getDellnagenetSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        for (var i = 0; i < this.inventory.length; i++) {

          //this.numberOrdered.push(inventory.subcontractorinventory[i].ordered);

        }
        // console.log(this.numberOrdered);

      })
    }
    if (this.location === "D Tesfame Cleaning Ltd.") {
      console.log("DTES");
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })


    }

    if (this.location === "1992063 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.getAlbertaLtdBonnySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })

    }
    if (this.location === "1799307 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.getAlbertaLtdWhitemudSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })

    }

      this.clientservice.getSubcontractor().subscribe(data=>{

      console.log(data);
      this.subContractorArray = data.subcontractors;
      for( let i=0; i< this.subContractorArray.length; i++){

        if(this.subContractorArray[i]["orderspending"]== true){

          this.pendingRequest = true;

        }
        //console.log(this.pendingRequest);

      }
    })
  })

    //},2000);
    
 //this.dataservice.getSubcontractors().subscribe(data=>{

     // console.log(data);
      

   // })

  }

  onLogoutClick(){

    this.authservice.logOut();
    this.logOutSuccessful = true;
    
    this.username="";
    setTimeout(()=>{

      this.logOutSuccessful = false;
       this.router.navigate(['/']);   
    return false;

    },2000);
    //this.flashmessage.show("You are now logged out..",{cssClass: 'alert-success',timeout: 5000});
   

  }

}
