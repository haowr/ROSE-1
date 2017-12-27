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
  addSubcontractorStoreNumberConditionsMet:boolean = false;
  addSubcontractorLocationConditionsMet:boolean = false;
  addSubcontractorNameConditionsNotMetMsg:string = "A Subcontractor Name Must Be Input...";
  addSubcontractorEmailAddressConditionsNotMetMsg:string ="A Subcontractor Email Address Must Be Input..";
  addSubcontractorPhoneNumberConditionsNotMetMsg:string = "A Subcontractor Phone Number Must Be Input...";
  addSubcontractorContactNameConditionsNotMetMsg:string = "A Subcontractor Contact Name Must Be Input...";
  addSubcontractorContactEmailConditionsNotMetMsg:string = "A Subcontractor Contact Email Must Be Input...";
  addSubcontractorContactPhoneConditionsNotMetMsg:string = "A Subcontractor Contact Phone Must Be Input...";
  addSubcontractorStoreNumbersConditionsNotMetMsg:string = "A Store Number Must Be Input And Loaded...";
  addSubcontractorLocationsConditionsNotMetMsg:string ="A Location Must Be Input And Loaded...";
  addSubcontractorStoreNumberConditionsMetMsg:string="Store Number Successfully Loaded...";
  
  addSubcontractorLocationConditionsMetMsg:string = "Location Successfully Loaded...";
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
   if(this.subcontractorLocation == ""|| undefined){

                      this.addSubcontractorLocationsConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorLocationsConditionsNotMet = false;

        },2000);

    }else{
          this.subcontractorLocations.push(this.subcontractorLocation);
          console.log(this.subcontractorLocations);
    this.subcontractorLocation = "";
                            this.addSubcontractorLocationConditionsMet = true;
        setTimeout(()=>{

          this.addSubcontractorLocationConditionsMet = false;

        },2000);
    }

  }
  removeLocationFromSubcontractorFunc() {

    this.subcontractorLocations.splice(0, 1);

  }
  addStoreNumberToSubcontractorFunc(storenumber) {
    //this.subcontractorStoreNumbers = [];
        if(this.subcontractorStoreNumber == ""|| undefined){

                      this.addSubcontractorStoreNumbersConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorStoreNumbersConditionsNotMet = false;

        },2000);

    }else{
          this.subcontractorStoreNumbers.push(this.subcontractorStoreNumber);
    this.subcontractorStoreNumber = "";
                            this.addSubcontractorStoreNumberConditionsMet = true;
        setTimeout(()=>{

          this.addSubcontractorStoreNumberConditionsMet = false;

        },2000);
    }

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
      locations: this.subcontractorLocations,
      date: 0,
      topline:[ 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 5,
                    "manufacturer" : "Topline Sanitation Inc.",
                    "supplier" : "topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 0,
                    "description" : "Niagara Floor Pad, 20\", Red Buffer",
                    "price" : 8.96,
                    "unit" : "Ea",
                    "color" : "Red",
                    "size" : "20\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 1,
                    "manufacturer" : "Topline Sanitation Inc.",
                    "supplier" : "topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 1,
                    "description" : "Safety Zone Powder Free Synthetic Gloves",
                    "price" : 9.95,
                    "unit" : "Bx",
                    "color" : "Blue",
                    "size" : "Large"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "manufacturer" : "Topline Sanitation Inc.",
                    "supplier" : "topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 2,
                    "description" : "Goldex Bleach (6%)",
                    "price" : 4.95,
                    "unit" : "Bx",
                    "color" : "N/A",
                    "size" : "3.6L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "manufacturer" : "Topline Sanitation Inc.",
                    "supplier" : "topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 3,
                    "description" : "Rayon Narrow Band Cut-End Wet Mop Head",
                    "price" : 6.56,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "Large"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "manufacturer" : "Topline Sanitation Inc.",
                    "supplier" : "topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 4,
                    "description" : "Topline Neutra Klean Neutral Floor Soap",
                    "price" : 6.56,
                    "unit" : "L",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Pur Value",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 5,
                    "description" : "Single Fold Hand Towels.",
                    "price" : 29.95,
                    "unit" : "CS",
                    "color" : "Brown",
                    "size" : "Large"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Pur Value.",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 6,
                    "description" : "Garbage Bags, Regular",
                    "price" : 18.95,
                    "unit" : "500/CS",
                    "color" : "Black",
                    "size" : "22\"X24\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Norton.",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 7,
                    "description" : "Norton Red Buffer Floor Pad",
                    "price" : 5.45,
                    "unit" : "EA",
                    "color" : "Red",
                    "size" : "16\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Febreeze.",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 8,
                    "description" : "Air Effects Air Freshener, Spring & Renewal",
                    "price" : 4.65,
                    "unit" : "Bx",
                    "color" : "N/A",
                    "size" : "250g"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "TopVac Plus Illuminate",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 9,
                    "description" : "UHS Burnishing Floor Finish(20% solids)",
                    "price" : 99.95,
                    "unit" : "EA",
                    "color" : "Blue",
                    "size" : "20L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "UltraChemLabs",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 10,
                    "description" : "Hard Floor Neurtralizer Acidic Rinse & Residue Remover 4L",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Norton.",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 11,
                    "description" : "UHS Burnishing Floor Pad",
                    "price" : 10.5,
                    "unit" : "EA",
                    "color" : "Light Blue",
                    "size" : "24\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Classique",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 12,
                    "description" : "Deluxe Hardwound Roll Towel",
                    "price" : 34.95,
                    "unit" : "6/CS",
                    "color" : "White",
                    "size" : "8\"X800ft"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Classique",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 13,
                    "description" : "Minimax Mini JRT Jumbo Bath Tissue, 2Ply",
                    "price" : 49.95,
                    "unit" : "12/CS",
                    "color" : "N/A",
                    "size" : "750ft"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Pur Value",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 14,
                    "description" : "Garbage Bags, Extra Strong",
                    "price" : 24.95,
                    "unit" : "100/CS",
                    "color" : "Black",
                    "size" : "35\"X50\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Safety Zone.",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 15,
                    "description" : "Powder Free Synthetic Gloves",
                    "price" : 24.95,
                    "unit" : "100CS",
                    "color" : "Black",
                    "size" : "Large"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "AGF 4020",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 16,
                    "description" : "Rayon Narrow Band Cut-End Wet Mop Head(bagged)",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "Medium"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "RS",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 17,
                    "description" : "Special Degreaser",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 18,
                    "description" : "Top Bowl 23% Acid Toilet Bowl Cleaner",
                    "price" : 4.95,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "909ML"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "UltraChemLabs",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 19,
                    "description" : "Aluminum Mop Handle w/ Quick-Clip Head",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "1.5M"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "TopVac",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 20,
                    "description" : "Heavy Duty Degreaser",
                    "price" : 19.95,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Niagara",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 21,
                    "description" : "Floor Pad (Burnish)",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "Aqua",
                    "size" : "27\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Niagara",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 22,
                    "description" : "Floor Pad (Buffer)",
                    "price" : 4.65,
                    "unit" : "EA",
                    "color" : "Red",
                    "size" : "13\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 23,
                    "description" : "Glass Glo RTU Glass Cleaner",
                    "price" : 6.99,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 24,
                    "description" : "Neutra Klean Neutral Floor Soap",
                    "price" : 8.95,
                    "unit" : "EA",
                    "color" : "Pink/Cherry",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 25,
                    "description" : "Hard Floor Neurtralizer Acidic Rinse & Residue Remover 4L",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Lobby",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 26,
                    "description" : "Lobby Dustpan w/ Long Handle & Clip (NO BROOM)",
                    "price" : 12.95,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "N/A"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Vileda Professional",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 27,
                    "description" : "Industrial Curved Block Magnetic Broom",
                    "price" : 6.34,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "Large"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Astrolene",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 28,
                    "description" : "Slip-On Cut-End Dust Mop Head",
                    "price" : 36.84,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "36\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Breakaway",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 29,
                    "description" : "Breakaway Dust Mop Frame Only",
                    "price" : 4.95,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "36\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Tork",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 30,
                    "description" : "Universal JRT Jumbo Bath Tissue 2 Ply",
                    "price" : 18.75,
                    "unit" : "12/CS",
                    "color" : "N/A",
                    "size" : "3.5\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Gojo",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 31,
                    "description" : "Green Certified Mild Foam Hand Cleaner",
                    "price" : 3.75,
                    "unit" : "EA",
                    "color" : "Clear",
                    "size" : "N/A"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Pur Value",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 32,
                    "description" : "Garbage Bags Regular",
                    "unit" : "250/CS",
                    "color" : "Black",
                    "size" : "26\"X36\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 33,
                    "description" : "4\" Floor & Window Scraper",
                    "price" : 18.75,
                    "unit" : "EA",
                    "color" : "Red & Grey",
                    "size" : "4\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Topline",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 34,
                    "description" : "Super Scraper 4\" Replacement Blades",
                    "unit" : "10/PKG",
                    "color" : "N/A",
                    "size" : "4\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Niagara",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 35,
                    "description" : "Floor Pad (Buffer)",
                    "price" : 8.25,
                    "unit" : "EA",
                    "color" : "Red",
                    "size" : "16\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "topline",
                    "manufacturer" : "Niagara",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 36,
                    "description" : "Floor Pad (Buffer)",
                    "price" : 8.25,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "19\""
                }
            ],
      wesclean:[ 
                {
                    "ordereddec" : 1,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : "R0301610",
                    "description" : "25 UHS FINISH",
                    "price" : 74.45,
                    "unit" : "2/CS",
                    "color" : "N/A",
                    "size" : "10L"
                }, 
                {
                    "ordereddec" : 5,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 30902,
                    "description" : "Burnisher Pad Assist 20\" 34V Batteries, Obc Dust Control",
                    "price" : 4515.8,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "20\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 1410070,
                    "description" : "Blades Razor SNGL Edge 12120.012IN Single Edge For RS-100/300",
                    "price" : 26.19,
                    "unit" : "100/PKG",
                    "color" : "N/A",
                    "size" : "10L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 1410050,
                    "description" : "Scraper Razor W/ Plastic Body, Retractable/ w/Single Edge Blade/ Replacement Blade 1212",
                    "price" : 2.92,
                    "unit" : "2/CS",
                    "color" : "N/A",
                    "size" : "N/A"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620711,
                    "description" : "16\" HI PRO PAD 3M 5/CS",
                    "price" : 48.35,
                    "unit" : "5/CS",
                    "color" : "N/A",
                    "size" : "28\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 9890213,
                    "description" : "UHS BLUE BLEND PAD 5/CS",
                    "price" : 74.45,
                    "unit" : "5/CS",
                    "color" : "BLUE",
                    "size" : "28\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 170032,
                    "description" : "GP FORWARD GENERAL PURPPOSE CLEANER 18.9L",
                    "price" : 90.87,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "18.9L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 6210100,
                    "description" : "CARPET AIR BLOWER 3 SPEED",
                    "price" : 349,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "10L"
                }, 
                {
                    "ordereddec" : 1,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : "R0301610",
                    "description" : "25 UHS FINISH",
                    "price" : 74.45,
                    "unit" : "2/CS",
                    "color" : "N/A",
                    "size" : "10L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : "NIL56315268",
                    "description" : "VAC HOSE 1.5",
                    "price" : 53.86,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "N/A"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620057,
                    "description" : "17IN RED PAD 3M 5/CS",
                    "price" : 30.18,
                    "unit" : "5/CS",
                    "color" : "N/A",
                    "size" : "17\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620712,
                    "description" : "17IN HI PRO PAD 3M 5/CS",
                    "price" : 53.16,
                    "unit" : "2/CS",
                    "color" : "N/A",
                    "size" : "17\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 9620451,
                    "description" : "HANDLE BROOM WOOD 60INX15/16 IN THREADED TIP",
                    "price" : 3.04,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "60\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 1410191,
                    "description" : "BLADES SUPER SCRAPER IN 10/PK FOR 37500",
                    "price" : 23.07,
                    "unit" : "10/PK",
                    "color" : "N/A",
                    "size" : "4\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 1410261,
                    "description" : "SCRAPER 4\" WITH 5.5\" PLASTIC HANDLE",
                    "price" : 11.93,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "4\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620057,
                    "description" : "17\" RED PAD 3M",
                    "price" : 30.18,
                    "unit" : "5/CS",
                    "color" : "RED",
                    "size" : "17\""
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "DURATHON",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 530035,
                    "description" : "DURATHON FLOOR FINISH 9.5L 2/CS",
                    "price" : 74.45,
                    "unit" : "2/CS",
                    "color" : "N/A",
                    "size" : "9.5"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620257,
                    "description" : "GP FORWARD GENERAL PURPOSE CLEANER 18.9L",
                    "price" : 90.87,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "18.9L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "STRIDE",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 170055,
                    "description" : "STRIDE FLORAL NEUTRAL ALL PURPOSE CLEANER 18.9L",
                    "price" : 35.06,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "10L"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "Infinity",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 9610059,
                    "description" : "WAX MOP SILKY NYLON LOOPED END MEDIUM 20OZ",
                    "price" : 14.77,
                    "unit" : "EA",
                    "color" : "N/A",
                    "size" : "200OZ"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "wesclean",
                    "manufacturer" : "UHS",
                    "instock" : 50,
                    "ordered" : 0,
                    "orderspending" : false,
                    "recieved" : 0,
                    "requested" : 0,
                    "productcode" : 620657,
                    "description" : "28\" UHS AQUA PAD 3M",
                    "price" : 30.18,
                    "unit" : "5/CS",
                    "color" : "AQUA",
                    "size" : "10L"
                }
            ],
      veritivcanada:[ 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "supplier" : "veritivcanada",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000046005 3M F-3200 SPEED BURNISHING TOP LINE FLOOR PAD (5/CS)",
                    "productcode" : 154126,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 2,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "supplier" : "veritivcanada",
                    "unit" : "CS",
                    "price" : 35.24,
                    "size" : "21in",
                    "color" : "N/A",
                    "description" : "7000127868 SKYBLUE HI-PERFORMANCE BURN PAD (5/CS)",
                    "productcode" : 154200,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "supplier" : "veritivcanada",
                    "price" : 29.39,
                    "size" : "17in",
                    "color" : "Beige",
                    "description" : "7000045999 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode" : 154341,
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "orderspending" : false,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000028442 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 154453,
                    "supplier" : "veritivcanada",
                    "orderspending" : false,
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "supplier" : "veritivcanada",
                    "description" : "7000045997 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode" : 154456,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "supplier" : "veritivcanada",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000120631 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 154459,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000120629 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 154768,
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "orderspending" : false,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "supplier" : "veritivcanada",
                    "color" : "Beige",
                    "description" : "7000000675 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode" : 154821,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000045882 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 154827,
                    "supplier" : "veritivcanada",
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "orderspending" : false,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000000678 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode" : 154839,
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "orderspending" : false,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000000673 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode" : 154842,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "supplier" : "veritivcanada",
                    "description" : "7000000679 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode" : 154843,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "supplier" : "veritivcanada",
                    "color" : "Beige",
                    "description" : "7000000674 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode" : 154855,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000045896 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 154989,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000000681 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode" : 155278,
                    "requested" : 0,
                    "orderspending" : false,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "supplier" : "veritivcanada",
                    "description" : "7000120627 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 155320,
                    "requested" : 0,
                    "orderspending" : false,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000046001 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode" : 156065,
                    "requested" : 0,
                    "orderspending" : false,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "supplier" : "veritivcanada",
                    "description" : "7000136427 3M HI PROFILE DOODLEBUG PAD (10/PKG 20/CS)",
                    "productcode" : 156104,
                    "requested" : 0,
                    "orderspending" : false,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000045865 3M F-7300 HIGH PRODUCTIVITY STRIPING FLOOR PAD (5/CS)",
                    "productcode" : 156272,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "supplier" : "veritivcanada",
                    "price" : 45.27,
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000000714 3M F-3300 NATURAL BLEND FLOOR PAD (5/CS)",
                    "productcode" : 156278,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000052396 NIAGARA F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 157012,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000052406 NIAGARA F-5100 BUFFING FLOOR PAD (5/CS)",
                    "productcode" : 157019,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "supplier" : "veritivcanada",
                    "color" : "Beige",
                    "description" : "7000126177 3M ULTRA HIGH SPEED BUFFER FLOOR PAD (5/CS)",
                    "productcode" : 157030,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000029763 NIAGARA F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode" : 157037,
                    "requested" : 0,
                    "orderspending" : false,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000126611 NIAGARA F-3100 BURNISHING FLOOR PAD (5/CS)",
                    "productcode" : 157103,
                    "orderspending" : false,
                    "requested" : 0,
                    "received" : 0,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000045998 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode" : 157167,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "supplier" : "veritivcanada",
                    "color" : "Beige",
                    "description" : "7000045868 3M F-7300 HIGH PRODUCTIVITY STRIPING FLOOR PAD (5/CS)",
                    "productcode" : 157190,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "size" : "21in",
                    "supplier" : "veritivcanada",
                    "color" : "Beige",
                    "description" : "7000046002 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode" : 157310,
                    "requested" : 0,
                    "received" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }, 
                {
                    "ordereddec" : 0,
                    "orderednov" : 0,
                    "orderedoct" : 0,
                    "orderedsept" : 0,
                    "orderedaug" : 0,
                    "orderedjul" : 0,
                    "orderedjun" : 0,
                    "orderedmay" : 0,
                    "orderedapr" : 0,
                    "orderedmar" : 0,
                    "orderedfeb" : 0,
                    "orderedjan" : 0,
                    "unit" : "CS",
                    "price" : 45.27,
                    "supplier" : "veritivcanada",
                    "size" : "21in",
                    "color" : "Beige",
                    "description" : "7000046005 3M F-3200 SPEED BURNISHING TOP LINE FLOOR PAD (5/CS)",
                    "productcode" : 157387,
                    "received" : 0,
                    "requested" : 0,
                    "orderspending" : false,
                    "ordered" : 0,
                    "instock" : 50,
                    "manufacturer" : "3M",
                    "name" : "threem"
                }
            ]

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
    if(this.subcontractorStoreNumbers.length<1){
                      this.addSubcontractorStoreNumbersConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorStoreNumbersConditionsNotMet = false;

        },2000);

    }
    if(this.subcontractorLocations.length<1){

                      this.addSubcontractorLocationsConditionsNotMet = true;
        setTimeout(()=>{

          this.addSubcontractorLocationsConditionsNotMet = false;

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

        },2000);

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


