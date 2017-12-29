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

  wescleanInventory2: boolean = false;
  toplineInventory2: boolean = true;
  veritivInventory2: boolean = false;
  expenditureLoaded: boolean = false;
  url: string;
  locationObject: Object[];
  inventory: Object[];
  location: string;
  date = new Date();
  dateNow = this.date.getDate()
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  client: string;
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

  monthName: string;
  previousMonth: string;
  totalCostThisMonth: number;

  storenumberArray: string[];
  subcontractorArray: Object[];
  subcontractorObject = {

    name: "",
    contactname: "",
    contactphone: "",
    emailaddress: ""

  }
  chartOptions = {
    responsive: true
  };
  singleSubcontractorArray: object = [];
  toplineInventoryArray: any = [];
  wescleanInventoryArray: any = [];
  arrayOfSubContractors: any = [];
  chartData: Object[];
  chartLabels: String[];
  productcode: number;

  singleClientArray: any = [];
  singleSubContractorsArray: any = [];
  toplineArray: any = [];

  constructor(private clientservice: ClientService, private router: Router, private dataservice: DataService, private activatedroute: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.ordered);
    console.log(this.month);
    this.chartData = [

      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }
      //{ data: [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: "$" },


      //{ data: [this.ordered, 0, 0, 0], label: this.location }


    ];
    console.log(this.chartData[0]["data"]);
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
      this.clientservice.getClients().subscribe(data => {


        console.log(data);
        for (let i = 0; i < data.clients.length; i++) {


          for (let i = 0; i < data.clients.length; i++) {

            console.log(data.clients[i].name)
            console.log(params.client)
            for (let j = 0; j < data.clients[i].subcontractors.length; j++) {
              console.log(data.clients[i].subcontractors[j].name)

              console.log(data.clients[i].subcontractors[j]);
              console.log("data.clients[i]")
              this.expjan = data.clients[i].subcontractors[j].expjan;
              this.expfeb = data.clients[i].subcontractors[j].expfeb;
              this.expmar = data.clients[i].subcontractors[j].expmar;
              this.expapr = data.clients[i].subcontractors[j].expapr;
              this.expmay = data.clients[i].subcontractors[j].expmay;
              this.expjun = data.clients[i].subcontractors[j].expjun;
              this.expjul = data.clients[i].subcontractors[j].expjul;
              this.expaug = data.clients[i].subcontractors[j].expaug;
              this.expsept = data.clients[i].subcontractors[j].expsept;
              this.expoct = data.clients[i].subcontractors[j].expoct;
              this.expnov = data.clients[i].subcontractors[j].expnov;
              this.expdec = data.clients[i].subcontractors[j].expdec;
              //this.expjan = data.clients[i].subcontractors[j].expjan;
              //  data.clients[i].subcontractors[j].date =1;
              //console.log(data.clients[i].subcontractors[j].date);
              //console.log(data.clients[i].subcontractors[j])
              this.chartData = [

                { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }
               // { data: [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: "$" },


                //{ data: [this.ordered, 0, 0, 0], label: this.location }


              ];
              console.log(this.chartData[0]["data"]);
              this.chartLabels = ['Current', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

              if (data.clients[i].subcontractors[j].name == params.location && data.clients[i].name == params.client) {
                console.log(data.clients[i].subcontractors[j].name)
                this.subcontractorObject = data.clients[i].subcontractors[j];
                console.log(this.subcontractorObject);
                console.log(data.clients[i].subcontractors[j]);
                this.toplineInventoryArray.push(data.clients[i].subcontractors[j].topline);
                console.log("toplineInventoryArray");
                console.log(this.toplineInventoryArray);
                this.wescleanInventoryArray.push(data.clients[i].subcontractors[j].wesclean);
                console.log(this.wescleanInventoryArray);
                this.inventory = data.clients[i].subcontractors[j].veritivcanada;
                console.log(this.inventory);
              }




            }
            if (data.clients[i].name == this.client) {

              this.singleClientArray.push(data.clients[i]);
              this.singleSubContractorsArray = this.singleClientArray[0].subcontractors;
              console.log(this.singleSubContractorsArray)
              for (let i = 0; i < this.singleSubContractorsArray.length; i++) {


                // console.log(this.singleSubContractorsArray[i].date);
                //this.singleSubContractorsArray[i].date = 12;
                console.log(this.singleSubContractorsArray[i].date)
                console.log(this.month);
                console.log(this.singleSubContractorsArray[i].name);
                console.log(this.location);
                //console.log(this.singleSubContractorsArray)


                console.log("hello");
                if (this.singleSubContractorsArray[i].date == this.month && this.singleSubContractorsArray[i].name == this.location) {

                  console.log(this.singleSubContractorsArray)
                  console.log(this.singleSubContractorsArray[i]);
                  console.log(i);
                
                  console.log("Inventory is still in service")
              this.expjan = this.singleSubContractorsArray[i].expjan;
              this.expfeb = this.singleSubContractorsArray[i].expfeb;
              this.expmar = this.singleSubContractorsArray[i].expmar;
              this.expapr = this.singleSubContractorsArray[i].expapr;
              this.expmay = this.singleSubContractorsArray[i].expmay;
              this.expjun = this.singleSubContractorsArray[i].expjun;
              this.expjul = this.singleSubContractorsArray[i].expjul;
              this.expaug = this.singleSubContractorsArray[i].expaug;
              this.expsept = this.singleSubContractorsArray[i].expsept;
              this.expoct = this.singleSubContractorsArray[i].expoct;
              this.expnov = this.singleSubContractorsArray[i].expnov;
              this.expdec = this.singleSubContractorsArray[i].expdec;
                console.log("THIS.EXPJUNE");
                   console.log(this.expjun);
             
              //this.expjan = data.clients[i].subcontractors[j].expjan;
              //  data.clients[i].subcontractors[j].date =1;
              //console.log(data.clients[i].subcontractors[j].date);
              //console.log(data.clients[i].subcontractors[j])
              this.chartData = [

                { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                //{ data: [this.ordered, 0, 0, 0], label: this.location }


              ];
              console.log(this.chartData[0]["data"]);
              this.chartLabels = ['Current', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


                  let totalCostThisMonthArray = [];
                  for (let z = 0; z < this.singleSubContractorsArray[i].wesclean.length; z++) {

                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].wesclean[z].ordered * this.singleSubContractorsArray[i].wesclean[z].price);
                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].topline[z].ordered * this.singleSubContractorsArray[i].topline[z].price);
                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].veritivcanada[z].ordered * this.singleSubContractorsArray[i].veritivcanada[z].price);

                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                    this.curexp = this.totalCostThisMonth;
                    this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
              
                    console.log(this.totalCostThisMonth);

                  }



                }
                console.log(this.singleSubContractorsArray[i].date)
                console.log(this.month);
                if (this.singleSubContractorsArray[i].date != this.month && this.singleSubContractorsArray[i].name == this.location) {
                  console.log("should");
                  console.log("Time to take inventory out of servie");
                  this.singleSubContractorsArray[i].date = this.month;

                  console.log(this.singleSubContractorsArray[i].date)
                  //OPEN MODAL
                  document.getElementById("openModalButton").click();
                  
                                    let totalCostThisMonthArray = [];
                  for (let z = 0; z < this.singleSubContractorsArray[i].wesclean.length; z++) {

                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].wesclean[z].ordered * this.singleSubContractorsArray[i].wesclean[z].price);


                  }
                  for (let z = 0; z < this.singleSubContractorsArray[i].topline.length; z++) {

                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].topline[z].ordered * this.singleSubContractorsArray[i].topline[z].price);


                  }
                                    for (let z = 0; z < this.singleSubContractorsArray[i].veritivcanada.length; z++) {

                    totalCostThisMonthArray.push(this.singleSubContractorsArray[i].veritivcanada[z].ordered * this.singleSubContractorsArray[i].veritivcanada[z].price);

  

                  }
                  let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                    this.curexp = this.totalCostThisMonth;

                    this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }



                    ];
                    console.log(this.chartData[0]["data"]);
                    this.chartLabels = ['Current', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                    console.log(this.totalCostThisMonth);

                 
                  for (let z = 0; z < this.singleSubContractorsArray[i].wesclean.length; z++) {

                    if (this.month == 1) {
                      console.log("this.singleSubContractorsArray[i].expdec");
                      console.log(this.singleSubContractorsArray[i].expdec);
                      this.singleSubContractorsArray[i].wesclean[z].ordereddec = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;
                    }
                    if (this.month == 2) {
                      //this.singleSubContractorsArray[i].expjan = this.totalCostThisMonth
                      console.log("this.singleSubContractorsArray[i].expjan");
                      console.log(this.singleSubContractorsArray[i].expjan);
                      this.singleSubContractorsArray[i].wesclean[z].orderedjan = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                     // this.totalCostThisMonth = 0;
                    }
                    if (this.month == 3) {
                      //this.singleSubContractorsArray[i].expfeb = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedfeb = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log("console.log(this.totalCostThisMonth);");
                      console.log(this.totalCostThisMonth);
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;

                    }
                    if (this.month == 4) {
                      //this.singleSubContractorsArray[i].expmar = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedmar = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                                            console.log("console.log(this.totalCostThisMonth);");
                      console.log(this.totalCostThisMonth);
                      console.log("we're here april");
                      this.singleSubContractorsArray[i].expmar = this.totalCostThisMonth;
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;
                    }
                    if (this.month == 5) {
                     // this.singleSubContractorsArray[i].expapr = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedapr = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here "+this.month);
                      console.log("totalCostThisMonth");
                      this.singleSubContractorsArray[i].expapr = this.totalCostThisMonth;
                      console.log(this.singleSubContractorsArray[i].expapr)

                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;
                    }
                    if (this.month == 6) {
                     // this.singleSubContractorsArray[i].expmay = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedmay = this.singleSubContractorsArray[i].wesclean[z].ordered;

                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                        console.log("we're here "+this.month);
                      console.log("totalCostThisMonth");
                      this.singleSubContractorsArray[i].expmay = this.totalCostThisMonth;
                      console.log(this.singleSubContractorsArray[i].expmay)
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;
                    }
                    if (this.month == 7) {
                     // this.singleSubContractorsArray[i].expjun = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedjun = this.singleSubContractorsArray[i].wesclean[z].ordered;

                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                            console.log("we're here "+this.month);
                      console.log("totalCostThisMonth");
                      this.singleSubContractorsArray[i].expjun = this.totalCostThisMonth;
                      this.expjun = this.totalCostThisMonth;
                      console.log(this.singleSubContractorsArray[i].expjun)


                             this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }



                    ];

                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                      //this.totalCostThisMonth = 0;
                    }
                    if (this.month == 8) {
                     // this.singleSubContractorsArray[i].expjul = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedjul = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                     // this.totalCostThisMonth = 0;
                    }
                    if (this.month == 9) {
                     // this.singleSubContractorsArray[i].expaug = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedaug = this.singleSubContractorsArray[i].wesclean[z].ordered;

                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                     // this.totalCostThisMonth = 0;
                    }
                    if (this.month == 10) {
                     // this.singleSubContractorsArray[i].expsept = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedsept = this.singleSubContractorsArray[i].wesclean[z].ordered;

                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                     // this.totalCostThisMonth = 0;
                    }
                    if (this.month == 11) {
                     // this.singleSubContractorsArray[i].expoct = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderedoct = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);
                     // this.totalCostThisMonth = 0;

                    }
                    if (this.month == 12) {
                      //this.singleSubContractorsArray[i].expnov = this.totalCostThisMonth
                      this.singleSubContractorsArray[i].wesclean[z].orderednov = this.singleSubContractorsArray[i].wesclean[z].ordered;
                      this.singleSubContractorsArray[i].wesclean[z].ordered = 0;
                     // this.totalCostThisMonth = 0;

                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].wesclean[z].ordereddec);


                    }

                    //console.log(this.singleSubContractorsArray[i].wesclean[z].ordered)


                  }

                  for (let z = 0; z < this.singleSubContractorsArray[i].veritivcanada.length; z++) {

                    if (this.month == 1) {

                      this.singleSubContractorsArray[i].veritivcanada[z].ordereddec = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 2) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedjan = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 3) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedfeb = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;


                    }
                    if (this.month == 4) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedmar = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 5) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedapr = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 6) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedmay = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;


                    }
                    if (this.month == 7) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedjun = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;


                    }
                    if (this.month == 8) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedjul = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 9) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedaug = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 10) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedsept = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 11) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderedoct = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;

                    }
                    if (this.month == 12) {
                      this.singleSubContractorsArray[i].veritivcanada[z].orderednov = this.singleSubContractorsArray[i].veritivcanada[z].ordered;
                      this.singleSubContractorsArray[i].veritivcanada[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].veritivcanada[z].ordereddec);

                    }


                  }

                  for (let z = 0; z < this.singleSubContractorsArray[i].topline.length; z++) {

                    if (this.month == 1) {

                      this.singleSubContractorsArray[i].topline[z].ordereddec = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 2) {
                      this.singleSubContractorsArray[i].topline[z].orderedjan = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 3) {
                      this.singleSubContractorsArray[i].topline[z].orderedfeb = this.singleSubContractorsArray[i].topline[z].ordered;

                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 4) {
                      this.singleSubContractorsArray[i].topline[z].orderedmar = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 5) {
                      this.singleSubContractorsArray[i].topline[z].orderedapr = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 6) {
                      this.singleSubContractorsArray[i].topline[z].orderedmay = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);


                    }
                    if (this.month == 7) {
                      this.singleSubContractorsArray[i].topline[z].orderedjun = this.singleSubContractorsArray[i].topline[z].ordered;


                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 8) {
                      this.singleSubContractorsArray[i].topline[z].orderedjul = this.singleSubContractorsArray[i].topline[z].ordered;

                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 9) {
                      this.singleSubContractorsArray[i].topline[z].orderedaug = this.singleSubContractorsArray[i].topline[z].ordered;

                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 10) {
                      this.singleSubContractorsArray[i].topline[z].orderedsept = this.singleSubContractorsArray[i].topline[z].ordered;

                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 11) {
                      this.singleSubContractorsArray[i].topline[z].orderedoct = this.singleSubContractorsArray[i].topline[z].ordered;

                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here");
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }
                    if (this.month == 12) {
                      this.singleSubContractorsArray[i].topline[z].orderednov = this.singleSubContractorsArray[i].topline[z].ordered;
                      this.singleSubContractorsArray[i].topline[z].ordered = 0;
                      console.log("we're here" + this.month);
                      console.log(this.singleSubContractorsArray[i].topline[z].ordereddec);

                    }

                  }
                  let productToBeModified = {

                    name: this.location,
                    //productcode: productcode,
                    client: this.client,
                    //supplier: supplier,
                    subcontractorarray: this.singleSubContractorsArray

                  }
                  console.log("producttobemodified")
                  console.log(productToBeModified)

                  this.dataservice.pushDateIntoSubcontractors(productToBeModified).subscribe(data => {

                    console.log(data);
                    console.log(data.client.subcontractors[i]);
                    this.expjan = data.client.subcontractors[i].expjan
                    this.expfeb = data.client.subcontractors[i].expfeb
                    this.expmar = data.client.subcontractors[i].expmar
                    this.expapr = data.client.subcontractors[i].expapr
                    this.expmay = data.client.subcontractors[i].expmay
                    this.expjun = data.client.subcontractors[i].expjun
                    this.expjul = data.client.subcontractors[i].expjul
                    this.expaug = data.client.subcontractors[i].expaug
                    this.expsept = data.client.subcontractors[i].expsept
                    this.expoct = data.client.subcontractors[i].expoct
                    this.expnov = data.client.subcontractors[i].expnov
                    this.expdec = data.client.subcontractors[i].expdec
                       this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }



            ];

                  })


                }
              }


            }
            console.log("this.singleClientArray");
            console.log(this.singleClientArray);
            console.log("this.singleSubContractorsArray");
            console.log(this.singleSubContractorsArray);





          }



        }
        console.log(this.toplineInventoryArray);
        console.log(this.wescleanInventoryArray);
        console.log(this.arrayOfSubContractors);

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
  practiceIncreaseToplineInventory(supplier,price, productcode, index) {

   
    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    this.expenditureLoaded = true;
           this.totalCostThisMonth = Number(price)+ this.totalCostThisMonth;
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
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


    }
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


    this.dataservice.increaseItemInToplineInventory(productToBeModified)
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
                  this.expenditureLoaded = false;
                console.log(this.totalCostThisMonth);

                }

     
          this.curexp=this.totalCostThisMonth;
                      this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
          this.expenditureLoaded = false;
          console.log(this.totalCostThisMonth);


        }
      });

  }
  decreaseVeritivCanadaInventory(supplier,price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }

    this.expenditureLoaded = true;
           this.totalCostThisMonth = Number(price)- this.totalCostThisMonth;
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
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



                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
                    this.expenditureLoaded = false;
                    console.log(this.totalCostThisMonth);


                  }
                });
            }

          }

        }
      }


    }

  }
  decreaseToplineInventory(supplier, price,productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    this.expenditureLoaded = true;
           this.totalCostThisMonth = this.totalCostThisMonth -Number(price);
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let i = 0; i < this.singleSubContractorsArray[0].topline.length; i++) {


      if (this.singleSubContractorsArray[0].topline[i].productcode == productcode) {

        console.log("TOPLINEITEMPRODUCTCODEMATCH!")
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

    }

  }
  decreaseWescleanInventory(supplier,price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    this.expenditureLoaded = true;
           this.totalCostThisMonth = Number(price)- this.totalCostThisMonth;
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
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



                    let reducer = (accumulator, currentValue) => accumulator + currentValue;
                    this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                    this.expenditureLoaded = false;
                    
          this.curexp=this.totalCostThisMonth;
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
  increaseWescleanInventory(supplier,price, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray


    }
    this.expenditureLoaded = true;
           this.totalCostThisMonth = Number(price)+ this.totalCostThisMonth;
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
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



                  let reducer = (accumulator, currentValue) => accumulator + currentValue;
                  this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                  this.expenditureLoaded = false;
                  
          this.curexp=this.totalCostThisMonth;
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

  increaseVeritivCanadaInventory(supplier,price, productcode, index) {


    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
 
    this.expenditureLoaded = true;
       this.totalCostThisMonth = Number(price)+ this.totalCostThisMonth;
    this.curexp = this.totalCostThisMonth;
                this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
    
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



                  let reducer = (accumulator, currentValue) => accumulator + currentValue;
                  this.totalCostThisMonth = totalCostThisMonthArray.reduce(reducer);
                  
          this.curexp=this.totalCostThisMonth;
                      this.chartData = [

                      { data: [this.curexp, this.expjan, this.expfeb, this.expmar, this.expapr, this.expmay, this.expjun, this.expjul, this.expaug, this.expsept, this.expoct, this.expnov, this.expdec], label: "Expenditures/Month" }


                    ];
                  this.expenditureLoaded = false;
                  
                  console.log(this.totalCostThisMonth);


                }

              });
          }

        }
      }


    }
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


