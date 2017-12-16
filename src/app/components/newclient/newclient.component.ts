import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {


  client = {

    name: '',
    contactname: "",
    contactphone: 0,
    contactemail: "",
    emailaddress: "",
    phonenumber: 0,
    storeaddresses: [],
    subcontractors: [],
    locations: []

  };

  subContractor = {

    name: "",
    contactname: "",
    contactphone: 0,
    contactemail: "",
    emailaddress: "",
    phonenumber: 0,
    storeaddresses: [],
    storenumbers: [],
    locations: []

  };

  subContractorStoreNumber: string;
  subContractorName: string;
  subContractorContactName: string;
  subContractorContactPhone: any;
  subContractorContactEmail: string;
  subContractorEmailAddress: string;
  subContractorPhoneNumber: any;
  subContractorLocations: string;
  subContractorStoreNumbers: string;

  subCLocations: string;

  storenumber: String;
  subcontractors: String;
  name: string;
  contactname: string;
  contactphone: any;
  contactemail: string;
  emailaddress: string;
  phonenumber: any;
  location: string;


  addNewSubContractor: boolean = false;
  addNameSuccess: boolean = false;
  addNameFailed: boolean = false;
  addContactNameSuccess: boolean = false;
  addContactNameFailed: boolean = false;
  addContactPhoneSuccess: boolean = false;
  addContactPhoneFailed: boolean = false;
  addContactEmailAddressSuccess: boolean = false;
  addContactEmailAddressFailed: boolean = false;
  addEmailAddressSuccess: boolean = false;
  addEmailAddressFailed: boolean = false;
  addPhoneNumberSuccess: boolean = false;
  addPhoneNumberFailed: boolean = false;
  addLocationSuccess: boolean = false;
  addLocationFailed: boolean = false;
  addSubcontractorSuccess: boolean = false;
  addSubcontractorFailed: boolean = false;
  addSubContractorStoreNumbersFailed: boolean = false;
  addSubContractorStoreNumbersSuccess: boolean = false;

  addNameSuccessMsg: string = "Name Successfully Added To the Database";
  addNameFailedMsg: string = "Name Field Must Not Be Empty...";
  addContactNameSuccessMsg: string = "Contact Name Successfully Added To the Database";
  addContactNameFailedMsg: string = "ContactName Field Must Not Be Empty...";
  addContactPhoneSuccessMsg: string = "Contact Phone Successfully Added To the Database";
  addContactPhoneFailedMsg: string = "ContactPhone Field Must Not Be Empty...";
  addContactEmailSuccessMsg: string = "Contact Email Successfully Added To the Database";
  addContactEmailFailedMsg: string = "Contact Email Field Must Not Be Empty...";
  addEmailAddressSuccessMsg: string = "Email Address Successfully Added To the Database";
  addEmailAddressFailedMsg: string = "Email Address Field Must Not Be Empty...";
  addPhoneNumberSuccessMsg: string = "Phone Number Successfully Added To the Database";
  addPhoneNumberFailedMsg: string = "Phone Number Field Must Not Be Empty...";
  addLocationSuccessMsg: string = "Store Location Successfully Loaded";
  addLocationFailedMsg: string = "Store Location Field Must Not Be Empty...";
  addSubcontractorSuccessMsg: string = "Subcontractor Successfully Loaded...";
  addSubcontractorFailedMsg: string = "A Subcontractor Must Be Input...";
  addSubContractorStoreNumbersSuccessMsg: string = "Store Number Successfully Loaded...";
  addSubContractorStoreNumbersFailedMsg: string = "Store Number Field Cannot Be Empty..."


  //location: boolean = false;
  locationNotInput: boolean = false;
  clientAddSuccess: boolean = false;
  clientAddFailed: boolean = false;

  subcontractorAdded: boolean = false;
  subcontractorNotInput: boolean = false;
  subcontractorNameNotInput: boolean = false;


  locationaddedmsg: string = "Location Added";
  locationNoInput: string = "Field must not be empty...";
  subcontractorNoInput: string = "Field must not be empty...";
  subcontractorNameNoInput: string = "Field must not be empty...";
  clientAddSuccessMsg: string = "Client Successfully Added To The Database..";
  clientAddFailedMsg: string = "Client Already Exists In The Database...";




  constructor(private clientservice: ClientService) { }

  ngOnInit() {

    console.log('client service loaded and initialized...');

  }

  openSubContractorInput() {

    if (this.addNewSubContractor == false) {

      this.addNewSubContractor = true;

    } else {
      this.addNewSubContractor = false;
    }

  }

  addSubContractor() {



    //this subContractor = {};
    //console.log(this.subContractor);
    //console.log(this.subContractorLocations);
    console.log(this.subContractorName);
    console.log(this.subCLocations);
    console.log(this.subContractorContactName);
    console.log(this.subContractorContactPhone);
    console.log(this.subContractorContactEmail);
    console.log(this.subContractorPhoneNumber);
    console.log(this.subContractorEmailAddress);
    if (this.subContractorName != undefined || "") {

      this.subContractor.name = this.subContractorName;
      console.log(this.subContractor.name);

    }
    if (this.subContractorEmailAddress != undefined || "") {

      this.subContractor.emailaddress = this.subContractorEmailAddress;

    }
    if (this.subContractorPhoneNumber != undefined || "") {
      this.subContractor.phonenumber = this.subContractorPhoneNumber;


    }
    if (this.subContractorContactName != undefined || "") {

      this.subContractor.contactname = this.subContractorContactName;

    }
    if (this.subContractorContactEmail != undefined || "") {

      this.subContractor.contactemail = this.subContractorContactEmail;

    }
    if (this.subContractorContactPhone != undefined || "") {

      this.subContractor.contactphone = this.subContractorContactPhone;

    }

    if (this.subContractor.storenumbers.length > 0) {


    } else {
      this.addSubContractorStoreNumbersFailed = true;

      setTimeout(() => {

        this.addSubContractorStoreNumbersFailed = false;

      }, 3000);

    }

    if (this.subContractor.locations.length > 0) {



    } else {
      this.addLocationFailed = true;

      setTimeout(() => {

        this.addLocationFailed = false;

      }, 3000);
    }

    if (this.subContractor.locations.length > 0 && this.subContractor.storenumbers.length > 0
        && this.subContractorContactPhone != undefined || ""
        && this.subContractorContactEmail != undefined || ""
        && this.subContractorContactName != undefined || ""
        && this.subContractorPhoneNumber != undefined || ""
        && this.subContractorEmailAddress != undefined || ""
        && this.subContractorName != undefined || "") {
        let copySubContractor={

          name: this.subContractorName,
          contactname: this.subContractorContactName,
          contactphone: this.subContractorContactPhone,
          contactemail: this.subContractorContactEmail,
          emailaddress: this.subContractorEmailAddress,
          phonenumber: this.subContractorPhoneNumber,
          locations: this.subContractor.locations,
          storenumbers: this.subContractor.storenumbers


        }
      console.log(this.subContractor);
      console.log(this.client.subcontractors);
      this.client.subcontractors.push(copySubContractor);
      this.subContractor.locations = [];
      this.subContractor.storenumbers =[];
      console.log(this.client.subcontractors);
      this.addSubcontractorSuccess = true;

      setTimeout(() => {

        this.addSubcontractorSuccess = false;

      }, 3000);

    } else {

      this.addSubcontractorFailed = true;

      setTimeout(() => {

        this.addSubcontractorFailed = false;

      }, 3000);
    }

    // console.log(this.subContractorLocations);
    console.log(this.client);




  }
  addLocation() {
    

    if (this.subCLocations != undefined || "") {

      
      this.subContractor.locations.push(this.subCLocations);
      this.subCLocations ="";
      this.addLocationSuccess = true;

      setTimeout(() => {

        this.addLocationSuccess = false;

      }, 3000);

    } else {


      this.addLocationFailed = true;

      setTimeout(() => {

        this.addLocationFailed = false;

      }, 3000);

    }
    
  }
  addStoreNumber() {
   // this.subContractor.storenumbers = [];

    if (this.subContractorStoreNumbers != undefined || "") {

      this.subContractor.storenumbers.push(this.subContractorStoreNumbers);

      this.addSubContractorStoreNumbersSuccess = true;
      this.subContractorStoreNumbers = "";

      setTimeout(() => {

        this.addSubContractorStoreNumbersSuccess = false;

      }, 3000);

    } else {

      this.addSubContractorStoreNumbersFailed = true;

      setTimeout(() => {

        this.addSubContractorStoreNumbersFailed = false;

      }, 3000);

    }

  }
  /*
  addStoreAddress() {
  
      //this.subcontractor.storeaddress.push(this.storeaddress);
      console.log(this.storeaddress);
      if (this.storeaddress !== undefined || "") {
  
        this.subcontractor.storeaddress.push(this.storeaddress);
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
    */

  addClient() {
    console.log("addSubcontractorClicked");
    console.log(this.contactname);
    console.log(this.contactphone);
    console.log(this.contactemail);
    console.log(this.name);
    console.log(this.phonenumber);
    console.log(this.emailaddress);
    console.log(this.client.subcontractors.length);
    if (
      (this.contactname == undefined || "") &&
      (this.contactphone == undefined || "") &&
      (this.contactemail == undefined || "") &&
      (this.name == undefined || "") &&
      (this.phonenumber == undefined || "") &&
      (this.emailaddress == undefined || "") &&
      (this.client.subcontractors.length < 1)) {
      console.log("last condition");

      //this.storeAddressArrayEmpty = true;
      //this.storeNumbersArrayEmpty = true;

      this.addContactNameFailed = true;
      this.addContactPhoneFailed = true;
      this.addContactEmailAddressFailed = true;
      this.addPhoneNumberFailed = true;
      this.addEmailAddressFailed = true;
      this.addNameFailed = true;
      this.addSubcontractorFailed = true;



      //this.emailFieldEmpty = true;
      //this.nameFieldEmpty = true
      setTimeout(() => {

        this.addContactNameFailed = false;
        this.addContactPhoneFailed = false;
        this.addContactEmailAddressFailed = false;
        this.addPhoneNumberFailed = false;
        this.addEmailAddressFailed = false;
        this.addNameFailed = false;
        this.addSubcontractorFailed = true;

      }, 3000);

    }


    if (this.name == undefined || "") {
      console.log("addSubcontractorClicked");

      this.addNameFailed = true;

      setTimeout(() => {

        this.addNameFailed = false;

      }, 3000);


    }
    if (this.contactname == undefined || "") {
      console.log(this.contactname);

      this.addContactNameFailed = true;

      setTimeout(() => {

        this.addContactNameFailed = false;

      }, 3000);

    }
    if (this.phonenumber == undefined || "") {
      console.log(this.contactname);

      this.addPhoneNumberFailed = true;

      setTimeout(() => {

        this.addPhoneNumberFailed = false;

      }, 3000);

    }
    if (this.emailaddress == undefined || "") {
      console.log(this.contactname);

      this.addEmailAddressFailed = true;

      setTimeout(() => {

        this.addEmailAddressFailed = false;

      }, 3000);

    }
    if (this.contactemail == undefined || "") {

      this.addContactEmailAddressFailed = true;

      setTimeout(() => {

        this.addContactEmailAddressFailed = false;

      }, 3000);

    }
    if (this.contactphone == undefined) {
      console.log(this.contactphone);

      this.addContactPhoneFailed = true;

      setTimeout(() => {

        this.addContactPhoneFailed = false;

      }, 3000);

    }
    if (this.emailaddress == undefined || "") {
      console.log("addSubcontractorClicked");

      this.addEmailAddressFailed = true;

      setTimeout(() => {

        this.addEmailAddressFailed = false;

      }, 3000);

    }


    if (this.client.subcontractors.length < 1) {

      console.log("addSubcontractorFailed");
      this.addSubcontractorFailed = true;

      setTimeout(() => {

        this.addSubcontractorFailed = false;

      }, 3000);

    }
   /* if (this.client.locations.length < 1) {

      this.addLocationFailed = true;

      setTimeout(() => {

        this.addLocationFailed = false;

      }, 3000);

    }*/
    if ((this.client.subcontractors.length < 1)) {

      this.addSubcontractorFailed = true;

      setTimeout(() => {

        this.addSubcontractorFailed = false;

      }, 3000);

    }
    else {
      console.log("not undefined");
      this.client.name = this.name;
      this.client.phonenumber = this.phonenumber;
      this.client.emailaddress = this.emailaddress;
      this.client.contactname = this.contactname;
      this.client.contactphone = this.contactphone;
      this.client.contactemail = this.contactemail;
      this.phonenumber = "";
      this.name = "";
      this.emailaddress = "";
      this.contactname = "";
      this.contactphone = "";
      this.contactemail ="";
      this.subCLocations = "";
      this.subContractorStoreNumbers="";
      this.subContractorContactEmail="";
      this.subContractorContactName="";
      this.subContractorEmailAddress="";
      this.subContractorContactPhone="";
      this.subContractorPhoneNumber = "";
      this.subContractorName="";
     
      






      this.clientservice.addClient(this.client).subscribe(data => {

        console.log(data);
        if (data.success) {

          this.clientAddSuccess = true;
          setTimeout(() => {

            this.clientAddSuccess = false;

          }, 3000);


        } else {

          this.clientAddFailed = true;
          setTimeout(() => {

            this.clientAddFailed = false;

          }, 3000);

        }

      })

    }

  }
  addClient2() {

    if (this.name !== undefined || "") {

      this.client.name = this.name;

    } else {


      this.subcontractorNameNotInput = true;
      setTimeout(() => {

        this.subcontractorNameNotInput = false;

      }, 2000);
    }

    if ((this.name && this.storenumber && this.subcontractors !== undefined || "")
      || this.client.locations.length > 1 || this.client.locations.length > 1) {
      console.log(this.client);

      this.clientservice.addClient(this.client).subscribe(data => {

        console.log(data)
        if (data.success) {
          this.clientAddSuccess = true;

          //this.clientAddSuccessMsg = true;
          setTimeout(() => {
            //this.clientAddSuccessMsg = true;
            //this.clientAddFailure = false;
            this.clientAddSuccess = false;

          }, 3000);

        } else {
          console.log("failure");
          //this.clientAddFailure = true;
          //this.clientAddSuccess = false;
          setTimeout(() => {
            //this.clientAddSuccessMsg = true;
            //this.clientAddFailure = false;
            //this.clientAddSuccess = false;

          }, 3000);



        }

      })


    }

  }
  //this.client.





}
