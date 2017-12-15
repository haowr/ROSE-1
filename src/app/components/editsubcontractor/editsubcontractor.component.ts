import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-editsubcontractor',
  templateUrl: './editsubcontractor.component.html',
  styleUrls: ['./editsubcontractor.component.css']
})
export class EditsubcontractorComponent implements OnInit {



  individualEdit = {

    contactname:"",
    contactphone:0,
    emailaddress:""
  }

  contactname:string;
  contactphone:number;
  emailaddress:string;
  clientsArray:Array<any> = [];

  subcontractorArray:Array<any> = [];
  constructor(private clientservice: ClientService) { }

   submitEdit(edit){

    this.individualEdit.contactname = this.contactname;
    this.individualEdit.contactphone = this.contactphone;
    this.individualEdit.emailaddress = this.emailaddress;
      
    console.log(this.individualEdit);

    }
  ngOnInit() {

    this.clientservice.getClients().subscribe(data=>{

      console.log(data);
      this.clientsArray=data.clients;
      console.log(this.clientsArray);

    })
    this.clientservice.getSubcontractor().subscribe(data=>{
      this.subcontractorArray = data.subcontractors;

      console.log(data);

    })

   
   // this.clientservice.getSingleSubcontractor(this.subcontractorArray).subscribe(data =>{

      //console.log(data);

   // })

  }

}
