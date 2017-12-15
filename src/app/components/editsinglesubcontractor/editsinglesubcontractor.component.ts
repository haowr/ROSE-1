import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-editsinglesubcontractor',
  templateUrl: './editsinglesubcontractor.component.html',
  styleUrls: ['./editsinglesubcontractor.component.css']
})
export class EditsinglesubcontractorComponent implements OnInit {

  constructor(private clientservice: ClientService, private dataservice: DataService, private activatedroute: ActivatedRoute
    , private router: Router) { }
  location: string;
  //locationObject:object;
  name: string;
  storeaddress: string;
  contactname: any = undefined;;
  contactphone: any = undefined;
  contractamt: number;
  emailaddress: any = undefined;
  storename: string;
  locations: Array<any> = [];
  storenumbers: any  = undefined;


  addStoreAddressSuccess: boolean = false;
  addStoreNumberSuccess: boolean = false;
  addNameSuccess: boolean = false;
  addContactNameSuccess: boolean = false;
  addContactPhoneSuccess: boolean = false;
  addEmailAddressSuccess: boolean = false;
  addStoreAddressFailed: boolean = false;
  removeStoreAddressFailed:boolean = false;
  removeStoreNumberFailed:boolean = false;
  addNameFailed: boolean = false;
  addContactNameFailed: boolean = false;
  addContactPhoneFailed: boolean = false;
  addEmailAddressFailed: boolean = false;
  addStoreNumberFailed: boolean = false;

  storeNumberSuccessMsg: string = "Store Number Successfully Added...";
  removeStoreNumberFailedMsg:string = "All Store Numbers Have Been Already Removed...";
  removeStoreAddressFailedMsg:String = "All Store Addreses Have Been Already Removed...";
  storeNumberFailedMsg: string = "Store Number Field Cannot Be Empty...";
  storeAddressSuccessMsg: string = "Store Address Successfully Added...";
  storeAddressFailureMsg: string = "Store Address Field Cannot Be Empty...";
  nameSuccessMsg: string = "Name Successfully Added...";
  nameFailureMsg: string = "Name Address Field Cannot Be Empty...";
  contactNameSuccessMsg: string = "Contact Name Successfully Added...";
  contactNameFailureMsg: string = "Contact Name Field Cannot Cannot Be Empty...";
  contactPhoneSuccessMsg: string = "Contact Phone Successfully Added...";
  contactPhoneFailureMsg: string = "Contact Phone Field Cannot Be Empty...";
  emailAddressSuccessMsg: string = "Email Address Successfully Added...";
  emailAddressFailureMsg: string = "Email Address Field Cannot Be Empty...";


  locationObject = {

    subcontractor: "",
    client:""

  }

  currentSubcontractor: Array<any> = [];
  singleSubcontractor = {

    name: "",
    locations: [],
    storeaddress: [],
    contactname: "",
    contactphone: 0,
    contractamt: 0,
    emailaddress: "",
    storename: "",

    storenumbers: []

  }

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
  ngOnInit() {

    console.log(this.dataservice.url);
    this.activatedroute.params.subscribe((params: Params) => {

      console.log(params);
      console.log(params.location);
      this.location = params.subcontractor;
      this.locationObject.subcontractor = this.location;
      this.locationObject.client = this.location;

      console.log(params.subcontractor);
      console.log(this.location);

      this.clientservice.getSingleClient(this.locationObject).subscribe(data =>{


        console.log(data);

      })
      this.clientservice.getSingleSubcontractor(this.locationObject).subscribe(data => {

        console.log(data);
        this.currentSubcontractor.push(data.subcontractor);
        console.log(this.currentSubcontractor[0][0]);

      })

      this.clientservice.getSubcontractor().subscribe(data => {
        // this.subcontractorArray = data.subcontractors;

        console.log(data);

      })
    })



  }
  updateSubcontractor() {

    this.singleSubcontractor.name = this.name;

    this.singleSubcontractor.contactname = this.contactname;
    this.singleSubcontractor.contactphone = this.contactphone;
    this.singleSubcontractor.contractamt = this.contractamt;
    this.singleSubcontractor.emailaddress = this.emailaddress;
    console.log(this.singleSubcontractor);





  }
  updateName() {

    const singleSubContractorEdits = {

      name: this.location,
      nameedit: this.name

    }

    // console.log(data);


    if (this.name != undefined) {
      console.log(this.contactname);

      this.clientservice.updateSubcontractor2(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        if (data.success) {
          this.currentSubcontractor[0].name = data.subcontractor.name;
          this.name = undefined;
          this.addNameSuccess = true;
          setTimeout(() => {

            this.addNameSuccess = false;

          }, 2000);
        } else {
          this.addNameFailed = true;
          setTimeout(() => {

            this.addNameSuccess = false;

          }, 2000);
        }


        //this.currentSubcontractor[0]=data.subcontractor;
      })

    } else {

      this.addNameFailed = true;
      setTimeout(() => {


        this.addNameSuccess = false;

      }, 2000);

    }






  }
  updateContactName() {

    const singleSubContractorEdits = {

      name: this.location,
      contactname: this.contactname

    }
    console.log(singleSubContractorEdits);
    if (this.contactname != undefined) {
      console.log(this.contactname);

      this.clientservice.updateSubcontractor2(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        if (data.success) {
          this.currentSubcontractor[0].contactname = data.subcontractor.contactname;
          this.contactname = "";
          this.addContactNameSuccess = true;
          setTimeout(() => {

            this.addContactNameSuccess = false;

          }, 2000);
        } else {
          this.addContactNameFailed = true;
          setTimeout(() => {

            this.addContactNameSuccess = false;

          }, 2000);
        }


        //this.currentSubcontractor[0]=data.subcontractor;
      })

    } else {

      this.addContactNameFailed = true;
      setTimeout(() => {


        this.addContactNameSuccess = false;

      }, 2000);

    }





  }
  updateContactPhone() {

    const singleSubContractorEdits = {

      name: this.location,
      contactphone: this.contactphone

    }


    if (this.contactphone != undefined) {
      console.log(this.contactphone);

      this.clientservice.updateSubcontractor2(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        if (data.success) {
          this.currentSubcontractor[0].contactphone = data.subcontractor.contactphone;
          this.contactphone = "";
          this.addContactPhoneSuccess = true;
          setTimeout(() => {

            this.addContactPhoneSuccess = false;

          }, 2000);
        } else {
          this.addContactPhoneFailed = true;
          setTimeout(() => {

            this.addContactPhoneSuccess = false;

          }, 2000);
        }


        //this.currentSubcontractor[0]=data.subcontractor;
      })

    } else {

      this.addContactPhoneFailed = true;
      setTimeout(() => {


        this.addContactPhoneSuccess = false;

      }, 2000);

    }


  }
  updateContractAmt() {

    const singleSubContractorEdits = {

      name: this.location,
      contractamt: this.contractamt

    }
    this.clientservice.updateSubcontractor2(singleSubContractorEdits).subscribe(data => {


      console.log(data);
      if (data.success) {
        this.addContactNameSuccess = true;
        this.currentSubcontractor[0].contactname = data.subcontractor.contactname;
        this.contactname = "";
        setTimeout(() => {

          this.addContactNameSuccess = false;

        }, 2000);
      } else {
        this.addContactNameFailed = true;
        setTimeout(() => {

          this.addContactNameSuccess = false;

        }, 2000);

      }


      //this.currentSubcontractor[0]=data.subcontractor;
    })




  }
  updateEmailAddress() {

    const singleSubContractorEdits = {

      name: this.location,
      emailaddress: this.emailaddress

    }
    if (this.emailaddress != undefined) {
      console.log(this.contactname);

      this.clientservice.updateSubcontractor2(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        if (data.success) {
          this.currentSubcontractor[0].emailaddress = data.subcontractor.emailaddress;
          this.emailaddress = undefined;
          this.addEmailAddressSuccess = true;
          setTimeout(() => {

            this.addEmailAddressSuccess = false;

          }, 2000);
        } else {

          this.addEmailAddressFailed = true;

          setTimeout(() => {

            this.addEmailAddressFailed = false;

          }, 2000);

        }


        //this.currentSubcontractor[0]=data.subcontractor;
      })

    } else {

      console.log("EmailAddressFaild");
      this.addEmailAddressFailed = true;
      setTimeout(() => {


        this.addEmailAddressFailed = false;

      }, 2000);

    }



  }
  removeStoreAddress() {

    console.log("removeStoreAddress Clicked");
    console.log(this.currentSubcontractor);
    if (this.currentSubcontractor[0][0].storeaddress.length >= 1) {
      console.log("greater than one...");

      this.currentSubcontractor[0][0].storeaddress.splice(0, 1);
      console.log(this.currentSubcontractor[0][0].storeaddress);
      const singleSubContractorEdits = {

        name: this.location,
        newstoreaddress: this.currentSubcontractor[0][0].storeaddress

      }
      this.clientservice.updateSubcontractor(singleSubContractorEdits).subscribe(data => {


        console.log(data);

        this.currentSubcontractor[0][0] = data.subcontractor;
        this.removeStoreAddressFailed= true;
        setTimeout(()=>{

          this.removeStoreAddressFailed = false;

        },2000);

      })

    } 
    else if(this.currentSubcontractor[0][0].storeaddress.length < 1){
      
      console.log("Removal Failed");
      this.removeStoreAddressFailed = true
     setTimeout(()=>{

       this.removeStoreAddressFailed = false;
     },2000);

    }
    else {
      console.log("less than or equal to");

      //this.singleSubcontractor.storeaddress = [];
      const singleSubContractorEdits = {

        name: this.location,
        newstoreaddress: []

      }
      this.clientservice.updateSubcontractor(singleSubContractorEdits).subscribe(data => {


        console.log(data);


        this.currentSubcontractor[0].storeaddress = data.subcontractor.storeaddress;
        this.storeaddress = "";
        console.log(this.storeaddress);
      })

    }
  }
  removeStoreNumber() {

    //console.log("removeStoreAddress Clicked");
    if (this.currentSubcontractor[0][0].storenumbers.length >= 1) {
      console.log("greater than one...");

      this.currentSubcontractor[0][0].storenumbers.splice(0, 1);
      console.log(this.currentSubcontractor[0][0].storenumbers);
      const singleSubContractorEdits = {

        name: this.location,
        newstorenumber: this.currentSubcontractor[0][0].storenumbers

      }
      this.clientservice.updateSubcontractorStoreNumber(singleSubContractorEdits).subscribe(data => {


        console.log(data);

        this.currentSubcontractor[0][0].storenumbers = data.subcontractor.storenumbers;
      })

    }else if(this.currentSubcontractor[0][0].storenumbers.length < 1){

              this.removeStoreNumberFailed = true
     setTimeout(()=>{

       this.removeStoreNumberFailed = false;
     },2000);

    } 
    else {
      console.log("less than or equal to");

      //this.singleSubcontractor.storeaddress = [];
      const singleSubContractorEdits = {

        name: this.location,
        newstorenumber: []

      }
      this.clientservice.updateSubcontractorClearStoreNumber(singleSubContractorEdits).subscribe(data => {


        console.log(data);



        this.currentSubcontractor[0][0].storenumbers = data.subcontractor.storenumbers;
        this.storenumbers = undefined;
      })

    }
  }

  addStoreAddress() {

    //this.subcontractor.storeaddress.push(this.storeaddress);

    if (this.storeaddress !== undefined || "") {
      console.log(this.storeaddress);
      //this.singleSubcontractor.storeaddress.push(this.storeaddress);

      const singleSubContractorEdits = {

        name: this.location,
        newstoreaddress: this.storeaddress

      }
      console.log(singleSubContractorEdits);
      this.clientservice.increaseSubcontractorStoreAddress(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        console.log(data.subcontractor.storeaddress);
        console.log(this.currentSubcontractor[0].storeaddress);

        this.currentSubcontractor[0].storeaddress = data.subcontractor.storeaddress;
        this.storeaddress = "";
        console.log(this.currentSubcontractor);
      })

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
    console.log(this.singleSubcontractor);
  }
  addStoreNumber() {

    //this.subcontractor.storeaddress.push(this.storeaddress);

    if (this.storenumbers !== undefined || "") {
      console.log(this.storenumbers);
      //this.singleSubcontractor.storeaddress.push(this.storeaddress);

      const singleSubContractorEdits = {

        name: this.location,
        newstorenumber: this.storenumbers

      }
      console.log(singleSubContractorEdits);
      this.clientservice.increaseSubcontractorStoreNumber(singleSubContractorEdits).subscribe(data => {


        console.log(data);
        console.log(data.subcontractor.storenumbers);
        console.log(this.currentSubcontractor[0].storenumbers);

        this.currentSubcontractor[0].storenumbers = data.subcontractor.storenumbers;
        this.storenumbers = "";
        console.log(this.currentSubcontractor);
      })

      this.addStoreNumberSuccess = true;
      console.log(this.addStoreNumberSuccess);

      setTimeout(() => {

        this.addStoreNumberSuccess = false;

      }, 2000);

    } else {
      console.log('oyyy');

      this.addStoreNumberFailed = true;
      setTimeout(() => {

        this.addStoreNumberFailed = false;

      }, 2000);
    }
    console.log(this.singleSubcontractor);
  }

}
