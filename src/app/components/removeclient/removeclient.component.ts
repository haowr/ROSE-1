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
  clientRemovedSuccess:boolean = false;
  clientRemovedSuccessMsg:string=" Client Successfully Removed...";
  constructor ( private dataservice: DataService ,private clientservice: ClientService) { }

  ngOnInit() {
                      document.getElementById("openModalButton").click();


    this.clientservice.getClients().subscribe(data=>{

      console.log(data)
      this.listOfClients = data.clients;

    })

  }
  removeClient(clientname){

    console.log(clientname)
    this.clientservice.removeClient(clientname).subscribe(data=>{

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

    })
  }



}
