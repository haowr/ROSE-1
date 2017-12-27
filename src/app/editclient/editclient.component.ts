import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {

  clientsArray: Object[] = [];
  subcontractorsArray: Object[] = [];
  clientName: string = "";
  clientPhoneNumber: string = "";
  clientEmailAddress: string = "";
  clientContactName: string = "";
  clientContactPhone: string = "";
  clientContactEmail: string = "";
  subContractorName: string = "";
  subContractorPhoneNumber: string = "";
  subContractorEmailAddress: string = "";
  subContractorContactName: string = "";
  subContractorContactPhone: string = "";
  subContractorContactEmail: string = "";
  openEditForm: boolean = false;
  loadingEditIcon: boolean = false;
  openEditSubcontractors: boolean = false;


  constructor(private clientservice: ClientService) { }

  ngOnInit() {

    console.log("getClients");

    this.clientservice.getClients().subscribe(data => {

      console.log(data);
      this.clientsArray = data.clients;
      for (let i = 0; i < data.clients.length; i++) {

        this.subcontractorsArray[i] = data.clients[i].subcontractors;


      }
      console.log("this.subcontractorsArray");
      console.log(this.subcontractorsArray);

    })

  }
  openEditFormFunc() {

    if (!this.openEditForm) {
      this.openEditForm = true;
    } else {
      this.openEditForm = false;
    }

  }
  editClientFunc(clientparam) {
    //console.log(client);
    let clientToBeEdited = {
      client: clientparam,
      clientname: this.clientName,
      clientphonenumber: this.clientPhoneNumber,
      clientemailaddress: this.clientEmailAddress,
      clientcontactname: this.clientContactName,
      clientContactPhone: this.clientContactPhone,
      clientContactEmail: this.clientContactEmail

    }
    this.clientservice.editClient(clientToBeEdited).subscribe(data => {

      console.log(data);

      this.clientservice.getClients().subscribe(data => {

        console.log(data);
        this.clientsArray = data.clients;
        this.clientName = '';
        this.clientPhoneNumber = '';
        this.clientEmailAddress = '';
        this.clientContactName = '';
        this.clientContactPhone = '';
        this.clientContactEmail = '';


      })

    })


  }
  removeSubcontractor(client, index) {

    console.log(index);
    console.log(client);

    let clientToBeEdited = {

      client: client,
      index: index

    }
    this.clientservice.editClient3(clientToBeEdited).subscribe(data => {

      this.clientservice.getClients().subscribe(data=>{

        console.log(data.clients)
        for(let i =0; i< data.clients.length; i++){

          this.subcontractorsArray[i] = data.clients[i].subcontractors;

        }

      })

      //console.log(data.client);
         /*   for (let i = 0; i < data.client.length; i++) {

        console.log(data.client.subcontractors);
        
        this.subcontractorsArray[i] = data.client.subcontractors;
        console.log(this.subcontractorsArray);


      }
      */
      //this.subContractorsArray = data.client
      console.log("this.subcontractorsArray");
      console.log(this.subcontractorsArray);


    })

  }
  openEditSubcontractorsFunc() {

    if (!this.openEditSubcontractors) {

      this.openEditSubcontractors = true;

    } else {

      this.openEditSubcontractors = false;

    }

  }
  editSubContractorFunc(client, item, index) {

    this.loadingEditIcon = true;
    let clientToBeEdited2 = {

      client: client,
      item: item,
      index: index,
      subContractorName: this.subContractorName,
      subContractorPhoneNumber: this.subContractorPhoneNumber,
      subContractorEmailAddress: this.subContractorEmailAddress,
      subContractorContactName: this.subContractorContactName,
      subContractorContactPhone: this.subContractorContactPhone,
      subContractorContactEmail: this.subContractorContactEmail

    }
    console.log(client);
    console.log(item);
    console.log(index);
    console.log(clientToBeEdited2);

    this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

      if (data.success) {

        this.loadingEditIcon = false;
        this.clientservice.getClients().subscribe(data => {

          //console.log(data);
          this.clientsArray = data.clients;
          for (let i = 0; i < data.clients.length; i++) {

            this.subcontractorsArray[i] = data.clients[i].subcontractors;


          }
          console.log("this.subcontractorsArray");
          console.log(this.subcontractorsArray);

          console.log(this.clientsArray);
          console.log(data);
          this.subContractorPhoneNumber = ''
          this.subContractorEmailAddress = ''
          this.subContractorContactName = ''
          this.subContractorContactPhone = ''
          this.subContractorContactEmail = ''

        })

      }

    })

  }
}


