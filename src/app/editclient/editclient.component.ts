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
  subcontractorName: string = "";
  subcontractorPhoneNumber: string = "";
  subcontractorEmailAddress: string = "";
  subcontractorContactName: string = "";
  subcontractorContactPhone: string = "";
  subcontractorContactEmail: string = "";
  subcontractorLocation: string = "";
  subcontractorStoreNumber: string = "";
  subcontractorLocations: string[] = [];
  subcontractorStoreNumbers: string[] = [];
  openEditForm: boolean = false;
  loadingEditIcon: boolean = false;
  openEditSubcontractors: boolean = false;
  openAddSubcontractors: boolean = false;
  allSubcontractorConditionsNotMet: boolean = false;
  allSubcontractorConditionsMet: boolean = false;
  addSubcontractorNameConditionsNotMet:boolean = false;
  addSubcontractorEmailAddressConditionsNotMet:boolean =false;
  addSubcontractorPhoneNumberConditionsNotMet:boolean = false;
  addSubcontractorContactEmailConditionsNotMet:boolean = false;
  addSubcontractorContactPhoneConditionsNotMet:boolean = false;
  addSubcontractorContactNameConditionsNotMet:boolean =false;
  addSubcontractorLocationsConditionsNotMet:boolean = false;
  addSubcontractorStoreNumbersConditionsNotMet:boolean = false;
  addSubcontractorNameConditionsNotMetMsg:string = "A Subcontractor Name Must Be Input...";
  addSubcontractorEmailAddressConditionsNotMetMsg:string ="A Subcontractor Email Address Must Be Input..";
  addSubcontractorPhoneNumberConditionsNotMetMsg:string = "A Subcontractor Phone Number Must Be Input...";
  addSubcontractorContactNameConditionsNotMetMsg:string = "A Subcontractor Contact Name Must Be Input...";
  addSubcontractorContactEmailConditionsNotMetMsg:string = "A Subcontractor Contact Email Must Be Input...";
  addSubcontractorContactPhoneConditionsNotMetMsg:string = "A Subcontractor Contact Phone Must Be Input...";
  allSubcontractorConditionsNotMetMsg: string = "Please Completely Fill In Form...";
  allSubcontractorConditionsMetMsg: string = "Subcontractor Successfully Added...";

  


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

      this.clientservice.getClients().subscribe(data => {

        console.log(data.clients)
        for (let i = 0; i < data.clients.length; i++) {

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
  openAddSubcontractorsFunc() {

    if (!this.openAddSubcontractors) {

      this.openAddSubcontractors = true;

    } else {
      this.openAddSubcontractors = false;
    }

  }
  addLocationToSubcontractorFunc() {
    //let subcontractorLocation = [];
    this.subcontractorLocations.push(this.subcontractorLocation);
    this.subcontractorLocation = "";
    console.log(this.subcontractorLocation);

  }
  removeLocationFromSubcontractorFunc() {

    this.subcontractorLocations.splice(0, 1);

  }
  addStoreNumberToSubcontractorFunc(storenumber) {
    //this.subcontractorStoreNumbers = [];
    this.subcontractorStoreNumbers.push(this.subcontractorStoreNumber);
    this.subcontractorStoreNumber = "";
    console.log(this.subcontractorStoreNumbers)

  }
  removeStoreNumberFromSubcontractorFunc() {

    this.subcontractorStoreNumbers.splice(0, 1);
  }
  addSubcontractor(client) {

    let subcontractor = {
      client: client,
      name: this.subcontractorName,
      phonenumber: this.subcontractorPhoneNumber,
      emailaddress: this.subcontractorEmailAddress,
      contactname: this.subcontractorContactName,
      contactemail: this.subcontractorContactEmail,
      contactphone: this.subcontractorContactPhone,
      storenumbers: this.subcontractorStoreNumbers,
      locations: this.subcontractorLocations

    }
    if(this.subcontractorPhoneNumber == "" || undefined){

                      this.addSubcontractorPhoneNumberConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorPhoneNumberConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorName == "" || undefined){

      
                      this.addSubcontractorNameConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorNameConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorEmailAddress == "" || undefined){

      
                      this.addSubcontractorEmailAddressConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorEmailAddressConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorContactPhone == ""|| undefined){

      
                      this.addSubcontractorContactPhoneConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorContactPhoneConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorContactName == ""|| undefined){

      
                      this.addSubcontractorContactNameConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorContactNameConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorContactEmail == ""|| undefined){

      
                      this.addSubcontractorContactEmailConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorContactEmailConditionsNotMet = false;

        },2000);

    }
    if (this.subcontractorPhoneNumber != "" || undefined &&
      this.subcontractorEmailAddress != "" || undefined &&
      this.subcontractorContactName != "" || undefined &&
      this.subcontractorContactEmail != "" || undefined &&
      this.subcontractorContactPhone != "" || undefined &&
      this.subcontractorStoreNumbers.length > 0 &&
      this.subcontractorLocations.length > 0
    ) {
      console.log("allconditionsmet");
      this.clientservice.editClientAddSubcontractor(subcontractor).subscribe(data => {

        console.log(data)
        if(data.success){

                  this.allSubcontractorConditionsMet = true;
        setTimeout(()=>{

          this.allSubcontractorConditionsMet = false;

        },2000);

        }else{



        }

      })
    }else{

        this.allSubcontractorConditionsNotMet = true;
        setTimeout(()=>{

          this.allSubcontractorConditionsNotMet = false;

        },5000);

    }

    console.log(subcontractor);


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


