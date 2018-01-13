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
  subContractorName: string;
  subContractorContactPhone:string;
  subContractorContactEmail:string;
  subContractorContactName:string;
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
      this.location = params.location
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
        this.subContractorName = data.subcontractor.name
        this.subContractorContactName = data.subcontractor.contactname
        this.subContractorContactEmail = data.subcontractor.contactemail
        this.subContractorContactPhone = data.subcontractor.contactphone;
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

            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].ordereddec = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].ordereddec = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].ordereddec = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 1

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })

          }
          if(this.month == 2){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedjan = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedjan = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedjan = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 2

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })

            
          }
          if(this.month == 3){



            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedfeb = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedfeb = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedfeb = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 3

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })
            
          }
          if(this.month == 4){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedmar = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedmar = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedmar = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 4

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })
            
          }
          if(this.month == 5){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedapr = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedapr = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedapr = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 5

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })
            
          }
          if(this.month == 6){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedmay = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedmay = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedmay = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 6

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })
          }
          if(this.month == 7){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedjun = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedjun = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedjun = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 7

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


            }) 
            
          }
          if(this.month == 8){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedjul = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedjul = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedjul = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 8

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })        
          }
          if(this.month == 9){
            

            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedaug = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedaug = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedaug = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 9

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })
            
          }
          if(this.month == 10){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedsept = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedsept = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedsept = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 10

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })   
          }
          if(this.month == 11){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderedoct = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderedoct = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderedoct = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 11;

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
              subContractorToBeUpdated.topline = data.subcontractor.topline
              subContractorToBeUpdated.wesclean = data.subcontractor.wesclean
              subContractorToBeUpdated.veritivcanada = data.subcontractor.veritivcanada

              this.clientservice.updateSubContractor(subContractorToBeUpdated).subscribe(data=>{

              console.log(data);


              })          
          }
          if(this.month == 12){


            for(let z =0; z< data.subcontractor.topline.length; z++){

                data.subcontractor.topline[z].orderednov = this.toplineInventoryArray[z].ordered
                data.subcontractor.topline[z].ordered = 0;


            }
            for(let z =0; z< data.subcontractor.wesclean.length; z++){

                data.subcontractor.wesclean[z].orderednov = this.wescleanInventoryArray[z].ordered
                data.subcontractor.wesclean[z].ordered = 0;

            }
            for(let z = 0; z< data.subcontractor.veritivcanada.length; z++){
               
               data.subcontractor.veritivcanada[z].orderednov = this.inventory[z].ordered
               data.subcontractor.veritivcanada[z].ordered=0;

            }
            //console.log(this.curexp);
              data.subcontractor.date = 12

              subContractorToBeUpdated.name = data.subcontractor.name
              subContractorToBeUpdated.month = this.month
              subContractorToBeUpdated.date = data.subcontractor.date
              subContractorToBeUpdated.oldordered = this.curexp;
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
              
              this.curexp = this.totalCostThisMonth;

              this.chartData = [

                  { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


              ];         

            })

            this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

              console.log(data);
              this.totalCostThisMonth = data.subcontractor.totalexpenditures;
              this.toplineInventoryArray = data.subcontractor.topline;


            })

        }

    }
 
  }
  decreaseVeritivCanadaInventory(ordered,supplier, price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }

    this.expenditureLoading = true;

    for(let z =0; z< this.inventory.length; z++){


        if(this.inventory[z].productcode == productcode){
            
            if(this.inventory[z].ordered > 0){

                this.inventory[z].ordered = this.inventory[z].ordered - 1;

                let subcontractor = {

                  name: this.location,
                  veritivcanada: this.inventory,
                  inventory: "veritivcanada"

                }

                if(this.totalCostThisMonth > 0){

                  this.totalCostThisMonth = this.totalCostThisMonth - price;


                }                
                let totalExpenditureUpdater = {
                    name : this.location,
                    totalexpenditures: this.totalCostThisMonth

                }
                this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

                    console.log(data)
                    this.expenditureLoading = false;
                    this.totalCostThisMonth = data.subcontractor.totalexpenditures;
              
                    this.curexp = this.totalCostThisMonth;

                    this.chartData = [

                        { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];         

                  })
                
                  this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

                       console.log(data);
                       this.inventory = data.subcontractor.veritivcanada

                  })

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

    for(let z =0; z< this.toplineInventoryArray.length; z++){


        if(this.toplineInventoryArray[z].productcode == productcode){
            console.log(this.inventory[z])
            console.log(this.toplineInventoryArray[z].ordered)
            if(this.toplineInventoryArray[z].ordered >0){

                this.toplineInventoryArray[z].ordered = this.toplineInventoryArray[z].ordered - 1;

                let subcontractor = {

                  name: this.location,
                  topline: this.toplineInventoryArray,
                  inventory: "topline"

                }

                if(this.totalCostThisMonth > 0){

                  this.totalCostThisMonth = this.totalCostThisMonth - price;


                }
                let totalExpenditureUpdater = {
                   name : this.location,
                   totalexpenditures: this.totalCostThisMonth

                }
                this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

                    console.log(data)
                  this.expenditureLoading = false;
                  this.totalCostThisMonth = data.subcontractor.totalexpenditures;
              
                  this.curexp = this.totalCostThisMonth;

                  this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                  ];         

                })
                
                this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

                    console.log(data);
                    this.toplineInventoryArray = data.subcontractor.topline

                })

            }


        }

    }

    }
   

  
  decreaseWescleanInventory(ordered,supplier, price, productcode, index) {


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
            if(this.wescleanInventoryArray[z].ordered > 0){

                this.wescleanInventoryArray[z].ordered = this.wescleanInventoryArray[z].ordered - 1;

                let subcontractor = {

                  name: this.location,
                  wesclean: this.wescleanInventoryArray,
                  inventory: "wesclean"

                }

            if(this.totalCostThisMonth > 0){

                this.totalCostThisMonth = this.totalCostThisMonth - price;


                }                
            let totalExpenditureUpdater = {
                  name : this.location,
                  totalexpenditures: this.totalCostThisMonth

                }

                this.clientservice.updateSubContractorTotalExpenditures(totalExpenditureUpdater).subscribe(data=>{

                  console.log(data)
                  this.expenditureLoading = false;
                  this.totalCostThisMonth = data.subcontractor.totalexpenditures;
              
                  this.curexp = this.totalCostThisMonth;

                  this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                  ];         

                })
                
                this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

                    console.log(data);
                    this.wescleanInventoryArray = data.subcontractor.wesclean

                })

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
              wesclean: this.wescleanInventoryArray,
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
              this.curexp = this.totalCostThisMonth;

              this.chartData = [

                  { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


              ];

            })
            this.clientservice.updateSubContractorInventory(subcontractor).subscribe(data=>{

              console.log(data);
              this.wescleanInventoryArray = data.subcontractor.wesclean

            })

        }

    }
    

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
              veritivcanada: this.inventory,
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

              this.curexp = this.totalCostThisMonth;

              this.chartData = [

                  { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


              ];             

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


