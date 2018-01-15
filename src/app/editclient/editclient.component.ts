import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Component({
    selector: 'app-editclient',
    templateUrl: './editclient.component.html',
    styleUrls: ['./editclient.component.css']


})
export class EditclientComponent implements OnInit {
    trackByIndex(index: number, obj: any): any { return index; }

    clientsArray: Object[] = [];
    subcontractorsArray = [];
    clientName: string = "";
    clientPhoneNumber: string = "";
    clientEmailAddress: string = "";
    clientContactName: string = "";
    clientContactPhone: string = "";
    clientContactEmail: string = "";
    subContractorName2 = [{ value: "" }];
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
    individualSubContractorIndexVar: string = "";
    individualAddSubContractorIndexVar: string = "";
    subCLocations: string = "";
    subCStoreNumbers: string = "";
    subCLocations2: string = "";
    subCStoreNumbers2:string = "";
    subcontractorLocations2: string[]=[];
    subcontractorStoreNumbers2: string[]=[];
    //subContractorStoreNumbers
    //subContractorStoreNumbers: string = "";
    indexVar: any = 0;
    clientVar: string = "";
    subContractorIdVar:string ="";
    fieldVar: string = "";
    subContractorVar: string = "";
    indexToBeRemoved: string = "";
    editSubContractorIndexVar: string = "";
    addSubContractorIndexVar: string = "";
    date = new Date();
    dateNow = this.date.getDate()
    month = this.date.getMonth() + 1;
    editSubContractorLoading = false;
    loadingClients = false;
    clientNameIsEmpty: boolean = false;
    clientEmailAddressIsEmpty: boolean = false;
    clientPhoneNumberIsEmpty: boolean = false;
    clientContactNameIsEmpty: boolean = false;
    clientContactPhoneIsEmpty: boolean = false;
    clientContactEmailIsEmpty: boolean = false;
    editClientSuccess: boolean = false;
    editClientLoading: boolean = false;
    openEditForm: boolean = false;
    loadingEditIcon: boolean = false;
    openAddSubContractor: boolean = false;
    openIndividualAddSubContractorBoolean: boolean = false;
    openIndividualAddSubContractorToggle: string = "";
    openIndividualSubContractorToggle: string = "";
    openIndividualSubContractorBoolean: boolean = false;
    openEditSubcontractors: boolean = false;
    openAddSubcontractors: boolean = false;
    allSubcontractorConditionsNotMet: boolean = false;
    allSubcontractorConditionsMet: boolean = false;
    addSubcontractorNameConditionsNotMet: boolean = false;
    addSubcontractorEmailAddressConditionsNotMet: boolean = false;
    addSubcontractorPhoneNumberConditionsNotMet: boolean = false;
    addSubcontractorContactEmailConditionsNotMet: boolean = false;
    addSubcontractorContactPhoneConditionsNotMet: boolean = false;
    addSubcontractorContactNameConditionsNotMet: boolean = false;
    addSubcontractorLocationsConditionsNotMet: boolean = false;
    addSubcontractorStoreNumbersConditionsNotMet: boolean = false;
    addSubcontractorStoreNumberConditionsMet: boolean = false;
    addSubcontractorLocationConditionsMet: boolean = false;

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
    addSubContractorSuccess: boolean = false;

    subContractorNameEmpty: boolean = false;
    subContractorEmailAddressEmpty: boolean = false;
    subContractorPhoneNumberEmpty: boolean = false;
    subContractorContactNameEmpty: boolean = false;
    subContractorContactEmailEmpty: boolean = false;
    subContractorContactPhoneEmpty: boolean = false;
    editSubContractorFieldEmpty: boolean = false;
    addSubContractorNameEmpty: boolean = false;
    addSubContractorEmailAddressEmpty: boolean = false;
    addSubContractorPhoneNumberEmpty: boolean = false;
    addSubContractorContactNameEmpty: boolean = false;
    addSubContractorContactPhoneEmpty: boolean = false;
    addSubContractorContactEmailEmpty: boolean = false;
    addSubContractorLocationsEmpty: boolean = false;
    addSubContractorStoreNumbersEmpty: boolean = false;
    addSubContractorLoading: boolean = false;
    editSubContractorSuccess: boolean = false;
    subContractorStoreNumberSuccessfullyRemoved: boolean = false;
    subContractorStoreNumberSuccessfullyAdded: boolean = false;
    subContractorStoreNumberAlreadyEmpty: boolean = false;
    subContractorStoreNumberFieldCannotBeEmpty: boolean = false;
    subContractorLocationFieldCannotBeEmpty: boolean = false;
    subContractorLocationSuccessfullyRemoved: boolean = false;
    subContractorLocationSuccessfullyAdded: boolean = false;
    subContractorLocationsAlreadyEmpty: boolean = false;
    loadingNewSubContractors: boolean = false;
    clientsLoading: boolean = false;
    editFormReady: boolean = false;
    slideOutForm: boolean = false;
    addSubContractorFormReady: boolean = false;
    editSubContractorFormReady: boolean = false;
    eFormReady: boolean = false;
    eScFormReady: boolean = false;
    editSubContractorFieldEmptyMsg: string = "Field Cannot Be Empty...";
    areYouSure: boolean = false;
    returnToClientForm: boolean = false;
    removingSubContractor: boolean = false;
    removalComplete: boolean = false;

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
    addSubcontractorFailedMsg: string = "All Subcontractor Fields Must Be Input...";
    addSubContractorStoreNumbersSuccessMsg: string = "Store Number Successfully Loaded...";
    addSubContractorStoreNumbersFailedMsg: string = "Store Number Field Cannot Be Empty..."


    clientNameIsEmptyMsg: string = "Field Must Not Be Empty...";
    clientPhoneNumberIsEmptyMsg: string = "Field Must Not Be Empty...";
    clientEmailAddressIsEmptyMsg: string = "Field Must Not Be Empty...";
    clientContactNameIsEmptyMsg: string = "Field Must Not Be Empty...";
    clientContactPhoneIsEmptyMsg: string = "Field Must Not Be Empty...";
    clientContactEmailIsEmptyMsg: string = "Field Must Not Be Empty...";
    addSubcontractorNameConditionsNotMetMsg: string = "A Subcontractor Name Must Be Input...";
    addSubcontractorEmailAddressConditionsNotMetMsg: string = "A Subcontractor Email Address Must Be Input..";
    addSubcontractorPhoneNumberConditionsNotMetMsg: string = "A Subcontractor Phone Number Must Be Input...";
    addSubcontractorContactNameConditionsNotMetMsg: string = "A Subcontractor Contact Name Must Be Input...";
    addSubcontractorContactEmailConditionsNotMetMsg: string = "A Subcontractor Contact Email Must Be Input...";
    addSubcontractorContactPhoneConditionsNotMetMsg: string = "A Subcontractor Contact Phone Must Be Input...";
    addSubcontractorStoreNumbersConditionsNotMetMsg: string = "A Store Number Must Be Input And Loaded...";
    addSubcontractorLocationsConditionsNotMetMsg: string = "A Location Must Be Input And Loaded...";
    addSubcontractorStoreNumberConditionsMetMsg: string = "Store Number Successfully Loaded...";

    addSubcontractorLocationConditionsMetMsg: string = "Location Successfully Loaded...";
    allSubcontractorConditionsNotMetMsg: string = "Please Completely Fill In Form...";
    allSubcontractorConditionsMetMsg: string = "Subcontractor Successfully Added...";

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


    constructor(private clientservice: ClientService) { }

    ngOnInit() {

        console.log("getClients");
        console.log(this.openEditForm)
        this.clientsLoading = true;

        //this.openIndividualSubContractor(index);
        this.clientservice.getClients().subscribe(data => {

            console.log(data);
            this.clientsLoading = false;
            this.clientsArray = data.clients;

            console.log("this.clientsArray");
            console.log(this.clientsArray);

            for (let i = 0; i < this.clientsArray.length; i++) {

                this.clientsArray[i][i] = i * 777


            }
            console.log(this.clientsArray);
            for (let i = 0; i < data.clients.length; i++) {

                this.subcontractorsArray[i] = data.clients[i].subcontractors;



            }
            console.log("this.subcontractorsArray");
            console.log(this.subcontractorsArray);
            for (let z = 0; z < this.subcontractorsArray.length; z++) {

                for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                    this.subcontractorsArray[z][d][d] = d * 34567
                console.log(this.subcontractorsArray[z])

            }
        })

    }
    openNextTab(id, input) {
        console.log(input)
        console.log(id)
        document.getElementById(id).click();
        if (input != undefined) {
            setTimeout(() => {

                document.getElementById(input).focus();


            }, 500)

        }

    }
    openEditFormFunc(index) {

        //this.indexVar = index;
        console.log(this.indexVar)
        console.log(index)
        console.log("this.openEditForm")
        console.log(this.openEditForm)
        console.log("this.eFormReady")
        console.log(this.eFormReady)
        console.log("this.addSubContractorFormReady")
        console.log(this.addSubContractorFormReady)
        console.log("this.openAddSubContractor")
        console.log(this.openAddSubContractor)

        if (!this.openEditForm) {
            console.log("firstcondition")
            this.indexVar = index;
            this.openEditForm = true;
            this.eFormReady = true
            this.editFormReady = true;
            setTimeout(() => {
                // document.getElementById('nameform').focus();
                //document.getElementById("clientnametab").click();


            }, 300)

        } else if (this.openEditForm && this.addSubContractorFormReady) {
            console.log("OY")
            //this.openEditForm = true;

            /*setTimeout(() => {
                document.getElementById('nameform').focus();
                document.getElementById("clientnametab").click();

            }, 300)*/
            this.returnToClientForm = false;
            this.addSubContractorFormReady = false;
            setTimeout(() => {

                this.eScFormReady = false;
                this.eFormReady = true
                this.editFormReady = true;
                console.log(this.indexVar)
                console.log("this.openEditForm")
                console.log(this.openEditForm)
                console.log("this.eFormReady")
                console.log(this.eFormReady)
                console.log("this.addSubContractorFormReady")
                console.log(this.addSubContractorFormReady)
                console.log("this.eScFormReady")
                console.log(this.eScFormReady)
                console.log("this.openAddSubContractor")
                console.log(this.openAddSubContractor)


            }, 400)


        } else if (this.openEditForm && this.openEditSubcontractors) {

            //this.openEditForm = true;
            console.log('im here')
            this.returnToClientForm = false

            this.editSubContractorFormReady = false;
            setTimeout(() => {

                this.eScFormReady = false;
                this.openEditSubcontractors = false
                this.eFormReady = true
                this.editFormReady = true;
                setTimeout(() => {
                    // document.getElementById('nameform').focus();
                    // document.getElementById("clientnametab").click();


                }, 300)

            })


        }
        else {
            console.log("final condition")
            if (this.indexVar != index) {

                console.log("no matcho")
                this.eFormReady = true
                // this.slideOutForm = true
                this.openEditForm = true
                // this.openEditSubcontractors = true;
                this.indexVar = index;
            } else {

                this.editFormReady = false;
                this.slideOutForm = true
                setTimeout(() => {

                    this.eFormReady = false;
                    this.openEditForm = false;
                    this.openEditSubcontractors = false;
                    this.slideOutForm = false;

                }, 400)
            }


        }
    }
    editClientFunc(clientparam, name) {
        console.log(clientparam);
        console.log(name);

        let clientToBeEdited = {
            client: clientparam,
            clientname: this.clientName,
            clientphonenumber: this.clientPhoneNumber,
            clientemailaddress: this.clientEmailAddress,
            clientcontactname: this.clientContactName,
            clientContactPhone: this.clientContactPhone,
            clientContactEmail: this.clientContactEmail

        }
        if (this.clientName == "" || undefined) {

            this.clientNameIsEmpty = true;
            setTimeout(() => {

                this.clientNameIsEmpty = false;

            }, 2000)

        } if (this.clientPhoneNumber == "" || undefined) {


            this.clientPhoneNumberIsEmpty = true;
            setTimeout(() => {

                this.clientPhoneNumberIsEmpty = false;

            }, 2000)

        } if (this.clientEmailAddress === "" || undefined) {


            this.clientEmailAddressIsEmpty = true;
            setTimeout(() => {

                this.clientEmailAddressIsEmpty = false;

            }, 2000)
        } if (this.clientContactName == "" || undefined) {


            this.clientContactNameIsEmpty = true;
            setTimeout(() => {

                this.clientContactNameIsEmpty = false;

            }, 2000)
        } if (this.clientContactPhone == "" || undefined) {


            this.clientContactPhoneIsEmpty = true;
            setTimeout(() => {

                this.clientContactPhoneIsEmpty = false;

            }, 2000)
        } if (this.clientContactEmail == "" || undefined) {


            this.clientContactEmailIsEmpty = true;
            setTimeout(() => {

                this.clientContactEmailIsEmpty = false;

            }, 2000)

        }

        if (this.clientContactName !== "" || undefined) {


            this.editClientLoading = true;
            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: "",
                clientphonenumber: "",
                clientemailaddress: "",
                clientcontactname: this.clientContactName,
                clientContactPhone: "",
                clientContactEmail: ""

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;

                        this.editClientSuccess = true;
                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })


        }
        if (this.clientContactEmail !== "" || undefined) {

            this.editClientLoading = true;
            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: "",
                clientphonenumber: "",
                clientemailaddress: "",
                clientcontactname: "",
                clientContactPhone: "",
                clientContactEmail: this.clientContactEmail,

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;

                        this.editClientSuccess = true;
                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })

        }
        if (this.clientContactPhone !== "" || undefined) {

            this.editClientLoading = true;
            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: "",
                clientphonenumber: "",
                clientemailaddress: "",
                clientcontactname: "",
                clientContactPhone: this.clientContactPhone,
                clientContactEmail: ""

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;

                        this.editClientSuccess = true;
                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })
        }
        if (this.clientEmailAddress !== "" || undefined) {

            this.editClientLoading = true;

            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: "",
                clientphonenumber: "",
                clientemailaddress: this.clientEmailAddress,
                clientcontactname: "",
                clientContactPhone: "",
                clientContactEmail: ""

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;

                        this.editClientSuccess = true;
                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })

        }
        if (this.clientPhoneNumber !== "" || undefined) {

            this.editClientLoading = true;

            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: "",
                clientphonenumber: this.clientPhoneNumber,
                clientemailaddress: "",
                clientcontactname: "",
                clientContactPhone: "",
                clientContactEmail: ""

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;

                        this.editClientSuccess = true;
                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })
        }
        if (this.clientName !== "" || undefined) {

            this.editClientLoading = true;

            let clientToBeEdited = {
                name: name,
                client: clientparam,
                clientname: this.clientName,
                clientphonenumber: "",
                clientemailaddress: "",
                clientcontactname: "",
                clientContactPhone: "",
                clientContactEmail: ""

            }
            this.clientservice.editClient(clientToBeEdited).subscribe(data => {


                console.log(data);
                if (data.success) {




                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.clientName = '';
                        this.clientPhoneNumber = '';
                        this.clientEmailAddress = '';
                        this.clientContactName = '';
                        this.clientContactPhone = '';
                        this.clientContactEmail = '';
                        this.editClientLoading = false;
                        this.editClientSuccess = true;


                        setTimeout(() => {

                            this.editClientSuccess = false;

                        }, 2000);

                    })

                }


            })
        }


    }
    openRemoveSubContractorModal(client, index, subcontractor,subcontractorid) {

        this.clientVar = client;
        this.indexToBeRemoved = index;
        this.subContractorVar = subcontractor;
        this.areYouSure = true;
        this.subContractorIdVar = subcontractorid
        //this.removingSubContractor = false;
        document.getElementById("openModalButton").click();


    }
    removeSubContractor() {


        this.areYouSure = false;

        let clientToBeEdited = {

            client: this.clientVar,
            subcontractorid: this.subContractorIdVar,
            index: this.indexToBeRemoved


        }
        console.log(clientToBeEdited)
        this.removingSubContractor = true;
        this.clientservice.editClient3(clientToBeEdited).subscribe(data => {

            if (data.success) {

                //document.getElementById("btnclose").click();
                this.clientservice.removeSubContractor(this.subContractorIdVar).subscribe(data=>{

                    if(data.success){

                        this.removingSubContractor = false;
                this.removalComplete = true;
                setTimeout(() => {

                    this.removalComplete = false;

                    document.getElementById("btnclose").click();
                    this.clientservice.getClients().subscribe(data => {

                        console.log(data.clients)
                        for (let i = 0; i < data.clients.length; i++) {

                            this.subcontractorsArray[i] = data.clients[i].subcontractors;


                        }
                        this.openIndividualAddSubContractorBoolean = false;

                    })







                }, 2000);




                    }


                })

                

            }



            console.log("this.subcontractorsArray");
            console.log(this.subcontractorsArray);


        })

    }

    addLocationToSubcontractorFunc() {
        //let subcontractorLocation = [];
        if (this.subCLocations == "" || undefined) {

            this.addSubcontractorLocationsConditionsNotMet = true;
            setTimeout(() => {

                this.addSubcontractorLocationsConditionsNotMet = false;

            }, 2000);

        } else {
            this.subcontractorLocations.push(this.subCLocations);
            console.log(this.subcontractorLocations.length)
            console.log(this.subcontractorLocations);
            this.subCLocations = "";
            this.addSubcontractorLocationConditionsMet = true;
            setTimeout(() => {

                this.addSubcontractorLocationConditionsMet = false;

            }, 2000);
        }

    }
    permaAddLocationToSubcontractorFunc(index,id,locations,addlocation,client,subcontractorname){

        this.subcontractorLocations2.push(this.subCLocations2);
        console.log(this.subCLocations2)
        console.log(index)
        if(this.subCLocations2 != ""){

            this.editSubContractorLoading= true;
        let subcontractor = {

            index:index,
            id:id,
            subclocations2: this.subCLocations2,
            addlocation: true

        }
        let clientsubcontractor = {

            subcontractorname: subcontractorname,
            client:client,
            subclocations2: this.subCLocations2,
            addlocation:true
        }
        this.clientservice.addLocationToClient(clientsubcontractor).subscribe(data=>{


            if(data.success){

                     this.clientservice.editSubContractorLocation(subcontractor).subscribe(data=>{


                          this.clientservice.getSubContractorsOfClient(client).subscribe(data => {

                            console.log(data)
                            console.log(this.subcontractorsArray[index])
                            console.log(this.subcontractorsArray)
                            console.log(data.subcontractors)
                            this.editSubContractorLoading = false;
                            this.subcontractorsArray[index] = data.subcontractors
                            console.log(this.subcontractorsArray)
                            for(let z=0; z< this.subcontractorsArray[index].length; z++){

                                    this.subcontractorsArray[index][z][z] = z * 3456

                            }
                                                        console.log(this.subcontractorsArray)

                            this.editSubContractorSuccess = true;
                            this.subCLocations2="";
                            setTimeout(function() {
                                this.editSubContractorSuccess = false;
                            }, 2000);

                        })

        })

            }
            
        })
           /*    */


        }else{

            this.subContractorLocationFieldCannotBeEmpty = true;
            setTimeout(()=>{

                this.subContractorLocationFieldCannotBeEmpty = false

            },2000)
        }

    }
       permaAddStoreNumberToSubcontractorFunc(index,id,locations,addlocation,client,subcontractorname){

        this.subcontractorLocations2.push(this.subCLocations2);
        console.log(this.subCLocations2)
        console.log(index)

        if(this.subCStoreNumbers2 != ""){

        this.editSubContractorLoading = true;
                let clientsubcontractor = {

            subcontractorname: subcontractorname,
            client:client,
            subcstorenumbers2: this.subCStoreNumbers2,
            addstorenumber:true
        }

        let subcontractor = {

            index:index,
            id:id,
            subcstorenumbers2: this.subCStoreNumbers2,
            addstorenumber: true

        }
                this.clientservice.addStoreNumberToClient(clientsubcontractor).subscribe(data=>{
console.log(data)
if(data.success){

                this.clientservice.editSubContractorStoreNumber(subcontractor).subscribe(data=>{


                          this.clientservice.getSubContractorsOfClient(client).subscribe(data => {

                            console.log(data)
                            console.log(this.subcontractorsArray[index])
                            console.log(this.subcontractorsArray)
                            console.log(data.subcontractors)
                            this.subCStoreNumbers2 = ""
                            this.editSubContractorLoading = false;
                            
                            this.subcontractorsArray[index] = data.subcontractors
                            console.log(this.subcontractorsArray)
                            for(let z=0; z< this.subcontractorsArray[index].length; z++){

                                    this.subcontractorsArray[index][z][z] = z * 3456

                            }
                                                        console.log(this.subcontractorsArray)
                        this.editSubContractorSuccess = true;
                                                    this.subCStoreNumbers2="";

                        setTimeout(()=>{
                            this.editSubContractorSuccess= false;

                        },2000)
                            

                        })

        })
}

                })



        }else{

            this.subContractorStoreNumberFieldCannotBeEmpty = true;
            setTimeout(()=>{

                this.subContractorStoreNumberFieldCannotBeEmpty = false

            },2000)
        }

    }
        permaRemoveStoreNumberFromSubcontractorFunc(index,id,storenumbers,removelocation,client,subcontractorname){

        console.log(index)
        console.log(id)
       
        console.log(removelocation)
        if(storenumbers.length>0){
            this.editSubContractorLoading = true;
            storenumbers.splice(storenumbers.length-1,1);
                    let subcontractor={

            index:index,
            id:id,
            storenumbers:storenumbers,
            removestorenumber:true

        }
        let clientsubcontractor = {

            subcontractorname: subcontractorname,
            client:client,
            subcstorenumbers2: this.subCStoreNumbers2,
            removestorenumber:true
        }
        this.clientservice.removeStoreNumberFromClient(clientsubcontractor).subscribe(data=>{

            if(data.success){
        this.clientservice.editSubContractorStoreNumber(subcontractor).subscribe(data=>{


            console.log(data)
            this.subCStoreNumbers2 = "";
            this.editSubContractorLoading = false;
            this.editSubContractorSuccess = true;
                this.subCStoreNumbers2="";

            setTimeout(()=>{


                this.editSubContractorSuccess = false;
            },2000)
        })

            }else{

                            storenumbers=[];
                   let subcontractor={

            index:index,
            id:id,
            storenumbers:storenumbers,
            removestorenumber:true

        }
        this.clientservice.editSubContractorStoreNumber(subcontractor).subscribe(data=>{

            console.log(data)
            console.log(data)
            this.subCStoreNumbers2 = "";
            this.editSubContractorLoading = false;
            this.editSubContractorSuccess = true;
                                        this.subCStoreNumbers2="";

            setTimeout(()=>{


                this.editSubContractorSuccess = false;
            },2000)

        })
            }
            
        })


        }else{

            this.subContractorLocationsAlreadyEmpty =true;
            setTimeout(()=>{


                this.subContractorLocationsAlreadyEmpty= false;

            })

        }

    }
    
    permaRemoveLocationFromSubcontractorFunc(index,id,locations,removelocation,client,subcontractorname){

        console.log(index)
        console.log(id)
        console.log(locations)
        console.log(removelocation)
        if(locations.length>0){
            this.editSubContractorLoading = true;
            locations.splice(locations.length-1,1);
                    let subcontractor={

            index:index,
            id:id,
            locations:locations,
            removelocation:true

        }
                let clientsubcontractor = {

            subcontractorname: subcontractorname,
            client:client,
            subcstorenumbers2: this.subCStoreNumbers2,
            removelocation:true
        }
        this.clientservice.removeLocationFromClient(clientsubcontractor).subscribe(data=>{
            if(data.success){

        this.clientservice.editSubContractorLocation(subcontractor).subscribe(data=>{


            console.log(data)
            this.subCLocations2= "";
            this.editSubContractorLoading = false;
            this.editSubContractorSuccess = true;
            setTimeout(()=>{

                this.editSubContractorSuccess= false;
            },2000);

        })

            }else{

            locations=[];
                   let subcontractor={

            index:index,
            id:id,
            locations:locations,
            removelocation:true

        }
        this.clientservice.editSubContractorLocation(subcontractor).subscribe(data=>{

            console.log(data)
        
             console.log(data)
            this.subCStoreNumbers2 = "";
            this.editSubContractorLoading = false;
            this.editSubContractorSuccess = true;
            setTimeout(()=>{


                this.editSubContractorSuccess = false;
            },2000)

        })

            }

        })
        }else{

            this.subContractorLocationsAlreadyEmpty =true;
            setTimeout(()=>{


                this.subContractorLocationsAlreadyEmpty= false;

            })

        }

    }
    removeLocationFromSubcontractorFunc() {

        if (this.subcontractorLocations.length > 0) {

            this.subcontractorLocations.splice(0, 1);


        } else {

            this.subContractorLocationsAlreadyEmpty = true;
            setTimeout(() => {

                this.subContractorLocationsAlreadyEmpty = false;

            }, 2000)

        }

    }
    addStoreNumberToSubcontractorFunc(client, index, storenumbers) {
        //this.subcontractorStoreNumbers = [];
        console.log(storenumbers);
        if (this.subCStoreNumbers == "" || undefined) {

            this.subContractorStoreNumberFieldCannotBeEmpty = true;
            setTimeout(() => {

                this.subContractorStoreNumberFieldCannotBeEmpty = false;

            }, 2000);

        } else {
            this.subcontractorStoreNumbers.push(this.subCStoreNumbers);
            console.log(this.subcontractorStoreNumbers.length)

            //storenumbers.push(this.subcontractorStoreNumber);
            console.log(storenumbers);
            /*let storenumberObject = {

                client: client,
                index: index,
                storenumbers: storenumbers

            }
            this.clientservice.editClientAddStoreNumberToSubContractor(storenumberObject).subscribe(data => {

                console.log(data);
            })

*/



            this.subcontractorStoreNumber = "";
            this.addSubcontractorStoreNumberConditionsMet = true;
            setTimeout(() => {

                this.addSubcontractorStoreNumberConditionsMet = false;

            }, 2000);
        }

        console.log(this.subcontractorStoreNumbers)

    }
    removeStoreNumberFromSubcontractorFunc(client, index, storenumbers) {


        storenumbers.splice(storenumbers.length - 1, 1);
        // storenumbers.push(this.subcontractorStoreNumber);
        console.log(storenumbers);
        if (this.subcontractorStoreNumbers.length > 0) {

            this.subcontractorStoreNumbers.splice(this.subcontractorStoreNumber.length - 1, 1);


        } else {

            this.subContractorLocationsAlreadyEmpty = true;
            setTimeout(() => {

                this.subContractorLocationsAlreadyEmpty = false;

            }, 2000)

        }
    }
    /*
    removeLocation() {


        this.subContractorLocationFieldCannotBeEmpty = false;
        this.subContractorLocationSuccessfullyAdded = false;
        this.subContractorLocationAlreadyEmpty = false;
        if (this.subContractor.locations.length > 0) {

            this.subContractor.locations.splice(this.subContractor.locations.length - 1, 1);
            this.subContractorLocationSuccessfullyRemoved = true;
            setTimeout(() => {

                this.subContractorLocationSuccessfullyRemoved = false;

            }, 2000);

        } else {

            this.subContractorLocationAlreadyEmpty = true;
            setTimeout(() => {

                this.subContractorLocationAlreadyEmpty = false;

            }, 2000);

        }

    }
    */
    /*
    addLocation() {
        this.subContractorLocationFieldCannotBeEmpty = false
        this.subContractorLocationSuccessfullyRemoved = false
        this.subContractorLocationAlreadyEmpty = false;
        console.log(this.subCLocations)
        if (this.subCLocations != "" || this.subContractor.locations.length > 0) {
            console.log(this.subCLocations)

            this.subContractor.locations.push(this.subCLocations);
            this.subcontractorLocations.push(this.subCLocations);
            this.subCLocations = "";



            this.addLocationSuccess = true;
            this.subContractorLocationSuccessfullyAdded = true;

            setTimeout(() => {

                this.addLocationSuccess = false
                this.subContractorLocationSuccessfullyAdded = false;

            }, 3000);

        } else {


            this.addLocationFailed = true;
            this.subContractorLocationSuccessfullyAdded = false
            this.subContractorLocationSuccessfullyRemoved = false;
            this.subContractorLocationFieldCannotBeEmpty = true;

            setTimeout(() => {

                this.addLocationFailed = false;
                this.subContractorLocationFieldCannotBeEmpty = false;
            }, 3000);

        }

    }*/
    /*
    addStoreNumber() {
        // this.subContractor.storenumbers = [];
        this.subContractorLocationFieldCannotBeEmpty = false
        this.subContractorLocationSuccessfullyRemoved = false
        this.subContractorLocationAlreadyEmpty = false;
        if (this.subContractorStoreNumbers != "" || undefined) {

            this.subContractor.storenumbers.push(this.subContractorStoreNumbers);
            this.subcontractorStoreNumbers.push(this.subContractorStoreNumbers);
            console.log(this.subContractor.storenumbers);
            this.addSubContractorStoreNumbersSuccess = true;
            this.subContractorStoreNumberSuccessfullyAdded = true;
            this.subContractorStoreNumbers = "";


            setTimeout(() => {

                this.addSubContractorStoreNumbersSuccess = false;
                this.subContractorStoreNumberSuccessfullyAdded = false;



            }, 3000);

        } else {
            console.log("else");
            this.addSubContractorStoreNumbersFailed = true;
            this.subContractorStoreNumberFieldCannotBeEmpty = true;

            setTimeout(() => {

                this.addSubContractorStoreNumbersFailed = false;
                this.subContractorStoreNumberFieldCannotBeEmpty = false;

            }, 3000);

        }

    }
    */
    addSubcontractor(client) {

        let subcontractor = {
            client: client,
            name: this.subContractorName,
            phonenumber: this.subContractorPhoneNumber,
            emailaddress: this.subContractorEmailAddress,
            contactname: this.subContractorContactName,
            contactemail: this.subContractorContactEmail,
            contactphone: this.subContractorContactPhone,
            storenumbers: this.subcontractorStoreNumbers,
            locations: this.subcontractorLocations,
            date: this.month,
            expjan: 0,
            expfeb: 0,
            expmar: 0,
            expapr: 0,
            expmay: 0,
            expjun: 0,
            expjul: 0,
            expaug: 0,
            expsep: 0,
            expoct: 0,
            expnov: 0,
            expdec: 0,
            expcur: 0,
            topline: [
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 5,
                    "manufacturer": "Topline Sanitation Inc.",
                    "supplier": "topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 0,
                    "description": "Niagara Floor Pad, 20\", Red Buffer",
                    "price": 8.96,
                    "unit": "Ea",
                    "color": "Red",
                    "size": "20\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 1,
                    "manufacturer": "Topline Sanitation Inc.",
                    "supplier": "topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 1,
                    "description": "Safety Zone Powder Free Synthetic Gloves",
                    "price": 9.95,
                    "unit": "Bx",
                    "color": "Blue",
                    "size": "Large"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "manufacturer": "Topline Sanitation Inc.",
                    "supplier": "topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 2,
                    "description": "Goldex Bleach (6%)",
                    "price": 4.95,
                    "unit": "Bx",
                    "color": "N/A",
                    "size": "3.6L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "manufacturer": "Topline Sanitation Inc.",
                    "supplier": "topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 3,
                    "description": "Rayon Narrow Band Cut-End Wet Mop Head",
                    "price": 6.56,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "Large"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "manufacturer": "Topline Sanitation Inc.",
                    "supplier": "topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 4,
                    "description": "Topline Neutra Klean Neutral Floor Soap",
                    "price": 6.56,
                    "unit": "L",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Pur Value",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 5,
                    "description": "Single Fold Hand Towels.",
                    "price": 29.95,
                    "unit": "CS",
                    "color": "Brown",
                    "size": "Large"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Pur Value.",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 6,
                    "description": "Garbage Bags, Regular",
                    "price": 18.95,
                    "unit": "500/CS",
                    "color": "Black",
                    "size": "22\"X24\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Norton.",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 7,
                    "description": "Norton Red Buffer Floor Pad",
                    "price": 5.45,
                    "unit": "EA",
                    "color": "Red",
                    "size": "16\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Febreeze.",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 8,
                    "description": "Air Effects Air Freshener, Spring & Renewal",
                    "price": 4.65,
                    "unit": "Bx",
                    "color": "N/A",
                    "size": "250g"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "TopVac Plus Illuminate",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 9,
                    "description": "UHS Burnishing Floor Finish(20% solids)",
                    "price": 99.95,
                    "unit": "EA",
                    "color": "Blue",
                    "size": "20L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "UltraChemLabs",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 10,
                    "description": "Hard Floor Neurtralizer Acidic Rinse & Residue Remover 4L",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Norton.",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 11,
                    "description": "UHS Burnishing Floor Pad",
                    "price": 10.5,
                    "unit": "EA",
                    "color": "Light Blue",
                    "size": "24\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Classique",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 12,
                    "description": "Deluxe Hardwound Roll Towel",
                    "price": 34.95,
                    "unit": "6/CS",
                    "color": "White",
                    "size": "8\"X800ft"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Classique",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 13,
                    "description": "Minimax Mini JRT Jumbo Bath Tissue, 2Ply",
                    "price": 49.95,
                    "unit": "12/CS",
                    "color": "N/A",
                    "size": "750ft"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Pur Value",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 14,
                    "description": "Garbage Bags, Extra Strong",
                    "price": 24.95,
                    "unit": "100/CS",
                    "color": "Black",
                    "size": "35\"X50\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Safety Zone.",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 15,
                    "description": "Powder Free Synthetic Gloves",
                    "price": 24.95,
                    "unit": "100CS",
                    "color": "Black",
                    "size": "Large"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "AGF 4020",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 16,
                    "description": "Rayon Narrow Band Cut-End Wet Mop Head(bagged)",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "Medium"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "RS",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 17,
                    "description": "Special Degreaser",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 18,
                    "description": "Top Bowl 23% Acid Toilet Bowl Cleaner",
                    "price": 4.95,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "909ML"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "UltraChemLabs",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 19,
                    "description": "Aluminum Mop Handle w/ Quick-Clip Head",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "1.5M"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "TopVac",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 20,
                    "description": "Heavy Duty Degreaser",
                    "price": 19.95,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Niagara",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 21,
                    "description": "Floor Pad (Burnish)",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "Aqua",
                    "size": "27\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Niagara",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 22,
                    "description": "Floor Pad (Buffer)",
                    "price": 4.65,
                    "unit": "EA",
                    "color": "Red",
                    "size": "13\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 23,
                    "description": "Glass Glo RTU Glass Cleaner",
                    "price": 6.99,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 24,
                    "description": "Neutra Klean Neutral Floor Soap",
                    "price": 8.95,
                    "unit": "EA",
                    "color": "Pink/Cherry",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 25,
                    "description": "Hard Floor Neurtralizer Acidic Rinse & Residue Remover 4L",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Lobby",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 26,
                    "description": "Lobby Dustpan w/ Long Handle & Clip (NO BROOM)",
                    "price": 12.95,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "N/A"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Vileda Professional",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 27,
                    "description": "Industrial Curved Block Magnetic Broom",
                    "price": 6.34,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "Large"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Astrolene",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 28,
                    "description": "Slip-On Cut-End Dust Mop Head",
                    "price": 36.84,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "36\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Breakaway",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 29,
                    "description": "Breakaway Dust Mop Frame Only",
                    "price": 4.95,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "36\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Tork",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 30,
                    "description": "Universal JRT Jumbo Bath Tissue 2 Ply",
                    "price": 18.75,
                    "unit": "12/CS",
                    "color": "N/A",
                    "size": "3.5\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Gojo",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 31,
                    "description": "Green Certified Mild Foam Hand Cleaner",
                    "price": 3.75,
                    "unit": "EA",
                    "color": "Clear",
                    "size": "N/A"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Pur Value",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 32,
                    "price": 8.99,
                    "description": "Garbage Bags Regular",
                    "unit": "250/CS",
                    "color": "Black",
                    "size": "26\"X36\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 33,
                    "description": "4\" Floor & Window Scraper",
                    "price": 18.75,
                    "unit": "EA",
                    "color": "Red & Grey",
                    "size": "4\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Topline",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 34,
                    "price": 9.99,
                    "description": "Super Scraper 4\" Replacement Blades",
                    "unit": "10/PKG",
                    "color": "N/A",
                    "size": "4\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Niagara",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 35,
                    "description": "Floor Pad (Buffer)",
                    "price": 8.25,
                    "unit": "EA",
                    "color": "Red",
                    "size": "16\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "topline",
                    "manufacturer": "Niagara",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 36,
                    "description": "Floor Pad (Buffer)",
                    "price": 8.25,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "19\""
                }
            ],
            wesclean: [
                {
                    "ordereddec": 1,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": "R03016100",
                    "description": "25 UHS FINISH",
                    "price": 74.45,
                    "unit": "2/CS",
                    "color": "N/A",
                    "size": "10L"
                },
                {
                    "ordereddec": 5,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 30902,
                    "description": "Burnisher Pad Assist 20\" 34V Batteries, Obc Dust Control",
                    "price": 4515.8,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "20\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 1410070,
                    "description": "Blades Razor SNGL Edge 12120.012IN Single Edge For RS-100/300",
                    "price": 26.19,
                    "unit": "100/PKG",
                    "color": "N/A",
                    "size": "10L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 1410050,
                    "description": "Scraper Razor W/ Plastic Body, Retractable/ w/Single Edge Blade/ Replacement Blade 1212",
                    "price": 2.92,
                    "unit": "2/CS",
                    "color": "N/A",
                    "size": "N/A"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620711,
                    "description": "16\" HI PRO PAD 3M 5/CS",
                    "price": 48.35,
                    "unit": "5/CS",
                    "color": "N/A",
                    "size": "28\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 9890213,
                    "description": "UHS BLUE BLEND PAD 5/CS",
                    "price": 74.45,
                    "unit": "5/CS",
                    "color": "BLUE",
                    "size": "28\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 170032,
                    "description": "GP FORWARD GENERAL PURPPOSE CLEANER 18.9L",
                    "price": 90.87,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "18.9L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 6210100,
                    "description": "CARPET AIR BLOWER 3 SPEED",
                    "price": 349,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "10L"
                },
                {
                    "ordereddec": 1,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": "R0301610",
                    "description": "25 UHS FINISH",
                    "price": 74.45,
                    "unit": "2/CS",
                    "color": "N/A",
                    "size": "10L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": "NIL56315268",
                    "description": "VAC HOSE 1.5",
                    "price": 53.86,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "N/A"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620057,
                    "description": "17IN RED PAD 3M 5/CS",
                    "price": 30.18,
                    "unit": "5/CS",
                    "color": "N/A",
                    "size": "17\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620712,
                    "description": "17IN HI PRO PAD 3M 5/CS",
                    "price": 53.16,
                    "unit": "2/CS",
                    "color": "N/A",
                    "size": "17\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 9620451,
                    "description": "HANDLE BROOM WOOD 60INX15/16 IN THREADED TIP",
                    "price": 3.04,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "60\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 1410191,
                    "description": "BLADES SUPER SCRAPER IN 10/PK FOR 37500",
                    "price": 23.07,
                    "unit": "10/PK",
                    "color": "N/A",
                    "size": "4\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 1410261,
                    "description": "SCRAPER 4\" WITH 5.5\" PLASTIC HANDLE",
                    "price": 11.93,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "4\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620057,
                    "description": "17\" RED PAD 3M",
                    "price": 30.18,
                    "unit": "5/CS",
                    "color": "RED",
                    "size": "17\""
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "DURATHON",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 530035,
                    "description": "DURATHON FLOOR FINISH 9.5L 2/CS",
                    "price": 74.45,
                    "unit": "2/CS",
                    "color": "N/A",
                    "size": "9.5"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620257,
                    "description": "GP FORWARD GENERAL PURPOSE CLEANER 18.9L",
                    "price": 90.87,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "18.9L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "STRIDE",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 170055,
                    "description": "STRIDE FLORAL NEUTRAL ALL PURPOSE CLEANER 18.9L",
                    "price": 35.06,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "10L"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "Infinity",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 9610059,
                    "description": "WAX MOP SILKY NYLON LOOPED END MEDIUM 20OZ",
                    "price": 14.77,
                    "unit": "EA",
                    "color": "N/A",
                    "size": "200OZ"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "wesclean",
                    "manufacturer": "UHS",
                    "instock": 50,
                    "ordered": 0,
                    "orderspending": false,
                    "recieved": 0,
                    "requested": 0,
                    "productcode": 620657,
                    "description": "28\" UHS AQUA PAD 3M",
                    "price": 30.18,
                    "unit": "5/CS",
                    "color": "AQUA",
                    "size": "10L"
                }
            ],
            veritivcanada: [
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "supplier": "veritivcanada",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000046005 3M F-3200 SPEED BURNISHING TOP LINE FLOOR PAD (5/CS)",
                    "productcode": 154126,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "supplier": "veritivcanada",
                    "unit": "CS",
                    "price": 35.24,
                    "size": "21in",
                    "color": "N/A",
                    "description": "7000127868 SKYBLUE HI-PERFORMANCE BURN PAD (5/CS)",
                    "productcode": 154200,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "supplier": "veritivcanada",
                    "price": 29.39,
                    "size": "17in",
                    "color": "Beige",
                    "description": "7000045999 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode": 154341,
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "orderspending": false,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000028442 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 154453,
                    "supplier": "veritivcanada",
                    "orderspending": false,
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "supplier": "veritivcanada",
                    "description": "7000045997 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode": 154456,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "supplier": "veritivcanada",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000120631 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 154459,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000120629 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 154768,
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "orderspending": false,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "supplier": "veritivcanada",
                    "color": "Beige",
                    "description": "7000000675 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode": 154821,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000045882 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 154827,
                    "supplier": "veritivcanada",
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "orderspending": false,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000000678 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode": 154839,
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "orderspending": false,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000000673 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode": 154842,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "supplier": "veritivcanada",
                    "description": "7000000679 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode": 154843,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "supplier": "veritivcanada",
                    "color": "Beige",
                    "description": "7000000674 3M F-5300 CLEANER FLOOR PAD (5/CS)",
                    "productcode": 154855,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000045896 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 154989,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000000681 3M F-5100 BUFFER FLOOR PAD (5/CS)",
                    "productcode": 155278,
                    "requested": 0,
                    "orderspending": false,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "supplier": "veritivcanada",
                    "description": "7000120627 3M F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 155320,
                    "requested": 0,
                    "orderspending": false,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000046001 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode": 156065,
                    "requested": 0,
                    "orderspending": false,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "supplier": "veritivcanada",
                    "description": "7000136427 3M HI PROFILE DOODLEBUG PAD (10/PKG 20/CS)",
                    "productcode": 156104,
                    "requested": 0,
                    "orderspending": false,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000045865 3M F-7300 HIGH PRODUCTIVITY STRIPING FLOOR PAD (5/CS)",
                    "productcode": 156272,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "supplier": "veritivcanada",
                    "price": 45.27,
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000000714 3M F-3300 NATURAL BLEND FLOOR PAD (5/CS)",
                    "productcode": 156278,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000052396 NIAGARA F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 157012,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000052406 NIAGARA F-5100 BUFFING FLOOR PAD (5/CS)",
                    "productcode": 157019,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "supplier": "veritivcanada",
                    "color": "Beige",
                    "description": "7000126177 3M ULTRA HIGH SPEED BUFFER FLOOR PAD (5/CS)",
                    "productcode": 157030,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000029763 NIAGARA F-7200 STRIPPING FLOOR PAD (5/CS)",
                    "productcode": 157037,
                    "requested": 0,
                    "orderspending": false,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000126611 NIAGARA F-3100 BURNISHING FLOOR PAD (5/CS)",
                    "productcode": 157103,
                    "orderspending": false,
                    "requested": 0,
                    "received": 0,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000045998 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode": 157167,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "supplier": "veritivcanada",
                    "color": "Beige",
                    "description": "7000045868 3M F-7300 HIGH PRODUCTIVITY STRIPING FLOOR PAD (5/CS)",
                    "productcode": 157190,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "size": "21in",
                    "supplier": "veritivcanada",
                    "color": "Beige",
                    "description": "7000046002 3M F-5000 PREBURNISHING FLOOR PAD TOPLINE (5/CS)",
                    "productcode": 157310,
                    "requested": 0,
                    "received": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                },
                {
                    "ordereddec": 0,
                    "orderednov": 0,
                    "orderedoct": 0,
                    "orderedsept": 0,
                    "orderedaug": 0,
                    "orderedjul": 0,
                    "orderedjun": 0,
                    "orderedmay": 0,
                    "orderedapr": 0,
                    "orderedmar": 0,
                    "orderedfeb": 0,
                    "orderedjan": 0,
                    "unit": "CS",
                    "price": 45.27,
                    "supplier": "veritivcanada",
                    "size": "21in",
                    "color": "Beige",
                    "description": "7000046005 3M F-3200 SPEED BURNISHING TOP LINE FLOOR PAD (5/CS)",
                    "productcode": 157387,
                    "received": 0,
                    "requested": 0,
                    "orderspending": false,
                    "ordered": 0,
                    "instock": 50,
                    "manufacturer": "3M",
                    "name": "threem"
                }
            ]

        }

        if (this.subContractorPhoneNumber == "" || undefined) {

            this.addSubContractorPhoneNumberEmpty = true;
            setTimeout(() => {

                this.addSubContractorPhoneNumberEmpty = false;

            }, 2000);

        }
        if (this.subContractorName == "" || undefined) {


            this.addSubContractorNameEmpty = true;
            setTimeout(() => {

                this.addSubContractorNameEmpty = false;

            }, 2000);

        }
        if (this.subContractorEmailAddress == "" || undefined) {


            this.addSubContractorEmailAddressEmpty = true;
            setTimeout(() => {

                this.addSubContractorEmailAddressEmpty = false;

            }, 2000);

        }
        if (this.subContractorContactPhone == "" || undefined) {


            this.addSubContractorContactPhoneEmpty = true;
            setTimeout(() => {

                this.addSubContractorContactPhoneEmpty = false;

            }, 2000);

        }
        if (this.subContractorContactName == "" || undefined) {


            this.addSubContractorContactNameEmpty = true;
            setTimeout(() => {

                this.addSubContractorContactNameEmpty = false;

            }, 2000);

        }
        if (this.subContractorContactEmail == "" || undefined) {


            this.addSubContractorContactEmailEmpty = true;
            setTimeout(() => {

                this.addSubContractorContactEmailEmpty = false;

            }, 2000);

        }
        if (this.subcontractorStoreNumbers.length < 1) {
            this.addSubContractorStoreNumbersEmpty = true;
            setTimeout(() => {

                this.addSubContractorStoreNumbersEmpty = false;

            }, 2000);

        }
        if (this.subcontractorLocations.length < 1) {

            this.addSubContractorLocationsEmpty = true;
            setTimeout(() => {

                this.addSubContractorLocationsEmpty = false;

            }, 2000);

        }
        if ((this.subContractorName != "" || undefined) &&
            (this.subContractorPhoneNumber != "" || undefined) &&
            (this.subContractorEmailAddress != "" || undefined) &&
            (this.subContractorContactName != "" || undefined) &&
            (this.subContractorContactEmail != "" || undefined) &&
            (this.subContractorContactPhone != "" || undefined) &&
            (this.subcontractorStoreNumbers.length > 0) &&
            (this.subcontractorLocations.length > 0)
        ) {
            console.log("allconditionsmet");
            this.addSubContractorLoading = true;

            this.clientservice.editClientAddSubcontractor(subcontractor).subscribe(data => {

                console.log(data)
                if (data.success) {
                    this.clientservice.addSubContractor(subcontractor).subscribe(data => {


                        this.subcontractorEmailAddress = "";
                        this.subcontractorContactName = "";
                        this.subcontractorContactEmail = "";
                        this.subcontractorContactPhone = "";
                        this.subcontractorStoreNumbers = [];
                        this.subcontractorLocations = [];
                        this.addSubContractorLoading = false;
                        this.allSubcontractorConditionsMet = true;
                        this.addSubContractorSuccess = true;
                        setTimeout(() => {

                            this.allSubcontractorConditionsMet = false;
                            this.addSubContractorSuccess = false;

                        }, 2000);

                    })


                } else {



                }

            })
        } else {
            console.log("addSubContractorWorking");
            this.allSubcontractorConditionsNotMet = true;
            setTimeout(() => {

                this.allSubcontractorConditionsNotMet = false;

            }, 2000);

        }

        console.log(subcontractor);


    }
    removeStoreNumber2() {

        this.subContractorStoreNumberFieldCannotBeEmpty = false;
        this.subContractorStoreNumberSuccessfullyAdded = false;
        this.subContractorStoreNumberAlreadyEmpty = false;
        if (this.subContractor.storenumbers.length > 0) {
            this.subContractor.storenumbers.splice(this.subcontractorStoreNumbers.length - 1, 1);
            this.subContractorStoreNumberSuccessfullyRemoved = true;
            setTimeout(() => {

                this.subContractorStoreNumberSuccessfullyRemoved = false;

            }, 1000);
            console.log(this.subcontractorStoreNumbers);




        } else {

            this.subContractorStoreNumberAlreadyEmpty = true; setTimeout(() => {

                this.subContractorStoreNumberAlreadyEmpty = false;

            }, 1000);

        }

    }

    openAddSubcontractorsFunc(index) {
        this.addSubContractorIndexVar = index;
        this.returnToClientForm = true;
        console.log(index);
        console.log(this.openAddSubContractor)
        console.log(this.addSubContractorFormReady)
        console.log("this.editFormReady")
        console.log(this.editFormReady)
        if (!this.openAddSubContractor) {

            if (!this.openAddSubContractor && this.openEditSubcontractors) {
                this.editSubContractorFormReady = false
                setTimeout(() => {

                    this.openEditSubcontractors = false;


                    this.eScFormReady = true;
                    this.openAddSubContractor = true;

                    this.openIndividualAddSubContractorBoolean = true;
                    this.addSubContractorFormReady = true;

                }, 400)





            }

            this.editFormReady = false;
            setTimeout(() => {

                this.eFormReady = false;
                this.eScFormReady = true
                this.openAddSubContractor = true;
                this.openIndividualAddSubContractorBoolean = true;
                this.addSubContractorFormReady = true;
                console.log("eFormReady")
                console.log(this.eFormReady)
                console.log("editSubContractorFormReady")
                console.log(this.editSubContractorFormReady)
                console.log(this.addSubContractorFormReady)

                //   document.getElementById("editsubcontractornametab").click();


            }, 400);

            setTimeout(() => {

                document.getElementById("editsubcontractornametab").click();


            }, 700)
        } else if (!this.openAddSubContractor && this.openEditSubcontractors) {


        } else if (this.openAddSubContractor) {

            this.editFormReady = false;
            setTimeout(() => {

                this.eFormReady = false;
                this.eScFormReady = true;
                this.addSubContractorFormReady = true;


            }, 400)
            setTimeout(() => {

                document.getElementById("editsubcontractornametab").click();


            }, 700)


        }
        else {
            //this.editFormReady = false;


            // this.eFormReady = false;
            this.addSubContractorFormReady = false;



            setTimeout(() => {
                this.eScFormReady = false;
                this.openAddSubContractor = false;
                this.openIndividualAddSubContractorBoolean = false;
                this.eFormReady = true;
                this.editFormReady = true;



                console.log("eFormReady")
                console.log(this.eFormReady)
                console.log("editSubContractorFormReady")
                console.log(this.addSubContractorFormReady)
                console.log("this.openAddSubContractor")
                console.log(this.openAddSubContractor)

            }, 400)
            setTimeout(() => {
                document.getElementById('nameform').focus();
                document.getElementById("clientnametab").click();

            }, 700)

        }
        console.log(this.openAddSubContractor)

    }
    openEditSubcontractorsFunc(index, client) {
        this.returnToClientForm = true;
        this.editSubContractorIndexVar = index;
        console.log(index)
        console.log(client)
        console.log(this.editSubContractorIndexVar)
        this.indexVar = index


        this.subContractorName = "";
        this.subContractorEmailAddress = "";
        this.subContractorPhoneNumber = "";
        this.subContractorContactEmail = "";
        this.subContractorContactPhone = "";
        this.subContractorContactName = "";
        this.subCLocations = "";
        this.subCStoreNumbers = "";

        if (!this.openEditSubcontractors) {
            console.log("i'mm here");
            console.log(this.openAddSubContractor)

            setTimeout(() => {


                this.loadingNewSubContractors = true;

                // this.loadingClients = true;


                console.log("add Subcontractors was opened");

                this.clientservice.getClients().subscribe(data => {

                    console.log(data);

                    if (data.success) {
                        console.log

                        console.log(this.editSubContractorFormReady)

                        console.log(this.editSubContractorFormReady)



                        this.clientservice.getSubContractorsOfClient(client).subscribe(data => {

                            console.log(data)
                            console.log(this.subcontractorsArray[index])
                            console.log(this.subcontractorsArray)
                            console.log(data.subcontractors)
                            this.subcontractorsArray[index] = data.subcontractors
                            for (let z = 0; z < this.subcontractorsArray[index].length; z++) {

                                this.subcontractorsArray[index][z][z] = z * 34567

                            }

                        })
                        //MAY NOT NEED THIS HERE..
                        /*
                         this.clientservice.getSubContractors().subscribe(data=>{

                            console.log(data)

                         })
                        */
                        /*
                        for (let i = 0; i < data.clients.length; i++) {

                            this.subcontractorsArray[i] = data.clients[i].subcontractors;
                        }

                        console.log("this.subcontractorsArray");
                        console.log(this.subcontractorsArray);
                        for (let z = 0; z < this.subcontractorsArray.length; z++) {

                            for (let d = 0; d < this.subcontractorsArray[z].length; d++)

                                this.subcontractorsArray[z][d][d] = d * 34567
                            // console.log(this.subcontractorsArray[z])


                            // this.editSubContractorSuccess = true;
                            setTimeout(() => {

                                // this.editSubContractorSuccess = false;
                            }, 2000);



                        }
                        */

                        // this.editFormReady =false;
                        //this.eScFormReady = true;
                        //this.editSubContractorFormReady = true;
                        this.editFormReady = false;
                        this.loadingNewSubContractors = false;
                        this.loadingClients = false;
                        this.addSubContractorFormReady = false;   // CLOSE ADD SUBCONTRACTOR FORM SLIDE AWAY

                        console.log(this.openEditSubcontractors)

                        this.openIndividualAddSubContractorBoolean = true;

                        setTimeout(() => {
                            this.openAddSubContractor = false;      //REMOVE ADD SUBCONTRACTOR FORM FROM DOM...
                            this.eScFormReady = false;

                            this.eFormReady = false;
                            this.openEditSubcontractors = true;
                            this.editSubContractorFormReady = true;
                            console.log("settimeout")

                        }, 1200)

                    }
                })

            }, 800)

        } else if

             (!this.openEditSubcontractors && this.addSubContractorFormReady) {

            console.log("else if ")
            this.addSubContractorFormReady = false
            console.log(this.openEditSubcontractors)
            setTimeout(() => {
                this.eScFormReady = false;
                this.openAddSubContractor = false;
                this.openIndividualAddSubContractorBoolean = false
                this.loadingNewSubContractors = true;
                this.loadingClients = true;

                console.log("add Subcontractors was opened");

                this.editFormReady = false;

                setTimeout(() => {
                    console.log("settimeout")

                    this.eFormReady = false
                    this.openEditSubcontractors = true;

                }, 400)
                //this.openAddSubContractor = false;

            }, 400)

        }
        //this.openEditSubcontractors = true;

        //this.openIndividualSubContractorBoolean = true;

        else if (!this.openEditSubcontractors && this.openAddSubContractor) {

            console.log("ADDSUBCONTRACTORISOPEN")

            //this.openIndividualSubContractorBoolean = false;
        }
        else {
            console.log("last condition")
            this.editSubContractorFormReady = false
            setTimeout(() => {

                // this.editSubContractorFormReady = true;
                //this.eScFormReady = false;
                this.openEditSubcontractors = false;

                this.openIndividualAddSubContractorBoolean = false;
                this.eFormReady = true;
                this.editFormReady = true;


            }, 400)
            setTimeout(() => {
                document.getElementById('nameform').focus();
                document.getElementById("clientnametab").click();


            }, 700)

        }
        console.log(index)
        console.log(this.openEditForm);
        console.log(this.indexVar);
        console.log(this.openEditSubcontractors)
        console.log(this.editSubContractorIndexVar
        )

    }
    editSubContractorFunc(client, item, index, clientindex, field, id) {
        console.log(this.subContractorName2);
        console.log(item);
        console.log(field);
        console.log(id)
        console.log("editSubContractorFunc");
        this.fieldVar = field;

        if (field == "name" && this.subContractorName != "") {

            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: this.subContractorName,
                subContractorPhoneNumber: "",
                subContractorEmailAddress: "",
                subContractorContactName: "",
                subContractorContactPhone: "",
                subContractorContactEmail: ""

            }
            console.log(clientToBeEdited2);
            this.clientservice.editSubContractorById(clientToBeEdited2).subscribe(data => {

                console.log(data)
                if (data.success) {

                    this.clientservice.getSubContractorsOfClient(client).subscribe(data=>{

                        console.log(data)
                    this.editSubContractorLoading = false
                    this.editSubContractorSuccess = true;
                    this.loadingEditIcon = false;
                        
                    setTimeout(() => {


                        //
                        console.log(this.subcontractorsArray)
                        console.log(this.subcontractorsArray[clientindex])
                        console.log(this.subcontractorsArray[clientindex][index])
                        console.log(data.subcontractor)
                        //data.subcontractors[index] = this.subcontractorsArray[clientindex][index]
                        console.log(data.subcontractors);
                                        this.subcontractorsArray[clientindex] = data.subcontractors

                       this.subContractorName = "";
                        this.subContractorEmailAddress = "";
                        this.subContractorPhoneNumber = "";
                        this.subContractorContactEmail = "";
                        this.subContractorContactPhone = "";
                        this.subContractorContactName = "";
                   /*     for (let z = 0; z < this.subcontractorsArray[clientindex].length; z++) {

                            this.subcontractorsArray[clientindex][z] = z * 34567

                        }
*/
                        this.editSubContractorSuccess = false;
                    }, 1500)

                })


                }

            })
           /* this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.editSubContractorSuccess = true;
                        console.log("this.editSubContractorSuccess");
                        console.log(this.editSubContractorSuccess);
                        this.editSubContractorLoading = false;
                        this.loadingEditIcon = false;
                        setTimeout(() => {

                            this.clientsArray = data.clients;
                            this.subContractorName = "";
                            this.subContractorEmailAddress = "";
                            this.subContractorPhoneNumber = "";
                            this.subContractorContactEmail = "";
                            this.subContractorContactPhone = "";
                            this.subContractorContactName = "";

                            for (let i = 0; i < data.clients.length; i++) {

                                this.subcontractorsArray[i] = data.clients[i].subcontractors;



                            }
                            console.log("this.subcontractorsArray");
                            console.log(this.subcontractorsArray);
                            for (let z = 0; z < this.subcontractorsArray.length; z++) {

                                for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                    this.subcontractorsArray[z][d][d] = d * 34567
                                console.log(this.subcontractorsArray[z])

                            }
                            this.editSubContractorSuccess = false;

                        }, 1500);

                    })



                }

            })*/
        } else {

            this.subContractorNameEmpty = true;
            setTimeout(() => {

                this.subContractorNameEmpty = false;

            }, 2000)

        }
        if (field == "emailaddress" && this.subContractorEmailAddress != "") {

            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: "",
                subContractorPhoneNumber: "",
                subContractorEmailAddress: this.subContractorEmailAddress,
                subContractorContactName: "",
                subContractorContactPhone: "",
                subContractorContactEmail: ""

            }
            console.log(clientToBeEdited2);
            this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.editSubContractorSuccess = true;
                        console.log("this.editSubContractorSuccess");
                        console.log(this.editSubContractorSuccess);
                        this.editSubContractorLoading = false;
                        this.loadingEditIcon = false;
                        setTimeout(() => {

                            this.clientsArray = data.clients;
                            this.subContractorName = "";
                            this.subContractorEmailAddress = "";
                            this.subContractorPhoneNumber = "";
                            this.subContractorContactEmail = "";
                            this.subContractorContactPhone = "";
                            this.subContractorContactName = "";

                            for (let i = 0; i < data.clients.length; i++) {

                                this.subcontractorsArray[i] = data.clients[i].subcontractors;



                            }
                            console.log("this.subcontractorsArray");
                            console.log(this.subcontractorsArray);
                            for (let z = 0; z < this.subcontractorsArray.length; z++) {

                                for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                    this.subcontractorsArray[z][d][d] = d * 34567
                                console.log(this.subcontractorsArray[z])

                            }
                            this.editSubContractorSuccess = false;

                        }, 1500);

                    })



                }

            })

        } else {

            this.subContractorEmailAddressEmpty = true;
            setTimeout(() => {

                this.subContractorEmailAddressEmpty = false;

            }, 2000)
        }
        if (field == "phonenumber" && this.subContractorPhoneNumber != "") {

            console.log("phonenumber");
            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: "",
                subContractorPhoneNumber: this.subContractorPhoneNumber,
                subContractorEmailAddress: "",
                subContractorContactName: "",
                subContractorContactPhone: "",
                subContractorContactEmail: ""

            }
            console.log(clientToBeEdited2);

            this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {

                        console.log(data);
                        this.editSubContractorSuccess = true;
                        console.log("this.editSubContractorSuccess");
                        console.log(this.editSubContractorSuccess);
                        this.editSubContractorLoading = false;
                        this.loadingEditIcon = false;
                        setTimeout(() => {

                            this.clientsArray = data.clients;
                            this.subContractorName = "";
                            this.subContractorEmailAddress = "";
                            this.subContractorPhoneNumber = "";
                            this.subContractorContactEmail = "";
                            this.subContractorContactPhone = "";
                            this.subContractorContactName = "";

                            for (let i = 0; i < data.clients.length; i++) {

                                this.subcontractorsArray[i] = data.clients[i].subcontractors;



                            }
                            console.log("this.subcontractorsArray");
                            console.log(this.subcontractorsArray);
                            for (let z = 0; z < this.subcontractorsArray.length; z++) {

                                for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                    this.subcontractorsArray[z][d][d] = d * 34567
                                console.log(this.subcontractorsArray[z])

                            }
                            this.editSubContractorSuccess = false;

                        }, 1500);

                    })



                }

            })
        } else {

            this.subContractorPhoneNumberEmpty = true;
            setTimeout(() => {

                this.subContractorPhoneNumberEmpty = false;

            }, 2000)

        }
        if (field == "contactname" && this.subContractorContactName != "") {

            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: "",
                subContractorPhoneNumber: "",
                subContractorEmailAddress: "",
                subContractorContactName: this.subContractorContactName,
                subContractorContactPhone: "",
                subContractorContactEmail: ""

            }
            console.log(clientToBeEdited2);
            this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {
                        this.editSubContractorSuccess = true;

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.subContractorName = "";
                        this.subContractorEmailAddress = "";
                        this.subContractorPhoneNumber = "";
                        this.subContractorContactEmail = "";
                        this.subContractorContactPhone = "";
                        this.subContractorContactName = "";

                        for (let i = 0; i < data.clients.length; i++) {

                            this.subcontractorsArray[i] = data.clients[i].subcontractors;



                        }
                        console.log("this.subcontractorsArray");
                        console.log(this.subcontractorsArray);
                        for (let z = 0; z < this.subcontractorsArray.length; z++) {

                            for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                this.subcontractorsArray[z][d][d] = d * 34567
                            console.log(this.subcontractorsArray[z])
                            this.editSubContractorSuccess = false;
                        }
                    })
                    this.editSubContractorLoading = false;
                    this.loadingEditIcon = false;

                }

            })

        } else {

            this.subContractorContactNameEmpty = true;
            setTimeout(() => {

                this.subContractorContactNameEmpty = false;

            }, 2000)

        }
        if (field == "contactphone" && this.subContractorContactPhone != "") {

            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: "",
                subContractorPhoneNumber: "",
                subContractorEmailAddress: "",
                subContractorContactName: "",
                subContractorContactPhone: this.subContractorContactPhone,
                subContractorContactEmail: ""

            }
            console.log(clientToBeEdited2);
            this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {
                        this.editSubContractorSuccess = true;

                        console.log(data);
                        this.clientsArray = data.clients;
                        this.subContractorName = "";
                        this.subContractorEmailAddress = "";
                        this.subContractorPhoneNumber = "";
                        this.subContractorContactEmail = "";
                        this.subContractorContactPhone = "";
                        this.subContractorContactName = "";

                        for (let i = 0; i < data.clients.length; i++) {

                            this.subcontractorsArray[i] = data.clients[i].subcontractors;



                        }
                        console.log("this.subcontractorsArray");
                        console.log(this.subcontractorsArray);
                        for (let z = 0; z < this.subcontractorsArray.length; z++) {

                            for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                this.subcontractorsArray[z][d][d] = d * 34567
                            console.log(this.subcontractorsArray[z])
                            this.editSubContractorSuccess = false;

                        }
                    })
                    this.editSubContractorLoading = false;
                    this.loadingEditIcon = false;

                }

            })

        } else {

            this.subContractorContactPhoneEmpty = true;
            setTimeout(() => {

                this.subContractorContactPhoneEmpty = false;

            }, 2000)
        }
        if (field == "contactemail" && this.subContractorContactEmail != "") {
            this.editSubContractorLoading = true;
            this.loadingEditIcon = true;

            let clientToBeEdited2 = {

                client: client,
                item: item,
                index: index,
                id: id,
                subContractorName: "",
                subContractorPhoneNumber: "",
                subContractorEmailAddress: "",
                subContractorContactName: "",
                subContractorContactPhone: "",
                subContractorContactEmail: this.subContractorContactEmail

            }
            console.log(clientToBeEdited2);
            this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {

                if (data.success) {

                    this.clientservice.getClients().subscribe(data => {

                        this.editSubContractorSuccess = true;
                        console.log(data);
                        this.clientsArray = data.clients;
                        this.subContractorName = "";
                        this.subContractorEmailAddress = "";
                        this.subContractorPhoneNumber = "";
                        this.subContractorContactEmail = "";
                        this.subContractorContactPhone = "";
                        this.subContractorContactName = "";

                        for (let i = 0; i < data.clients.length; i++) {

                            this.subcontractorsArray[i] = data.clients[i].subcontractors;



                        }
                        console.log("this.subcontractorsArray");
                        console.log(this.subcontractorsArray);
                        for (let z = 0; z < this.subcontractorsArray.length; z++) {

                            for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                this.subcontractorsArray[z][d][d] = d * 34567
                            console.log(this.subcontractorsArray[z])
                            this.editSubContractorSuccess = false;
                        }
                    })
                    this.editSubContractorLoading = false;
                    this.loadingEditIcon = false;

                }

            })

        } else {

            this.subContractorContactEmailEmpty = true;
            setTimeout(() => {

                this.subContractorContactEmailEmpty = false;

            }, 2000)

        }

        console.log(client);
        console.log(item);
        console.log(index);

        /*
                this.clientservice.editClient2(clientToBeEdited2).subscribe(data => {
        
                    if (data.success) {
        
                        this.clientservice.getClients().subscribe(data => {
        
                            console.log(data);
                            this.clientsArray = data.clients;
                            this.subContractorName = "";
                            this.subContractorEmailAddress = "";
                            this.subContractorPhoneNumber = "";
                            this.subContractorContactEmail = "";
                            this.subContractorContactPhone = "";
                            this.subContractorContactName = "";
        
                            for (let i = 0; i < data.clients.length; i++) {
        
                                this.subcontractorsArray[i] = data.clients[i].subcontractors;
        
        
        
                            }
                            console.log("this.subcontractorsArray");
                            console.log(this.subcontractorsArray);
                            for (let z = 0; z < this.subcontractorsArray.length; z++) {
        
                                for (let d = 0; d < this.subcontractorsArray[z].length; d++)
                                    this.subcontractorsArray[z][d][d] = d * 34567
                                console.log(this.subcontractorsArray[z])
        
                            }
                        })
                        this.editSubContractorLoading = false;
                        this.loadingEditIcon = false;
        
                    }
        
                })*/

    }
    openIndividualAddSubContractor(index) {

        this.individualAddSubContractorIndexVar = index;
        this.openIndividualAddSubContractorBoolean = false;
        if (!this.openIndividualAddSubContractorBoolean) {

            this.openIndividualAddSubContractorBoolean = true;
            this.openIndividualAddSubContractorToggle = index;
            this.individualAddSubContractorIndexVar = index;
        } else if (this.openIndividualAddSubContractorBoolean && this.individualAddSubContractorIndexVar == index) {

            this.openIndividualAddSubContractorBoolean = false;
        } else {
            this.openIndividualAddSubContractorBoolean = false;
            this.openIndividualAddSubContractorBoolean = true;
            this.openIndividualSubContractorToggle = index;
            this.individualAddSubContractorIndexVar = index;
        }

    }
    openIndividualSubContractor(index) {

        console.log(index);
        console.log(this.openEditSubcontractors)
        this.individualSubContractorIndexVar = index;
        this.openIndividualSubContractorToggle = index
        // this.openIndividualSubContractorBoolean = false;

        if (!this.openIndividualSubContractorBoolean) {
            this.openIndividualSubContractorBoolean = true
            this.openEditSubcontractors = true;
            this.openIndividualSubContractorToggle = index;
            this.individualAddSubContractorIndexVar = index;
            console.log("firstCondiaiton")
            console.log(this.openIndividualSubContractorBoolean);

        } else if (this.openIndividualSubContractorBoolean && this.individualAddSubContractorIndexVar == index) {
            this.openIndividualSubContractorBoolean = false;

            //this.openEditSubcontractors = false;
            console.log(this.openEditSubcontractors)
            console.log(this.individualAddSubContractorIndexVar)
            console.log("here i am1");

        } else {
            this.openIndividualSubContractorBoolean = false;

            this.openIndividualSubContractorBoolean = true;
            this.individualAddSubContractorIndexVar = index;
            console.log("lastcondition")
            //this.openIndividualSubContractorToggle = index;
        }

    }
}


