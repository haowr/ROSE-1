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

 getSubContractorsOfClient(client){

      let headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.put('routes/getsubcontractorsofclient/'+client,{headers:headers})
    .map(res=>
    
      res.json()
    )

 }
  
  getSubContractors(){

    let headers = new Headers();
    headers.append('Content-type','application/json')
    return this.http.get('routes/getsubcontractors',{headers:headers})
    .map(res=>
    
      res.json()
    )

  }
  getSubContractor(name){

    console.log(name)
    let headers = new Headers()
    headers.append('Content-type','application/json')
    return this.http.put('routes/getsubcontractor/'+name, {headers:headers})
    .map(res =>

      res.json()

    )

  }
      editSubContractorStoreNumber(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('routes/editsubcontractorstorenumber',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
    editSubContractorLocation(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('routes/editsubcontractorlocation',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  editSubContractorById(subcontractor){

    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('routes/editsubcontractorbyid',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  editSubContractor(subcontractor){
    console.log(subcontractor)
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('routes/editsubcontractor',subcontractor,{headers:headers})
    .map(res=>

      res.json()
    )

  }
  addSubContractor(subcontractor){

    console.log(subcontractor)
    let headers = new Headers()
    headers.append('Content-type','application/json')
    return this.http.post('routes/addsubcontractor', subcontractor, {headers:headers})
    .map(res =>

      res.json()

    )

  }
    updateSubContractorInventory(subcontractor){
    console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/updatesubcontractorinventory', subcontractor, { headers: headers })
      .map(res => res.json());



  }
  updateSubContractorTotalExpenditures(subcontractor){

        console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/updatesubcontractortotalexpenditures', subcontractor, { headers: headers })
      .map(res => res.json());




  }
  getClients(){

    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    return this.http.get('routes/clients',{headers:headers})
    .map(res => res.json());


  }

  removeLocationFromClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/removelocationfromclient',client,{headers:headers})
    .map(res=> res.json());

  }
  addLocationToClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/addlocationtoclient',client,{headers:headers})
    .map(res=> res.json());

  }
    removeStoreNumberFromClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/removestorenumberfromclient',client,{headers:headers})
    .map(res=> res.json());

  }
    addStoreNumberToClient(client){

  console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/addstorenumbertoclient',client,{headers:headers})
    .map(res=> res.json());

  }
  removeSubContractor(id){

      console.log(id)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/removesubcontractor/'+id,{headers:headers})
    .map(res=> res.json());


  }
  editClient(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/editclient',client,{headers:headers})
    .map(res=> res.json());

  }
    editClient2(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/editclient2',client,{headers:headers})
    .map(res=> res.json());

  }
      editClient3(client){

    console.log(client)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/editclient3',client,{headers:headers})
    .map(res=> res.json());

  }
  editClientAddStoreNumberToSubContractor(storenumber){


    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/editclientaddstorenumbertosubcontractor', storenumber, {headers: headers})
    .map(res=> res.json());
  }
    editClientRemoveStoreNumberOfSubContractor(storenumber){


    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/editclientremovestorenumberofsubcontractor', storenumber, {headers: headers})
    .map(res=> res.json());
  }
  editClientAddSubcontractor(subcontractor){
    console.log(subcontractor)
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/editclientaddsubcontractor',subcontractor,{headers:headers})
    .map(res=> res.json());

  }
  removeClient(clientname){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/removeclient/'+clientname,{headers:headers})
    .map(res=> res.json());
  }


  addClient(client) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/newclient', client, { headers: headers })
      .map(res => res.json());

  }
   updateSubContractor(subcontractor){
    console.log(subcontractor)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/updatesubcontractor', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  addSubcontractor(subcontractor) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/newsubcontractor', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  getSubcontractor() {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.get('routes/newsubcontractor', { headers: headers })
      .map(res => res.json());

  }
  /*getSingleSubcontractor(subcontractor){

                  console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type','application/json');
    return this.http.post('routes/edit/newsubcontractorsingle',subcontractor,{headers:headers})
    .map(res => res.json());


    

  }*/
    getSingleSubcontractorForInventory(subcontractor) {
    console.log(subcontractor+"clientservice");
    console.log(subcontractor);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/getsinglesubcontractoritemforinventory', subcontractor, { headers: headers })
      .map(res => 
       
        res.json());
      

  }
  getSingleClient(client){

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/newclientsingle', client, { headers: headers })
      .map(res => 
       
        res.json());

  }
  getSingleSubcontractor(subcontractor) {
    console.log(subcontractor+"clientservice");
    console.log(subcontractor);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => 
       
        res.json());
      

  }
    increaseSubcontractorStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsinglestorenumber', subcontractor, { headers: headers })
      .map(res => res.json());

  }
   increaseSubcontractorStoreAddress(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsinglestoreaddress', subcontractor, { headers: headers })
      .map(res => res.json());

  }
  updateSubcontractorStoreAddress(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => res.json());

  }

  updateSubcontractor(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsingle', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractorStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsinglestorenumberupdate', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractorClearStoreNumber(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsingleclearstorenumber', subcontractor, { headers: headers })
      .map(res => res.json());

  }
    updateSubcontractor2(subcontractor) {

    console.log(subcontractor);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.put('routes/newsubcontractorsingle2', subcontractor, { headers: headers })
      .map(res => res.json());

  }

  ngOnInit() {



  }

}
