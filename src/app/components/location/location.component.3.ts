import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { HttpModule, Http, Headers } from '@angular/http';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  //UPDATE SUBCONTRACTOR CHART MANUALLY
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  wescleanInventory: boolean = false;
  toplineInventory: boolean = false;
  veritivInventory: boolean = false;
  url: string;
  locationObject: Object[];
  inventory: Object[];
  location: string;
  client: string;
  ordered: number;

  storenumberArray: string[];
  subcontractorArray: Object[];
  subcontractorObject: Object;
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
    this.activatedroute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(this.router.url);
      console.log(this.router.url.slice(17, this.router.url.length));
      this.location = this.router.url.slice(17, this.router.url.length);
      this.client = params.client;
      console.log(this.location);

      this.clientservice.getClients().subscribe(data => {

        console.log(data);
        for (let i = 0; i < data.clients.length; i++) {

          if (data.clients[i].name == this.client) {

            this.singleClientArray.push(data.clients[i]);
            this.singleSubContractorsArray = this.singleClientArray[0].subcontractors;


          }



        }
        console.log("this.singleClientArray");
        console.log(this.singleClientArray);
        console.log("this.singleSubContractorsArray");
        console.log(this.singleSubContractorsArray);





        for (let i = 0; i < data.clients.length; i++) {

          console.log(data.clients[i].name)
          console.log(params.client)
          for (let j = 0; j < data.clients[i].subcontractors.length; j++) {

            if (data.clients[i].subcontractors[j].name == params.location && data.clients[i].name == params.client) {
              console.log(data.clients[i].subcontractors[j]);
              this.toplineInventoryArray.push(data.clients[i].subcontractors[j].topline);
              console.log(this.toplineInventoryArray);
              this.wescleanInventoryArray.push(data.clients[i].subcontractors[j].wesclean);

              this.inventory = data.clients[i].subcontractors[j].veritivcanada;
              console.log(this.inventory);
            }







          }

        }
        for (let i = 0; i < data.clients.length; i++) {
          for (let j = 0; j < data.clients[i].subcontractors.length; j++) {

            this.arrayOfSubContractors.push(data.clients[i].subcontractors[j]);

          }



        }
        console.log(this.toplineInventoryArray);
        console.log(this.wescleanInventoryArray);
        console.log(this.arrayOfSubContractors);

      })
      this.chartData = [

        { data: [0, 0, 0, 0], label: this.location }
        /* { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 },
         { data: [0, 0, 0, 0], label: 154341 }*/

        //{ data: [this.ordered, 0, 0, 0], label: this.location }


      ];
      console.log(this.chartData[0]["data"]);
      this.chartLabels = ['Jan', 'Feb', 'Mar', 'April'];
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
    this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

      console.log(subcontractor.subcontractor[0]);
      console.log(subcontractor.subcontractor[0].veritivcanada);
      this.subcontractorObject = subcontractor.subcontractor[0];
      //this.inventory = subcontractor.subcontractor[0].veritivcanada;


    })


  }
  practiceIncreaseToplineInventory(supplier, productcode, index) {


    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

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




    this.dataservice.increaseItemInToplineInventory(productToBeModified)
      .subscribe(data => {
        console.log("DATA!");
        console.log(data);
      });

  }
  decreaseVeritivCanadaInventory(supplier, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let i = 0; i < this.singleSubContractorsArray[0].veritivcanada.length; i++) {


      if (this.singleSubContractorsArray[0].veritivcanada[i].productcode == productcode) {

        console.log("TOPLINEITEMPRODUCTCODEMATCH!")
        console.log(this.singleSubContractorsArray[0].veritivcanada[i]);
        if (this.singleSubContractorsArray[0].veritivcanada[i].ordered > 0) {
          this.singleSubContractorsArray[0].veritivcanada[i].ordered = this.singleSubContractorsArray[0].veritivcanada[i].ordered - 1;
          console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
          console.log(this.singleSubContractorsArray[0].veritivcanada[i].ordered);
          console.log('SINGLESUBCONTRACTORSARRAY0')
          console.log(this.singleSubContractorsArray[0]);
          console.log('SINGLESUBCONTRACTORSARRAY')
          console.log(this.singleSubContractorsArray);

          this.dataservice.increaseItemInVeritivCanadaInventory(productToBeModified)
            .subscribe(data => {
              console.log("DATA!");
              console.log(data);
            });


        }


      }

    }

  }
  decreaseToplineInventory(supplier, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
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
            });


        }


      }

    }

  }
  decreaseWescleanInventory(supplier, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let i = 0; i < this.singleSubContractorsArray[0].wesclean.length; i++) {


      if (this.singleSubContractorsArray[0].wesclean[i].productcode == productcode) {

        console.log("TOPLINEITEMPRODUCTCODEMATCH!")
        console.log(this.singleSubContractorsArray[0].wesclean[i]);
        if (this.singleSubContractorsArray[0].wesclean[i].ordered > 0) {
          this.singleSubContractorsArray[0].wesclean[i].ordered = this.singleSubContractorsArray[0].wesclean[i].ordered - 1;
          console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
          console.log(this.singleSubContractorsArray[0].wesclean[i].ordered);
          console.log('SINGLESUBCONTRACTORSARRAY0')
          console.log(this.singleSubContractorsArray[0]);
          console.log('SINGLESUBCONTRACTORSARRAY')
          console.log(this.singleSubContractorsArray);

          this.dataservice.increaseItemInWescleanInventory(productToBeModified)
            .subscribe(data => {
              console.log("DATA!");
              console.log(data);
            });


        }


      }

    }

  }
  increaseWescleanInventory(supplier, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let i = 0; i < this.singleSubContractorsArray[0].wesclean.length; i++) {


      if (this.singleSubContractorsArray[0].wesclean[i].productcode == productcode) {

        console.log("TOPLINEITEMPRODUCTCODEMATCH!")
        console.log(this.singleSubContractorsArray[0].wesclean[i]);
        this.singleSubContractorsArray[0].wesclean[i].ordered = this.singleSubContractorsArray[0].wesclean[i].ordered + 1;
        console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
        console.log(this.singleSubContractorsArray[0].wesclean[i].ordered);
        console.log('SINGLESUBCONTRACTORSARRAY0')
        console.log(this.singleSubContractorsArray[0]);
        console.log('SINGLESUBCONTRACTORSARRAY')
        console.log(this.singleSubContractorsArray);

      }

    }

    this.dataservice.increaseItemInWescleanInventory(productToBeModified)
      .subscribe(data => {
        console.log("DATA!");
        console.log(data);
      });

  }

  increaseVeritivCanadaInventory(supplier, productcode, index) {

    let productToBeModified = {

      name: this.location,
      productcode: productcode,
      client: this.client,
      supplier: supplier,
      subcontractorarray: this.singleSubContractorsArray

    }
    console.log("PRODUCTCODE")
    console.log(productcode);
    console.log("SINGLESUBCONTRACTORSARRAY");
    console.log(this.singleSubContractorsArray)

    for (let i = 0; i < this.singleSubContractorsArray[0].veritivcanada.length; i++) {


      if (this.singleSubContractorsArray[0].veritivcanada[i].productcode == productcode) {

        console.log("TOPLINEITEMPRODUCTCODEMATCH!")
        console.log(this.singleSubContractorsArray[0].topline[i]);
        this.singleSubContractorsArray[0].veritivcanada[i].ordered = this.singleSubContractorsArray[0].veritivcanada[i].ordered + 1;
        console.log('SINGLESUBCONTRACTORSARRAYTOPLINEORDERED');
        console.log(this.singleSubContractorsArray[0].veritivcanada[i].ordered);
        console.log('SINGLESUBCONTRACTORSARRAY0')
        console.log(this.singleSubContractorsArray[0]);
        console.log('SINGLESUBCONTRACTORSARRAY')
        console.log(this.singleSubContractorsArray);

      }

    }

    this.dataservice.increaseItemInVeritivCanadaInventory(productToBeModified)
      .subscribe(data => {
        console.log("DATA!");
        console.log(data);
        console.log(data.client);
   
      });

  }
  private decreaseInventory(instock, productcode, index) {

    console.log(instock);
    console.log(productcode);
    console.log(index);
    console.log(this.location);
    let productcodeObject = {

      productcode: productcode

    }
    this.productcode = productcode;
    if (this.location === "Toba Building Maintenance Cleaning") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      console.log(this.location);

      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem);
          }
        });
    }
    if (this.location === "K.N. Janitorial") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "1799307 Alberta Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Mansheel Janitorial Services") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "AAK Building Maintenance") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Jossy Quality Cleaning") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Super Generator Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Mayamy Cleaning") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Double H Zerit Inc.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Gaius Commercial and Domestic Cleaners Inc.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Aredie Cleaning Services Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "DMB Solutions") {
      console.log("I ran!");

      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "G. Welcome Janitorial Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Safe Building Maintenance Inc.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Mex Cleaning") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Crystal Clean Care") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Delinagenet Janitorial Services") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Gion's Cleaning Services") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "1992063 Alberta Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "Anta Janitorial") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }
    if (this.location === "D Tesfame Cleaning Ltd.") {
      let subcontractorToBeModified = {

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
        .subscribe(inventoryitem => {

          console.log(inventoryitem);
          if (inventoryitem.success) {
            this.inventory = inventoryitem.updatedsubcontractor.veritivcanada;
            console.log(this.inventory);

          } else {
            console.log(inventoryitem.message);
          }
        });
    }



  }
  openToplineInventory() {


    if (!this.toplineInventory) {
      this.toplineInventory = true;
      this.wescleanInventory = false;
      this.veritivInventory = false;
      console.log(this.toplineInventory)
      console.log(this.wescleanInventory)
      console.log(this.veritivInventory);

    } else {
      this.toplineInventory = false
      console.log(this.toplineInventory)
      console.log(this.wescleanInventory)
      console.log(this.veritivInventory);
    }

  };

  openWescleanInventory() {
    console.log("clicked");

    if (!this.wescleanInventory) {

      this.wescleanInventory = true;
      this.veritivInventory = false;
      this.toplineInventory = false;
      console.log(this.veritivInventory)
    } else {

      this.wescleanInventory = false;

    }

  };
  openVeritivInventory() {
    console.log("clicked");
    if (!this.veritivInventory) {
      this.veritivInventory = true;
      this.wescleanInventory = false;
      this.toplineInventory = false;
    } else {
      this.veritivInventory = false;
    }


  }

}


