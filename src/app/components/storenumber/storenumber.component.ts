import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Routes, ActivatedRoute, Params } from '@angular/router';
import { HttpModule, Http, Headers } from '@angular/http';


@Component({
  selector: 'app-storenumber',
  templateUrl: './storenumber.component.html',
  styleUrls: ['./storenumber.component.css']
})

export class StorenumberComponent implements OnInit {

  location: String;
  inventory: Object[];
  instock: Number;
  productcode: Number;
  
  ordered:Number;
    chartOptions = {
    responsive: true
  };
  chartData: Object[];
  chartLabels: String[];
  numberOrdered: Array<any> =[];
  

   

  onChartClick(event) {
    console.log(event);
  }
  



  constructor(private dataservice: DataService, private activatedroute: ActivatedRoute, private http: Http, private dataservice2: DataService
  ) {


  }



  ngOnInit() {

    //let myChart = document.getElementById('myChart').getContext('2d')

    this.activatedroute.params.subscribe((params: Params) => {
    
      this.location = params.location;
      console.log(this.location);
          this.chartData = [
    { data: [700, 600, 260, 300], label: 154126 },
    { data: [330, 600, 260, 700], label: 154200 },
    { data: [600, 330, 700, 260], label: 154341 },
    
    { data: [400, 600, 260, 700], label: this.location}
    

  ];
  this.chartLabels = ['Jan', 'Feb','Mar','April'];
    });

    this.dataservice.getStoreNumbersFromDatabase().subscribe(storenumbers => {

      console.log(storenumbers.storenumbers);
      //this.subcontractorObject = storenumbers.storenumbers[15];
      //console.log(this.subcontractorObject);
      

    })

    if(this.location ==="Toba Building Maintenance"){
      console.log("I ran!"+ this.location);

      this.dataservice.getTobaSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory
        
      })
    }
          if(this.location ==="Mansheel Janitorial Services"){
      console.log("I ran!");

      this.dataservice.getMansheelSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
this.inventory = inventory.subcontractorinventory;
      })
          }
          if(this.location ==="AAK Building Maintenance"){
      console.log("I ran!");

      this.dataservice.getAAKSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Jossy Quality Cleaning"){
      console.log("I ran!");

      this.dataservice.getJossySubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Super Generator"){
      console.log("I ran!");

      this.dataservice.getSuperGenSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Mayamy Cleaning"){
      console.log("I ran!");

      this.dataservice.getMayamySubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Double H Zerit Inc"){
      console.log("I ran!");

      this.dataservice.getDoubleHSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Gaius Commercial Domestic Cleaners"){
      console.log("I ran!");

      this.dataservice.getGaiusSpruceSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Aredie Cleaning Services LHO"){
      console.log("I ran!");

      this.dataservice.getAredieSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="DMB Solutions"){
      console.log("I ran!");

      this.dataservice.getDMBSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="G Welcome"){
      console.log("I ran!");

      this.dataservice.getGWelcomeSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Safe Building Maintenance"){
      console.log("I ran!");

      this.dataservice.getSafeBuildingSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Mex Cleaning"){
      console.log("I ran!");

      this.dataservice.getMexCleaningSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
this.inventory = inventory.subcontractorinventory;
      })
          }
          if(this.location ==="Crystal Clean Care"){
      console.log("I ran!");

      this.dataservice.getCrystalSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
          }
          if(this.location ==="Delinaget Janitorial Services"){
      console.log("I ran!");

      this.dataservice.getDellnagenetSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        for(var i =0; i<this.inventory.length;i++){

            this.numberOrdered.push(inventory.subcontractorinventory[i].ordered);

        }
                console.log(this.numberOrdered);

      })
          }
          if(this.location ==="1992063 Alberta Ltd."){
      console.log("I ran!");

      this.dataservice.getAlbertaLtdBonnySubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })

    }
    this.dataservice.getInventoryFromDatabase().subscribe(inventory => {

      console.log(inventory.inventory[0].inventory[0].threem);
      //this.inventory = inventory.inventory[0].inventory[0].threem;

    })
    this.dataservice.getInventory().subscribe(inventory => {

      console.log(inventory.inventory);
      //this.inventory = inventory.inventory;

    })
    this.dataservice.getSubContractorInventory().subscribe(subcontractorinventory => {

      console.log(subcontractorinventory);

    })
    //this.increaseInventory(instock){





  }

  private increaseInventory(instock, productcode) {

    console.log(instock);
    console.log(productcode);
    let productcodeObject = {

      productcode: productcode

    }
    this.productcode = productcode;
        if(this.location ==="Toba Building Maintenance"){
      console.log("I ran "+this.location);

 
      this.dataservice.increaseinventoryItem(productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getTobaSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
      
    }
          if(this.location ==="Mansheel Janitorial Services"){
      console.log("I ran!");

      this.dataservice.increaseMansheelItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMansheelSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
      
          }
          if(this.location ==="AAK Building Maintenance"){
      console.log("I ran!");
      this.dataservice.increaseAAKItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAAKSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Jossy Quality Cleaning"){
      console.log("I ran!");

      this.dataservice.increaseJossyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getJossySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Super Generator"){
      console.log("I ran!");

      this.dataservice.increaseSuperGenItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getSuperGenSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Mayamy Cleaning"){
      console.log("I ran!");

      this.dataservice.increaseMayamyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMayamySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Double H Zerit Inc"){
      console.log("I ran!");

      this.dataservice.increaseDoubleHItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDoubleHSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Gaius Commercial Domestic Cleaners"){
      console.log("I ran!");
      this.dataservice.increaseGaiusRockyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getGaiusRockySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Aredie Cleaning Services LHO"){
      console.log("I ran!");
      this.dataservice.increaseAredieItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAredieSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="DMB Solutions"){
      console.log("I ran!");

      this.dataservice.increaseDMBItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDMBSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="G Welcome"){
      console.log("I ran!");
      this.dataservice.increaseGWelcomeItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getGWelcomeSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Safe Building Maintenance"){
      console.log("I ran!");

       this.dataservice.increaseSafeBuildingItemInInventory
       (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getSafeBuildingSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Mex Cleaning"){
      console.log("I ran!");

      this.dataservice.increaseMexCleaningItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMexCleaningSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Crystal Clean Care"){
      console.log("I ran!");

      this.dataservice.increaseCrystalItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getCrystalSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Delinaget Janitorial Services"){
      console.log("I ran!");

      this.dataservice.increaseDellnagenetItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDellnagenetSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="1992063 Alberta Ltd."){
      console.log("I ran!");

      this.dataservice.increaseAlbertaLtdBonnyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAlbertaLtdBonnySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }

          
    /*this.dataservice.increaseItemInInventory(productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);

    })*/

    //this.dataservice.getSubContractorInventory().subscribe(subcontractorinventory => {

     // console.log(subcontractorinventory);

    //})

    //this.dataservice.getInventory().subscribe(inventory => {

     // console.log(inventory.inventory);
      //this.inventory = inventory.inventory;

    //})


    /*this.dataservice.increaseItemInInventory().subscribe(inventoryitem => {


      console.log(inventoryitem);

    })*/
    //console.log(productcode);
    //this.productcode = productcode;
    //this.instock = instock;

    /* let headers = new Headers();
 headers.append('Content-Type', 'application/json');

 //let url = `${this.heroesUrl}/${hero.id}`;

 return this.http
            .put('http://localhost:3000/routes/storenumbers', productcode, {headers: headers})
            .map(res => res.json());
   this.dataservice.increaseItemInInventory().subscribe(inventoryitem => {


     console.log(inventoryitem);

   })

   /*
   let headers = new Headers();
   headers.append('Content-type', 'application/json');
   return this.http.put('http://localhost:3000/routes/inventory/', this.productcode, { headers: headers })
     .map(res =>

       res.json());

 }*/

  }

private decreaseInventory(instock, productcode) {

    console.log(instock);
    console.log(productcode);
    let productcodeObject = {

      productcode: productcode

    }
    this.productcode = productcode;
        if(this.location ==="Toba Building Maintenance"){
      console.log("I ran "+this.location);

 
      this.dataservice.decreaseTobaInventoryItem
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getTobaSubContractorInventory().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
      
    }
          if(this.location ==="Mansheel Janitorial Services"){
      console.log("I ran!");

      this.dataservice.decreaseMansheelItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMansheelSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
      
          }
          if(this.location ==="AAK Building Maintenance"){
      console.log("I ran!");
      this.dataservice.decreaseAAKItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAAKSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Jossy Quality Cleaning"){
      console.log("I ran!");

      this.dataservice.decreaseJossyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getJossySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Super Generator"){
      console.log("I ran!");

      this.dataservice.decreaseSuperGenItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getSuperGenSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Mayamy Cleaning"){
      console.log("I ran!");

      this.dataservice.decreaseMayamyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMayamySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Double H Zerit Inc"){
      console.log("I ran!");

      this.dataservice.decreaseDoubleHItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDoubleHSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Gaius Commercial Domestic Cleaners"){
      console.log("I ran!");
      this.dataservice.decreaseGaiusRockyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getGaiusRockySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Aredie Cleaning Services LHO"){
      console.log("I ran!");
      this.dataservice.decreaseAredieItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAredieSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="DMB Solutions"){
      console.log("I ran!");

      this.dataservice.decreaseDMBItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDMBSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="G Welcome"){
      console.log("I ran!");
      this.dataservice.decreaseGWelcomeItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getGWelcomeSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Safe Building Maintenance"){
      console.log("I ran!");

       this.dataservice.decreaseSafeBuildingItemInInventory
       (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getSafeBuildingSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Mex Cleaning"){
      console.log("I ran!");

      this.dataservice.decreaseMexCleaningItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getMexCleaningSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Crystal Clean Care"){
      console.log("I ran!");

      this.dataservice.decreaseCrystalItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getCrystalSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="Delinaget Janitorial Services"){
      console.log("I ran!");

      this.dataservice.decreaseDellnagenetItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getDellnagenetSubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }
          if(this.location ==="1992063 Alberta Ltd."){
      console.log("I ran!");

      this.dataservice.decreaseAlbertaLtdBonnyItemInInventory
      (productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);
            this.dataservice.getAlbertaLtdBonnySubContractorInventory
            ().subscribe(inventory =>{
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })   
    })
          }

}}
