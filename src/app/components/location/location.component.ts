import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { HttpModule, Http, Headers } from '@angular/http';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  //UPDATE SUBCONTRACTOR CHART MANUALLY
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

 
 
  
  //BOOLEANS

  wescleanInventory2: boolean = false;
  toplineInventory2: boolean = true;
  veritivInventory2: boolean = false;
  expenditureLoaded: boolean = false;
  expenditureLoading:boolean = false;

  //STRING VARIABLES

  location: string;
  client: string;
  url: string;
  monthName: string;
  previousMonth: string;
  date = new Date();
  dateNow = this.date.getDate()
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  
  //NUMERIC VARIABLES

  totalCostThisMonth: number;
  productcode: number;
  ordered: number;
  curexp: number = 0;
  expjan: number = 0;
  expfeb: number = 0;
  expmar: number = 0;
  expapr: number = 0;
  expmay: number = 0;
  expjun: number = 0;
  expjul: number = 0;
  expaug: number = 0;
  expsept: number = 0;
  expoct: number = 0;
  expnov: number = 0;
  expdec: number = 0;

//OBJECTS

 chartOptions = {
    responsive: true
  };
  
  subcontractorObject = {

    name: "",
    contactname: "",
    contactphone: "",
    emailaddress: ""

  }
  
  //ARRAYS

  toplineInventoryArray: any = [];
  wescleanInventoryArray: any = [];
  arrayOfSubContractors: any = [];
  singleClientArray: any = [];
  singleSubContractorsArray: any = [];
  toplineArray: any = [];
  storenumberArray: string[];
  chartLabels: String[];
  singleSubcontractorArray: object = [];
  subcontractorArray: Object[];
  chartData: Object[];
  locationObject: Object[];
  inventory: any = [];
  

 



  

  constructor(private clientservice: ClientService, private router: Router, private dataservice: DataService, private activatedroute: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.ordered);
    console.log(this.month);
            this.chartData = [

      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }
    

    ];
    
    this.chartLabels = ['Current', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    this.activatedroute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(this.router.url);
      console.log(this.router.url.slice(17, this.router.url.length));
      this.location = this.router.url.slice(17, this.router.url.length);
      this.client = params.client;
      console.log(this.location);
   
      if (this.month == 1) {

        this.monthName = "January";
        this.previousMonth = "December";
      }
      if (this.month == 2) {

        this.monthName = "February";
        this.previousMonth = "January";
      }
      if (this.month == 3) {
        this.monthName = "March";
        this.previousMonth = "February";

      }
      if (this.month == 4) {
        this.previousMonth = "March";
        this.monthName = "April";
      }
      if (this.month == 5) {
        this.previousMonth = "April";
        this.monthName = "May";
      }
      if (this.month == 6) {
        this.previousMonth = "May";
        this.monthName = "June";

      }
      if (this.month == 7) {
        this.previousMonth = "June";
        this.monthName = "July";

      }
      if (this.month == 8) {
        this.previousMonth = "July";

        this.monthName = "August";
      }
      if (this.month == 9) {
        this.previousMonth = "August";
        this.monthName = "September";

      }
      if (this.month == 10) {
        this.previousMonth = "September";

        this.monthName = "October";
      }
      if (this.month == 11) {
        this.monthName = "November";
        this.previousMonth = "October";
      }
      if (this.month == 12) {
        this.monthName = "December";
        this.previousMonth = "November";

      }
           this.clientservice.getSubContractor(this.location).subscribe(data=>{
        
        console.log(data.subcontractor);
        this.singleSubContractorsArray.push(data.subcontractor)
        
        this.toplineInventoryArray = data.subcontractor.topline
        this.wescleanInventoryArray = data.subcontractor.wesclean
        this.inventory = data.subcontractor.veritivcanada
        console.log(this.inventory)

        this.curexp = data.subcontractor.expcur,
        this.expjan = data.subcontractor.expjan
        this.expfeb = data.subcontractor.expfeb
        this.expmar = data.subcontractor.expmar
        this.expapr = data.subcontractor.expapr
        this.expmay = data.subcontractor.expmay
        this.expjun = data.subcontractor.expjun
        this.expjul = data.subcontractor.expjul
        this.expaug = data.subcontractor.expaug
        this.expsept = data.subcontractor.expsep
        this.expoct = data.subcontractor.expoct
        this.expnov = data.subcontractor.expnov
        this.expdec = data.subcontractor.expdec

        if(data.subcontractor.date == this.month){

          console.log("Inventory Still In Service")
          console.log(this.totalCostThisMonth)

        }else{

          let subContractorToBeUpdated={

            name: "",
            month:0,
            date: 0,
            oldordered:0,
            topline: [],
            veritivcanada:[],
            wesclean:[]

          }
          console.log("Inventory Is Out Of Date")
          if(this.month == 1){
            //data.subcontractor.ordereddec = data.subcontractor.ordered;
            console.log(this.curexp);
            data.subcontractor.date = 1
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = this.curexp;
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada
            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })

          }
          if(this.month == 2){
            console.log(this.curexp)
        console.log("this.curexp")

            data.subcontractor.orderedjan = data.subcontractor.ordered;
            data.subcontractor.date = 2
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = this.curexp;
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada
            //this.clientservice.updateSubContractor                
            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }
          if(this.month == 3){
            data.subcontractor.orderedfeb = data.subcontractor.ordered;
            data.subcontractor.date =3;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }
          if(this.month == 4){
            data.subcontractor.orderedmar = data.subcontractor.ordered;
            data.subcontractor.date = 4;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }
          if(this.month == 5){
            data.subcontractor.orderedapr = data.subcontractor.ordered;
            data.subcontractor.date = 5;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }
          if(this.month == 6){
            data.subcontractor.orderedmay = data.subcontractor.ordered;
            data.subcontractor.date = 6;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
            data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
          }
          if(this.month == 7){

            data.subcontractor.orderedjun = data.subcontractor.ordered;
            data.subcontactor.date = 7;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })            
          }
          if(this.month == 8){

            data.subcontractor.orderedjul = data.subcontractor.ordered;
            data.subcotractor.date = 8;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })            
          }
          if(this.month == 9){
            
            data.subcontractor.orderedaug = data.subcontractor.ordered;
            data.subcontractor.date = 9;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }
          if(this.month == 10){

            data.subcontractor.orderedsept = data.subcontractor.ordered
            data.subcontractor.date = 10;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })            
          }
          if(this.month == 11){

            data.subcontractor.orderedoct = data.subcontractor.ordered;
            data.subcontractor.date = 11;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })            
          }
          if(this.month == 12){

            data.subcontractor.orderednov = data.subcontractor.ordered;
            data.subcontractor.date = 12;
            subContractorToBeUpdated.name = data.subcontractor.name
            subContractorToBeUpdated.month = this.month
            subContractorToBeUpdated.date = data.subcontractor.date
            subContractorToBeUpdated.oldordered = data.subcontractor.ordered
                        data.subcontractor.topline.ordereddec = this.curexp;
            data.subcontractor.wesclean.ordereddec = this.curexp;
            data.subcontractor.veritivcanada.orderedec = this.curexp;
            subContractorToBeUpdated.topline = data.subcontractor.topline
            subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
            subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

            this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            })
            
          }

        }
        const expendituresArray = [



        ]
        for(let z = 0; z< this.toplineInventoryArray.length; z++){
            
            expendituresArray.push(Number(this.toplineInventoryArray[z].ordered * this.toplineInventoryArray[z].price))
            console.log(expendituresArray)
            
      }

      for(let z = 0; z< this.inventory.length; z++){

         expendituresArray.push(Number(this.inventory[z].ordered * this.inventory[z].price) )
          
        }
        for(let z = 0; z< this.wescleanInventoryArray.length; z++){

          console.log(this.wescleanInventoryArray[z].ordered)
          expendituresArray.push(Number(this.wescleanInventoryArray[z].ordered * this.wescleanInventoryArray[z].price));
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue
        this.totalCostThisMonth = expendituresArray.reduce(reducer);

        let totalExpenditureUpdater={

          name: this.location,
          totalexpenditures: this.totalCostThisMonth

        }
        this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

          console.log(data)

        })
        console.log(this.totalCostThisMonth)
        this.curexp = this.totalCostThisMonth
            this.chartData = [

      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }
    

    ];
    
    this.chartLabels = ['Current', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    })
   

    });

    console.log(this.url);

    this.activatedroute.params.subscribe((params: Params) => {

      console.log(params);
      console.log(params.location);
      this.location = params.location;
      this.client = params.client;

    })


    console.log("HELLO!")
    let locationObject = {

      subcontractor: this.location

    }
    /* this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {
 
       console.log(subcontractor.subcontractor[0]);
       console.log(subcontractor.subcontractor[0].veritivcanada);
       this.subcontractorObject = subcontractor.subcontractor[0];
       //this.inventory = subcontractor.subcontractor[0].veritivcanada;
 
 
     })*/


  }
  practiceIncreaseToplineInventory(supplier, price, productcode, index) {


    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    
    this.expenditureLoading = true;

        for(let z =0; z< this.toplineInventoryArray.length; z++){


        if(this.toplineInventoryArray[z].productcode == productcode){
          //console.log(this.inventory[z])
            this.toplineInventoryArray[z].ordered = this.toplineInventoryArray[z].ordered + 1;
           // console.log(this.inventory[z])
            let subcontractor = {

              name: this.location,
              topline: this.toplineInventoryArray,
              inventory: "topline"

            }
                        this.totalCostThisMonth = this.totalCostThisMonth + price;
            let totalExpenditureUpdater = {
              name : this.location,
              totalexpenditures: this.totalCostThisMonth

            }
            this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

              console.log(data)
              this.expenditureLoading = false;
              this.totalCostThisMonth = data.subcontractor.totalexpenditures;

            })

            this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

              console.log(data);
              this.totalCostThisMonth = data.subcontractor.totalexpenditures;
              this.toplineInventoryArray = data.subcontractor.topline;


            })

        }

    }
   /* this.expenditureLoaded = true;

    setTimeout(() => {
      this.curexp = 0;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.totalCostThisMonth = Number(price) + this.totalCostThisMonth;
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;
    }, 2000);
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        console.log(this.location);
        console.log(this.singleSubContractorsArray[z].topline);
        for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
          console.log(d);
          // console.log(console.log(this.singleSubContractorsArray[z].topline[d].productcode));

          if (this.singleSubContractorsArray[z].topline[d].productcode == productcode) {

            console.log(this.singleSubContractorsArray[z].topline[d]);
            this.singleSubContractorsArray[z].topline[d].ordered = this.singleSubContractorsArray[z].topline[d].ordered + 1;
            console.log(this.singleSubContractorsArray[z].topline[d].ordered);
          }

        }
      }


    }*/
    /*
        for (let i = 0; i < this.singleSubContractorsArray[0].topline.length; i++) {
    
    
    
          if (this.singleSubContractorsArray[0].topline[i].productcode == productcode) {
    
            console.log("TOPLINEITEMPRODUCTCODEMATCH!")
            console.log(this.singleSubContractorsArray[0].topline[i]);
            console.log(this.singleSubContractorsArray[0].topline[i].ordered)
            this.singleSubContractorsArray[0].topline[i].ordered = this.singleSubContractorsArray[0].topline[i].ordered + 1;
            console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
            console.log(this.singleSubContractorsArray[0].topline[i].ordered);
            console.log('SINGLESUBCONTRACTORSARRAY0')
            console.log(this.singleSubContractorsArray[0]);
            console.log('SINGLESUBCONTRACTORSARRAY')
            console.log(this.singleSubContractorsArray);
    
          }
    
        }
    
    */

/*
    this.dataservice.increaseItemInToplineInventory(productToBeModified)
      .subscribe(data => {
        console.log("DATA!");
        console.log(data);
        let totalCostThisMonthArray = [];
        for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
          console.log(z)


          //this.singleSubContractorsArray[z].topline[32].price = 9.99;
          //this.singleSubContractorsArray[z].topline[34].price = 9.99;
          if (this.singleSubContractorsArray[z].name == this.location) {

            for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
              console.log(d)
              totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



            }
            for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
              console.log(d)
              totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



            }
            for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
              console.log(d)
              totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



            }
            console.log(totalCostThisMonthArray);
          }

          if (totalCostThisMonthArray.length > 0) {
            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
            // this.expenditureLoaded = false;
            console.log(this.totalCostThisMonth);

          }


          this.curexp = this.totalCostThisMonth;
          this.chartData = [

            { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


          ];
          // this.expenditureLoaded = false;
          console.log(this.totalCostThisMonth);


        }
      });
*/
  }
  decreaseVeritivCanadaInventory(ordered,supplier, price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }

    this.expenditureLoaded = true;

    setTimeout(() => {
      if(ordered > 0){
      this.totalCostThisMonth = this.totalCostThisMonth - Number(price);
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;

      }else {
        this.expenditureLoaded = false;
      }

    }, 2000);
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        console.log(this.location);
        console.log(this.singleSubContractorsArray[z].veritivcanada);
        for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
          console.log(d);
          // console.log(console.log(this.singleSubContractorsArray[z].topline[d].productcode));

          if (this.singleSubContractorsArray[z].veritivcanada[d].productcode == productcode) {

            console.log(this.singleSubContractorsArray[z].veritivcanada[d]);
            if (this.singleSubContractorsArray[z].veritivcanada[d].ordered > 0) {

              this.singleSubContractorsArray[z].veritivcanada[d].ordered = this.singleSubContractorsArray[z].veritivcanada[d].ordered - 1;
              console.log(this.singleSubContractorsArray[z].veritivcanada[d].ordered);
              this.dataservice.increaseItemInWescleanInventory(productToBeModified)
                .subscribe(data => {
                  console.log("DATA!");
                  console.log(data);
                  let totalCostThisMonthArray = [];
                  for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                    console.log(z)


                    this.singleSubContractorsArray[z].topline[32].price = 9.99;
                    this.singleSubContractorsArray[z].topline[34].price = 9.99;
                    if (this.singleSubContractorsArray[z].name == this.location) {

                      for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



                      }
                      console.log(totalCostThisMonthArray);
                    }


                    if (totalCostThisMonthArray.length > 0) {
                      let reducer = (accumulator, currentValue) => accumulator + currentValue;
                      if(this.totalCostThisMonth != 0){
this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                      }else{
                        this.totalCostThisMonth = 0;
                      }
                      

                      console.log(this.totalCostThisMonth);

                    }



                    this.curexp = this.totalCostThisMonth;
                    this.expenditureLoaded = false;
                    console.log("done");
                    this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
                    console.log(this.totalCostThisMonth);


                  }
                });
            }

          }

        }
      }


    }

  }
  decreaseToplineInventory(ordered,supplier, price, productcode, index) {

    console.log("clicked");
    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    this.expenditureLoading = true;

    setTimeout(() => {

      if(ordered > 0){
      this.totalCostThisMonth = this.totalCostThisMonth - Number(price);
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;

      }else {
        this.expenditureLoaded = false;
      }
    }, 2000);
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {


          if (this.singleSubContractorsArray[z].topline[d].productcode == productcode) {

            console.log("Topline productcode matches!");

            console.log(this.singleSubContractorsArray[z].topline[d]);
            if (this.singleSubContractorsArray[z].topline[d].ordered > 0) {

              this.singleSubContractorsArray[z].topline[d].ordered = this.singleSubContractorsArray[z].topline[d].ordered - 1;
              this.dataservice.increaseItemInWescleanInventory(productToBeModified)
                .subscribe(data => {
                  console.log("DATA!");
                  console.log(data);
                  let totalCostThisMonthArray = [];
                  for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                    console.log(z)


                    this.singleSubContractorsArray[z].topline[32].price = 9.99;
                    this.singleSubContractorsArray[z].topline[34].price = 9.99;
                    if (this.singleSubContractorsArray[z].name == this.location) {

                      for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



                      }
                      console.log(totalCostThisMonthArray);
                    }


                    if (totalCostThisMonthArray.length > 0) {
                      let reducer = (accumulator, currentValue) => accumulator + currentValue;
                                  if(this.totalCostThisMonth != 0){
this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                      }else{
                        this.totalCostThisMonth = 0;
                      }

                    }



                    this.curexp = this.totalCostThisMonth;
                    //this.expenditureLoaded = false;
                    console.log("done");
                    this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];


                  }
                });


            }

          }

        }
      }
    }
    /*  for (let i = 0; i < this.singleSubContractorsArray[0].topline.length; i++) {
  
  
        if (this.singleSubContractorsArray[0].topline[i].productcode == productcode) {
  
          console.log("TOPLINEITEMPRODUCTCODEMATCH!")
          console.log(productcode);
          
          console.log(this.singleSubContractorsArray[0].topline[i]);
          
          if (this.singleSubContractorsArray[0].topline[i].ordered > 0) {
            this.singleSubContractorsArray[0].topline[i].ordered = this.singleSubContractorsArray[0].topline[i].ordered - 1;
            console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
            console.log(this.singleSubContractorsArray[0].topline[i].ordered);
            console.log('SINGLESUBCONTRACTORSARRAY0')
            console.log(this.singleSubContractorsArray[0]);
            console.log('SINGLESUBCONTRACTORSARRAY')
            console.log(this.singleSubContractorsArray);
  
            this.dataservice.increaseItemInWescleanInventory(productToBeModified)
              .subscribe(data => {
                console.log("DATA!");
                console.log(data);
                let totalCostThisMonthArray = [];
                for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                  console.log(z)
  
  
                  this.singleSubContractorsArray[z].topline[32].price = 9.99;
                  this.singleSubContractorsArray[z].topline[34].price = 9.99;
                  if (this.singleSubContractorsArray[z].name == this.location) {
  
                    for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);
  
  
  
                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);
  
  
  
                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);
  
  
  
                    }
                    console.log(totalCostThisMonthArray);
                  }
  
  
                  if(totalCostThisMonthArray.length>0){
                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                  this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                   
                  console.log(this.totalCostThisMonth);
  
                  }
                  
                
  
            this.curexp=this.totalCostThisMonth;
             this.expenditureLoaded = false;
             console.log("done");
                        this.chartData = [
  
                        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }
  
  
                      ];
  
  
                }
              });
  
  
          }
  
  
        }
  
      }*/

  }
  decreaseWescleanInventory(ordered,supplier, price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    this.expenditureLoaded = true;
    setTimeout(() => {

      if(ordered > 0){
      this.totalCostThisMonth = this.totalCostThisMonth - Number(price);
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;

      }else {
        this.expenditureLoaded = false;
      }
    }, 2000);

    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)


    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        console.log(this.location);
        console.log(this.singleSubContractorsArray[z].wesclean);
        for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
          console.log(d);
          // console.log(console.log(this.singleSubContractorsArray[z].topline[d].productcode));

          if (this.singleSubContractorsArray[z].wesclean[d].productcode == productcode) {

            console.log(this.singleSubContractorsArray[z].wesclean[d]);
            if (this.singleSubContractorsArray[z].wesclean[d].ordered > 0) {

              this.singleSubContractorsArray[z].wesclean[d].ordered = this.singleSubContractorsArray[z].wesclean[d].ordered - 1;
              console.log(this.singleSubContractorsArray[z].wesclean[d].ordered);
              this.dataservice.increaseItemInWescleanInventory(productToBeModified)
                .subscribe(data => {
                  console.log("DATA!");
                  console.log(data);
                  let totalCostThisMonthArray = [];
                  for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                    console.log(z)


                    this.singleSubContractorsArray[z].topline[32].price = 9.99;
                    this.singleSubContractorsArray[z].topline[34].price = 9.99;
                    if (this.singleSubContractorsArray[z].name == this.location) {

                      for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



                      }
                      for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                        console.log(d)
                        totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



                      }
                      console.log(totalCostThisMonthArray);
                    }


                    if (totalCostThisMonthArray.length > 0) {
                      let reducer = (accumulator, currentValue) => accumulator + currentValue;
                               if(this.totalCostThisMonth != 0){
this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                      }else{
                        this.totalCostThisMonth = 0;
                      }

                    }



                    this.curexp = this.totalCostThisMonth;
                    this.expenditureLoaded = false;
                    console.log("done");
                    this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
                    console.log(this.totalCostThisMonth);


                  }
                });
            }

          }

        }
      }


    }




  }
  increaseWescleanInventory(supplier, price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray


    }
    this.expenditureLoading = true;
        for(let z =0; z< this.wescleanInventoryArray.length; z++){


        if(this.wescleanInventoryArray[z].productcode == productcode){
          console.log(this.inventory[z])
            this.wescleanInventoryArray[z].ordered = this.wescleanInventoryArray[z].ordered + 1;
            console.log(this.inventory[z])
            let subcontractor = {

              name: this.location,
              topline: this.inventory,
              inventory: "wesclean"

            }
                        this.totalCostThisMonth = this.totalCostThisMonth + price;
            let totalExpenditureUpdater = {
              name : this.location,
              totalexpenditures: this.totalCostThisMonth

            }
            this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

              console.log(data)
              this.expenditureLoading = false;
              this.totalCostThisMonth = data.subcontractor.totalexpenditures;

            })
            this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

              console.log(data);
              this.wescleanInventoryArray = data.subcontractor.wesclean

            })

        }

    }
    /*
    this.expenditureLoaded = true;
    setTimeout(() => {
      this.curexp = 0;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];

      this.totalCostThisMonth = Number(price) + this.totalCostThisMonth;
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;
    }, 2000);
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)


    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        console.log(this.location);
        console.log(this.singleSubContractorsArray[z].weslean);
        for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
          console.log(d);
          // console.log(console.log(this.singleSubContractorsArray[z].topline[d].productcode));

          if (this.singleSubContractorsArray[z].wesclean[d].productcode == productcode) {

            console.log(this.singleSubContractorsArray[z].wesclean[d]);
            this.singleSubContractorsArray[z].wesclean[d].ordered = this.singleSubContractorsArray[z].wesclean[d].ordered + 1;
            console.log(this.singleSubContractorsArray[z].wesclean[d].ordered);
            this.dataservice.increaseItemInWescleanInventory(productToBeModified)
              .subscribe(data => {
                console.log("DATA!");
                console.log(data);
                let totalCostThisMonthArray = [];
                for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                  console.log(z)


                  this.singleSubContractorsArray[z].topline[32].price = 9.99;
                  this.singleSubContractorsArray[z].topline[34].price = 9.99;
                  if (this.singleSubContractorsArray[z].name == this.location) {

                    for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



                    }
                    console.log(totalCostThisMonthArray);
                  }




                  if (totalCostThisMonthArray.length > 0) {
                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);

                    console.log(this.totalCostThisMonth);

                  }



                  this.curexp = this.totalCostThisMonth;
                  //this.expenditureLoaded = false;
                  console.log("done");
                  this.chartData = [

                    { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                  ];
                  console.log(this.totalCostThisMonth);


                }
              });
          }

        }
      }


    }

*/


  }

  increaseVeritivCanadaInventory(supplier, price, productcode, index) {


    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log(productcode)
    this.expenditureLoading = true;
    for(let z =0; z< this.inventory.length; z++){


        if(this.inventory[z].productcode == productcode){
          console.log(this.inventory[z])
            this.inventory[z].ordered = this.inventory[z].ordered + 1;
            console.log(this.inventory[z])
            let subcontractor = {

              name: this.location,
              topline: this.inventory,
              inventory: "veritivcanada"

            }
            
            this.totalCostThisMonth = this.totalCostThisMonth + price;
            let totalExpenditureUpdater = {
              name : this.location,
              totalexpenditures: this.totalCostThisMonth

            }
            this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

              console.log(data)
              this.expenditureLoading = false;
              this.totalCostThisMonth = data.subcontractor.totalexpenditures;

            })
            this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

              console.log(data);
              //this.totalCostThisMonth
                            //this.totalCostThisMonth = data.subcontactor.totalexpenditures;
              this.inventory = data.subcontractor.veritivcanada;
              

            })

        }

    }

  /*  this.clientservice.updateSubContractorInventory().subscribe(data=>{

      this.inventory

    })
    this.clientservice.updateSubContractor()
    this.expenditureLoaded = true;
    setTimeout(() => {
      this.curexp = 0;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.totalCostThisMonth = Number(price) + this.totalCostThisMonth;
      this.curexp = this.totalCostThisMonth;
      this.chartData = [

        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


      ];
      this.expenditureLoaded = false;
    }, 2000);
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let z = 0; z < this.singleSubContractorsArray.length; z++) {

      if (this.singleSubContractorsArray[z].name == this.location) {

        console.log(this.location);
        console.log(this.singleSubContractorsArray[z].veritivcanada);
        for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
          console.log(d);
          // console.log(console.log(this.singleSubContractorsArray[z].topline[d].productcode));

          if (this.singleSubContractorsArray[z].veritivcanada[d].productcode == productcode) {

            console.log(this.singleSubContractorsArray[z].veritivcanada[d]);
            this.singleSubContractorsArray[z].veritivcanada[d].ordered = this.singleSubContractorsArray[z].veritivcanada[d].ordered + 1;
            console.log(this.singleSubContractorsArray[z].veritivcanada[d].ordered);
            this.dataservice.increaseItemInVeritivCanadaInventory(productToBeModified)
              .subscribe(data => {
                console.log("DATA!");
                console.log(data);
                console.log(this.singleSubContractorsArray)
                let totalCostThisMonthArray = [];
                for (let z = 0; z < this.singleSubContractorsArray.length; z++) {
                  console.log(z)


                  this.singleSubContractorsArray[z].topline[32].price = 9.99;
                  this.singleSubContractorsArray[z].topline[34].price = 9.99;
                  if (this.singleSubContractorsArray[z].name == this.location) {

                    for (let d = 0; d < this.singleSubContractorsArray[z].topline.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].topline[d].ordered * this.singleSubContractorsArray[z].topline[d].price);



                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].wesclean.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].wesclean[d].ordered * this.singleSubContractorsArray[z].wesclean[d].price);



                    }
                    for (let d = 0; d < this.singleSubContractorsArray[z].veritivcanada.length; d++) {
                      console.log(d)
                      totalCostThisMonthArray.push(this.singleSubContractorsArray[z].veritivcanada[d].ordered * this.singleSubContractorsArray[z].veritivcanada[d].price);



                    }
                    console.log(totalCostThisMonthArray);
                  }


                  if (totalCostThisMonthArray.length > 0) {
                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);

                    console.log(this.totalCostThisMonth);

                  }



                  this.curexp = this.totalCostThisMonth;
                  //this.expenditureLoaded = false;
                  console.log("done");
                  this.chartData = [

                    { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                  ];
                  console.log(this.totalCostThisMonth);


                }

              });
          }

        }
      }


    }
    */
  }

  openToplineInventoryok() {


    if (!this.toplineInventory2) {
      this.toplineInventory2 = true;
      this.wescleanInventory2 = false;
      this.veritivInventory2 = false;
      console.log(this.toplineInventory2)
      console.log(this.wescleanInventory2)
      console.log(this.veritivInventory2);

    } else {
      this.toplineInventory2 = false
      console.log(this.toplineInventory2)
      console.log(this.wescleanInventory2)
      console.log(this.veritivInventory2);
    }

  };

  openWescleanInventory() {
    console.log("clicked");

    if (!this.wescleanInventory2) {

      this.wescleanInventory2 = true;
      this.veritivInventory2 = false;
      this.toplineInventory2 = false;
      console.log(this.veritivInventory2)
    } else {

      this.wescleanInventory2 = false;

    }

  };
  openVeritivInventory() {
    console.log("clicked");
    if (!this.veritivInventory2) {
      this.veritivInventory2 = true;
      this.wescleanInventory2 = false;
      this.toplineInventory2 = false;
    } else {
      this.veritivInventory2 = false;
    }


  }

}


