import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClientService } from '../../../services/client.service';
import { AuthService } from '../../../services/auth.service';
//import { trigger, state, style, transition,animate,keyframes, query, stagger } from '@angular/animations';





@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  //public href: string = "";
  location: string;
  client: string;
  public url: string = "";
  public clientList: string[];
  showLocations:boolean = false;
  address: Address;
  clients: Clients;
  user: Object;
  clientsArray: string[];
  clientArray: Object[];
  subConArrayOfObjects:Object[];
  storeNumberArrayOfArrays=[];
  locationsArrayOfArrays =[];
  storeNumberNLocationArray =[]
  locationsArray: string[] =[];
  subcontractorsArray:string[]=[];
  subcontractorArrayOfObjects:object[]=[];

  clientsArrayOfObjects: Object[];
  locationsArrayOfObjects: Object;
  clientsObject: {

    1: "Loblaws",
    2: "Sobeys",
    3: "Quebecor"


  }



  constructor(
    private dataService: DataService,
    private activatedroute: ActivatedRoute,
    private clientservice:ClientService,
    private router: Router,
    private http: HttpModule,
    private authservice: AuthService) {
    console.log(" Clients Constructor has run..");
  }


  ngOnInit() {
    console.log("ngOnInit has run...");
    console.log(this.dataService.globalData);
    this.url = this.router.url;
        this.activatedroute.params.subscribe((params: Params) => {

      console.log(params);
      console.log(params.location);
      this.location = params.location;
      this.client = params.client;

    })

    this.authservice.getClients().subscribe(profile => {

      this.user = profile.user;
      console.log(this.user);

    },
    err =>{

      console.log(err);
      return false;


    })
  
    console.log(this.router.url);
 
  
    this.clientservice.getClients().subscribe(clients =>{

      console.log(clients);
      this.clientArray =clients.clients ;
     /*   for(let i =0; i<this.clientArray.length/2; i++){

    let temp = this.clientArray[i]
    //this.listOfClients[i] = 
   this.clientArray[i] =this.clientArray[this.clientArray.length-1-i]
   this.clientArray[this.clientArray.length-1-i] = temp;

  }*/
      console.log("THIS.CLIENTARRAY");
      console.log(this.clientArray);
      console.log(clients.clients[0])
      console.log(clients.clients[0].subcontractors.length)
      for(let z =0; z<clients.clients.length; z++){
        console.log(z)
        console.log(clients.clients[z]);
         //this.clientArray[this.clientArray.length-1] = clients.clients[z];
          //if(clients.clients[z].name == this.client ){
                  this.subcontractorArrayOfObjects[z]=clients.clients[z].subcontractors;
              console.log(this.subcontractorArrayOfObjects);
        
           for(let d = 0; d<clients.clients[z].subcontractors.length;d++){

            console.log(d);
            console.log(clients.clients[z].subcontractors[d].storenumbers);
            this.storeNumberArrayOfArrays.push(clients.clients[z].subcontractors[d].storenumbers)
            this.storeNumberNLocationArray.push(clients.clients[z].subcontractors[d].storenumbers)
            this.storeNumberNLocationArray.push(clients.clients[z].subcontractors[d].locations);
            this.locationsArrayOfArrays.push(clients.clients[z].subcontractors[d].locations);
            console.log(this.storeNumberArrayOfArrays)
            
              }
             // console.log(this.storeNumberArrayOfArrays)
/*
            for(let d =0; d>clients.clients[z].length; d++){
        
              this.subcontractorsArray.push(clients.clients[z].subcontractors[d].name)
              
              for(let s =0; s> clients.clients[z].subcontractors[d].length;s++){

                this.locationsArray.push(clients.clients[z].subcontractors[d].locations[s])


              }

            }
            */

          

      }

         

/*y
      for(let i =0; i<clients.clients[0].subcontractors.length;i++){
        console.log(clients.clients[i]);

       // this.locationsArray.push(clients.clients[0].subconractors[i].locations[i]);
       for(let j=0; j< clients.clients[0].subcontractors[i].locations.length;j++){

        this.locationsArray.push(clients.clients[0].subcontractors[i].locations[j]);
       }

      }
      for(let i =0; i<clients.clients[0].subcontractors.length;i++){


        

          this.subcontractorsArray.push(clients.clients[0].subcontractors[i].name);

        

      }
         for(let i =0; i<clients.clients[0].subcontractors.length;i++){


        

          this.subcontractorArrayOfObjects.push(clients.clients[0].subcontractors[i]);

        

         }*/

      console.log(this.subcontractorsArray.length);
      console.log(this.locationsArray.length)
      console.log(this.subcontractorArrayOfObjects);
    })
    this.dataService.getClients().subscribe(clients => {

      console.log(clients.clients);
      this.clientList = clients.clients;
      console.log(this.clientList);

    });


    // subscribe to router event
    this.activatedroute.params.subscribe((params: Params) => {
      let userId = params['clients'];
      console.log(userId);
    });

    this.locationsArrayOfObjects = [{

      1: ["1502(RCSS)", "1691(RCLS)"],
      2: ["1541(RCSS)"],
      3: ["1547(RCSS)", "1647(RCLS)"]

    }]

    //this.clientsObject = {

    //1: "Loblaws",
    //2: "Sobeys",
    //3: "Quebecor"


    //}


    this.address = {

      street: '46 Ollie Cl',
      city: 'Vancouver',
      state: 'New York'

    }
    this.clientsArray = ['Loblaws', 'Sobeys', 'Quebecor'];
    //this.Locations =[  "1502(RCSS)","1691(RCLS)"];
    this.clientsArrayOfObjects = [
      {

        1: {
          name: "Loblaws",
          location: ["Kingsway", "G.Prarie", "Camrose", "Ft.McMurry", "South Common",
            "Spruce Grove", "Clairview", "Heritage Valley", "Stony Plain", "Windemere",
            , "Edmonton North", "Edmonton South", "Bonnyville", "St.Paul", "Rocky Mtn House",
            "Leduc", "Edson", "Ft.Sask"],
          locationUrl: ['/clients/Kingsway']
        },
        2: "Sobeys",
        3: "Quebecor"


      }
      /* {
 
         1: "Loblaws",
         2: "Sobeys",
         3: "Quebecor"
       },
       {
         1: "Loblaws",
         2: "Sobeys",
         3: "Quebecor"
       }
 */


    ]
  }
showLocationsFunc(index){
  console.log(index);

}

}


interface Address {

  street: string,
  city: string,
  state: string

}
interface Clients {
  1: "Loblaws",
  2: "Sobeys",
  3: "Quebecor"


}
/*interface Locations {

  1: "1502(RCSS)",
  2: "1691(RCLS)"

}
*/