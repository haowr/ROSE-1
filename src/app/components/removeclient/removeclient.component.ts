import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-removeclient',
  templateUrl: './removeclient.component.html',
  styleUrls: ['./removeclient.component.css']
})


export class RemoveclientComponent implements OnInit {

  listOfClients: Object[];
  client:string;
  clientNameVar:string;
  clientRemovedSuccess:boolean = false;
  
  areYouSure:boolean = false;
  removingClient:boolean = false;
  removalComplete:boolean = false;
  clientsLoading:boolean = false;
  clientRemovedSuccessMsg:string=" Client Successfully Removed...";
  constructor ( private dataservice: DataService ,private clientservice: ClientService) { }

  ngOnInit() {
                      
    this.clientsLoading = true;

    this.clientservice.getClients().subscribe(data=>{

      console.log(data)

      if(data.success){
        this.clientsLoading=false;
  this.listOfClients = data.clients;
  //this.listOfClients.reverse();
 /* for(let i =0; i<this.listOfClients.length/2; i++){

    let temp = this.listOfClients[i]
    //this.listOfClients[i] = 
   this.listOfClients[i] =this.listOfClients[this.listOfClients.length-1-i]
   this.listOfClients[this.listOfClients.length-1-i] = temp;

  }*/
  console.log(this.listOfClients);

      }
      

    })

  }
  removeClientTest(clientname){

    this.areYouSure=false;
    this.removingClient = true;
    console.log(clientname);
   // document.getElementById("btnclose").click();
    //document.getElementsByClassName('.close').click();
   this.clientservice.removeClient(this.client).subscribe(data=>{

      console.log(data);
      if(data.success){
    this.clientservice.removeSubContractor2(this.client).subscribe(data=>{

  console.log(data)

})

            this.clientservice.getClients().subscribe(data=>{

      console.log(data)
      if(data.success){
 this.removingClient = false;
        this.removalComplete = true;
        setTimeout(()=>{

          this.removalComplete = false;
document.getElementById("btnclose").click();
        },2500);

      //this.areYouSure= true;
      this.listOfClients = data.clients;
       /* for(let i =0; i<this.listOfClients.length/2; i++){

    let temp = this.listOfClients[i]
    //this.listOfClients[i] = 
   this.listOfClients[i] =this.listOfClients[this.listOfClients.length-1-i]
   this.listOfClients[this.listOfClients.length-1-i] = temp;

  }*/
      }
      

    })
       


      }else{

      }

    

    })

  }
  removeClient(clientname){

    this.areYouSure = true;

document.getElementById("openModalButton").click();
    console.log(clientname)
    this.client = clientname;
    this.clientNameVar = clientname;

    /*this.clientservice.removeClient(clientname).subscribe(data=>{

      console.log(data);
      if(data.success){

        this.clientRemovedSuccess = true;
        setTimeout(()=>{

          this.clientRemovedSuccess = false;

        },2500);


      }else{

      }
    this.clientservice.getClients().subscribe(data=>{

      console.log(data)
      this.listOfClients = data.clients;

    })
    

    })*/
  }



}
