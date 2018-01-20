import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class ClientService {

  client: any;

  constructor(public http: Http, public router: Router, public activatedroute: ActivatedRoute) {

    console.log('client service loaded and initialized...');


  }

 getLocationsOfClient(client){

      let headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.put('routes/getlocationsofclient/'+client,{headers:headers})
    .map(res=>
    
      res.json()
    )

 }
 getSubContractorsOfClient(client){

      let headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.put('http://localhost:3000/routes/getsubcontractorsofclient/'+client,{headers:headers})
    .map(res=>
    
      res.json()
    )

 }
  
  getSubContractors(){

    let headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.get('http://localhost:3000/routes/getsubcontractors',{headers:headers})
    .map(res=>
    
      res.json()
    )

  }
  getSubContractor(name){

    console.log(name)
    let headers = new Headers()
    headers.append('Content-type','application/json')
    return this.http.put('http://localhost:3000/routes/getsubcontractor/'+name, {headers:headers})
    .map(res =>

      res.json()

    )

  }
      editSubContractorStoreNumber(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/routes/editsubcontractorstorenumber',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
    editSubContractorLocation(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/routes/editsubcontractorlocation',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  editSubContractorById(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/routes/editsubcontractorbyid',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  editSubContractor(subcontractor){
    console.log(subcontractor)
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/routes/editsubcontractor',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  addSubContractor(subcontractor){

    console.log(subcontractor)
    let headers = new Headers()
    headers.append('Content-type','application/json')
    return this.http.post('http://localhost:3000/routes/addsubcontractor', subcontractor, {headers:headers})
    .map(res =>

      res.json()

    )

  }
    updateSubContractorInventory(subcontractor){
    console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/updatesubcontractorinventory', subcontractor, { headers: headers })
      .map(res => res.json());



  }
  updateSubContractorTotalExpenditures(subcontractor){

        console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/updatesubcontractortotalexpenditures', subcontractor, { headers: headers })
      .map(res => res.json());




  }
  getClients(){

    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/routes/clients',{headers:headers})
    .map(res => res.json());


  }

  removeLocationFromClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/removelocationfromclient',client,{headers:headers})
    .map(res=> res.json());

  }
  addLocationToClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/addlocationtoclient',client,{headers:headers})
    .map(res=> res.json());

  }
    removeStoreNumberFromClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/removestorenumberfromclient',client,{headers:headers})
    .map(res=> res.json());

  }
    addStoreNumberToClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/addstorenumbertoclient',client,{headers:headers})
    .map(res=> res.json());

  }

    removeSubContractor2(client){

      
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/removesubcontractor2/'+client,{headers:headers})
    .map(res=> res.json());


  }

  removeSubContractor(id){

      console.log(id)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/removesubcontractor/'+id,{headers:headers})
    .map(res=> res.json());


  }

  editClientSubContractorName(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclientsubcontractorname',client,{headers:headers})
    .map(res=> res.json());


  }
  editClient(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclient',client,{headers:headers})
    .map(res=> res.json());

  }
    editClient2(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclient2',client,{headers:headers})
    .map(res=> res.json());

  }
      editClient3(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclient3',client,{headers:headers})
    .map(res=> res.json());

  }
  editClientAddStoreNumberToSubContractor(storenumber){


    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclientaddstorenumbertosubcontractor', storenumber, {headers: headers})
    .map(res=> res.json());
  }
    editClientRemoveStoreNumberOfSubContractor(storenumber){


    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclientremovestorenumberofsubcontractor', storenumber, {headers: headers})
    .map(res=> res.json());
  }
  editClientAddSubcontractor(subcontractor){
    console.log(subcontractor)
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/editclientaddsubcontractor',subcontractor,{headers:headers})
    .map(res=> res.json());

  }
  removeClient(clientname){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/removeclient/'+clientname,{headers:headers})
    .map(res=> res.json());
  }


  addClient(client) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/newclient', client, { headers: headers })
      .map(res => res.json());

  }
   updateSubContractor(subcontractor){
    console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/updatesubcontractor', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  addSubcontractor(subcontractor) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/newsubcontractor', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  getSubcontractor() {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/routes/newsubcontractor', { headers: headers })
      .map(res => res.json());

  }
  /*getSingleSubcontractor(subcontractor){

                  console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/routes/edit/newsubcontractorsingle',subcontractor,{headers:headers})
    .map(res => res.json());


    

  }*/
    getSingleSubcontractorForInventory(subcontractor) {
    console.log(subcontractor+"clientservice");
    console.log(subcontractor);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/getsinglesubcontractoritemforinventory', subcontractor, { headers: headers })
      .map(res => 
       
        res.json());
      

  }
  getSingleClient(client){

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/newclientsingle', client, { headers: headers })
      .map(res => 
       
        res.json());

  }
  getSingleSubcontractor(subcontractor) {
    console.log(subcontractor+"clientservice");
    console.log(subcontractor);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => 
       
        res.json());
      

  }
    increaseSubcontractorStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsinglestorenumber', subcontractor, { headers: headers })
      .map(res => res.json());

  }
   increaseSubcontractorStoreAddress(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsinglestoreaddress', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  updateSubcontractorStoreAddress(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => res.json());

  }

  updateSubcontractor(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractorStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsinglestorenumberupdate', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractorClearStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsingleclearstorenumber', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractor2(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/routes/newsubcontractorsingle2', subcontractor, { headers: headers })
      .map(res => res.json());

  }

  ngOnInit() {



  }

}
