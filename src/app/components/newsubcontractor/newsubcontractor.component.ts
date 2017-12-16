import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-newsubcontractor',
  templateUrl: './newsubcontractor.component.html',
  styleUrls: ['./newsubcontractor.component.css']
})
export class NewsubcontractorComponent implements OnInit {

  subcontractor = {

    locations: [],
    subcontractors: [],
    contractamt: 0,
    contactname: "",
    contactphone: 0,
    emailaddress: "",
    storeaddress: [],
    storenumbers: [],
    name: ""



  };
  name: string;
  richard: String;
  locations: String;
  subcontractors: String;
  contractamt: number;
  contactname: string;
  contactphone: any;
  emailaddress: string;
  storename: string;
  storenumbers: any;
  storeaddress: string;
  
  submitAddSubcontractorSuccess: boolean = false;
  submitAddSubcontractorFailed: boolean = false;
  subcontractorNotInput: boolean = false;
  locationNotInput: boolean = false;
  emailaddressNotInput: boolean = false;
  contactPhoneNotInput: boolean = false;
  contactNameNotInput: boolean = false;
  storeAddressNotInput: boolean = false;
  nameNotInput: boolean = false;
  submitAddSuccessMsg: string = "Subcontractor Successfully Added To The Database";
  submitAddFailureMsg: string = "Subcontractor Already Exists In The Database...";
  storeAddressSuccessMessage: string = "Subcontractor Successfully Added To The Database";
  addEmailAddressSuccess: boolean = false;
  addStoreAddressSuccess: boolean = false;
  addStoreAddressFailed: boolean = false;
  addStoreNumbersSuccess: boolean = false;
  addStoreNumbersFailed: boolean = false;
  submitSubcontractorSuccess:boolean=false;
  submitSubcontractorFailed:boolean=false;

  nameFieldEmpty: boolean = false;
  contactNameFieldEmpty: boolean = false;
  contactPhoneFieldEmpty: boolean = false;
  emailFieldEmpty: boolean = false;
  storeAddressArrayEmpty: boolean = false;
  storeNumbersArrayEmpty: boolean = false;
  nameMustNotBeEmpty: string = "Name Field Must Not Empty...";
  contactNameMustNotBeEmpty: string = "Contact Name Field Must Not Empty...";
  contactPhoneMustNotBeEmpty: string = "Contact Phone Field Must Not Empty...";
  emailMustNotBeEmptyMsg: string = "Email Field Must Not Empty...";
  storeAddressArrayEmptyMsg: string = "Must Include A Store Address When Adding New Subcontractor...";
  storeNumbersArrayEmptyMsg: string = "Must Include A Store Number When Adding New Subcontractor"
  storeAddressSuccessMsg: string = "Store Address Successfully Added";
  storeAddressFailureMsg: string = "Field Must Not Be Empty...";
  storeNumbersFailureMsg: string = "Field Must Not Be Empty..."
  storeNumbersSuccessMsg: string = "Store Number Successfully Added...";
  emailaddressNoInput: string = "Field Must Not Be Empty...";
  //storeAddressSuccessMsg:string="Store Address Added...";




  constructor(private clientservice: ClientService) { }



  ngOnInit() {
  }

  addLocation() {

    this.subcontractor.locations.push(this.locations);

    console.log(this.locations);

  }
  addContractAmt() {

    this.subcontractor.contractamt = this.contractamt;
    console.log(this.subcontractor);

  }
  addContactName() {
    this.subcontractor.contactname = this.contactname;
    console.log(this.subcontractor);
  }

  addContactPhone() {

    this.subcontractor.contactphone = this.contactphone;
    console.log(this.subcontractor);
  }
  addEmailAddress() {

    this.subcontractor.emailaddress = this.emailaddress;
    if (this.emailaddress !== undefined || "") {

      this.subcontractor.name = this.name;

    } else {


      this.emailaddressNotInput = true;
      setTimeout(() => {

        this.emailaddressNotInput = false;

      }, 2000);
    }

    console.log(this.subcontractor);

  }
  addStoreName() {

    // this.subcontractor.storename = this.storename;
    //console.log(this.subcontractor);

  }

  addStoreNumbers() {

  

    if (this.storenumbers !== undefined || "") {

      this.subcontractor.storenumbers.push(this.storenumbers);
      this.addStoreNumbersSuccess = true;
      console.log(this.addStoreNumbersSuccess);

      setTimeout(() => {

        this.addStoreNumbersSuccess = false;

      }, 2000);

    } else {
      console.log('oyyy');

      this.addStoreNumbersFailed = true;
      setTimeout(() => {

        this.addStoreNumbersFailed = false;

      }, 2000);
    }
  }
  addStoreAddress() {

    //this.subcontractor.storeaddress.push(this.storeaddress);
    console.log(this.storeaddress);
    if (this.storeaddress !== undefined || "") {

      this.subcontractor.storeaddress.push(this.storeaddress);
      console.log(this.subcontractor.storeaddress);
      this.addStoreAddressSuccess = true;
      console.log(this.addStoreAddressSuccess);

      setTimeout(() => {

        this.addStoreAddressSuccess = false;

      }, 2000);

    } else {
      console.log('oyyy');

      this.addStoreAddressFailed = true;
      setTimeout(() => {

        this.addStoreAddressFailed = false;

      }, 2000);
    }
    console.log(this.subcontractor);
  }

  addSubcontractor() {
    console.log("addSubcontractorClicked");
    if ((this.subcontractor.storeaddress.length < 1) &&
      (this.subcontractor.storenumbers.length < 1) &&
      (this.name == undefined || "") &&
      (this.contactphone == undefined || "") &&
      (this.contactname == undefined || "") &&
      (this.emailaddress == undefined || "")) {
      console.log("last condition");
      console.log(this.contactphone);
      this.storeAddressArrayEmpty = true;
      this.storeNumbersArrayEmpty = true;
      this.contactNameFieldEmpty = true;
      this.contactPhoneFieldEmpty = true;
      this.emailFieldEmpty = true;
      this.nameFieldEmpty = true
      setTimeout(() => {

        this.storeAddressArrayEmpty = false;
        this.storeNumbersArrayEmpty = false;
        this.contactNameFieldEmpty = false;
        this.contactPhoneFieldEmpty = false;
        this.emailFieldEmpty = false;
        this.nameFieldEmpty = false;

      }, 3000);

    }

    
    if (this.name == undefined || "") {
      console.log("addSubcontractorClicked");


      this.nameFieldEmpty = true;
      setTimeout(() => {

        this.nameFieldEmpty = false;

      }, 3000);

    }
    if (this.contactname == undefined || "") {
      console.log(this.contactname);
      this.contactNameFieldEmpty = true;
      setTimeout(() => {

        this.contactNameFieldEmpty = false;

      }, 3000);

    }
    if (this.contactphone == undefined) {
      console.log(this.contactphone);
      this.contactPhoneFieldEmpty = true;
      setTimeout(() => {

        this.contactPhoneFieldEmpty = false;

      }, 3000);

    }
    if (this.emailaddress == undefined || "") {
      console.log("addSubcontractorClicked");

      this.emailFieldEmpty = true;
      setTimeout(() => {

        this.emailFieldEmpty = false;

      }, 3000);

    }


    if (this.subcontractor.storenumbers.length < 1) {

      this.storeNumbersArrayEmpty = true;
      setTimeout(() => {

        this.storeNumbersArrayEmpty = false;

      },3000);

    }
    if (this.subcontractor.storeaddress.length < 1) {

      this.storeAddressArrayEmpty = true;
      setTimeout(() => {

        this.storeAddressArrayEmpty = false;

      }, 3000);

    } 
    else {
      console.log("not undefined");
      this.subcontractor.name = this.name;
      this.subcontractor.contactname = this.contactname;
      this.subcontractor.contactphone = this.contactphone;
      this.subcontractor.emailaddress = this.emailaddress;
      this.subcontractor.contactname = this.contactname;
      this.clientservice.addSubcontractor(this.subcontractor).subscribe(data => {
        this.name = "";
        this.contactname = "";
        this.contactphone = "";
        this.emailaddress ="";
        this.contactname ="";
        this.storeaddress = "";
        this.storenumbers= "";
        this.subcontractor.storeaddress = [];
        this.subcontractor.storenumbers =[];
        console.log(data);
        if(data.success){

          this.submitSubcontractorSuccess = true;
          setTimeout(()=>{

            this.submitSubcontractorSuccess = false;

          },3000);
          

        }else{

                    this.submitSubcontractorFailed = true;
          setTimeout(()=>{

            this.submitSubcontractorFailed = true;

          },3000);

        }

      })
    }
    //this.clientservice.addSubcontractor(subcontractor).subscribe(data=> {

    //console.log(data);

    //})


  }

}
