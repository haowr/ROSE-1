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
  chartData: Object[];
  chartLabels: String[];
  productcode: number;
  constructor(private clientservice: ClientService,private router:Router, private dataservice: DataService, private activatedroute: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.ordered);
    this.activatedroute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(this.router.url);
      console.log(this.router.url.slice(17,this.router.url.length));
      this.location = this.router.url.slice(17,this.router.url.length);
      this.client = params.client;
      console.log(this.location);

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

    })

    if (this.location == "Toba Building Maintenance Cleaning") {
      console.log("I ran!" + this.location);

      this.dataservice.getTobaSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory

      })
    }
    if (this.location == "K.N. Janitorial") {
      console.log("I ran!" + this.location);

      this.dataservice.getKnJanitorialSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory

      })
    }
    if (this.location === "Anta Janitorial") {
      console.log("Anta Janitorial");
      this.dataservice.getAntaSubContractorInventory().subscribe(inventory => {

        this.inventory = inventory.subcontractorinventory;
      })

    }
    if (this.location === "Mansheel Janitorial Services") {
      console.log("I ran!");

      this.dataservice.getMansheelSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
      })
    }
    if (this.location === "AAK Building Maintenance") {
      console.log("I ran!");

      this.dataservice.getAAKSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Jossy Quality Cleaning Inc.") {
      console.log("Jossy has run");

      this.dataservice.getJossySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        //this.ordered = inventory.subcontractorinventory[index].ordered;

      })
    }
    if (this.location === "Super Generator Ltd.") {
      console.log("I ran!" + this.location);

      this.dataservice.getSuperGenSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Mayamy Cleaning") {
      console.log("I ran!");

      this.dataservice.getMayamySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Double H Zerit Inc.") {
      console.log("I ran!");

      this.dataservice.getDoubleHSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Gaius Commercial and Domestic Cleaners Inc.") {
      console.log("I ran!");

      this.dataservice.getGaiusLeducSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Aredie Cleaning Services Ltd.") {
      console.log("I ran!");

      this.dataservice.getAredieSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "DMB Solutions") {
      console.log("I ran!");

     /// this.dataservice.getDMBSubContractorInventory().subscribe(inventory => {
      //  console.log(inventory);
      //  this.inventory = inventory.subcontractorinventory;

     // })
    }
    if (this.location === "G. Welcome Janitorial Ltd.") {
      console.log("I ran!");

      this.dataservice.getGWelcomeSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Safe Building Maintenance Inc.") {
      console.log("SAFERRR@@@");

      this.dataservice.getSafeBuildingSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Mex Cleaning") {
      console.log("I ran!");

      this.dataservice.getMexCleaningSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
      })
    }
    if (this.location === "Crystal Clean Care") {
      console.log("Crystal Clean Care");

      this.dataservice.getCrystalSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Gion's Cleaning Services") {
      console.log("Crystal Clean Care");

      this.dataservice.getGionSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })
    }
    if (this.location === "Delinagenet Janitorial Services") {
      console.log("Deli");

      this.dataservice.getDellnagenetSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        for (var i = 0; i < this.inventory.length; i++) {

          //this.numberOrdered.push(inventory.subcontractorinventory[i].ordered);

        }
        // console.log(this.numberOrdered);

      })
    }
    if (this.location === "D Tesfame Cleaning Ltd.") {
      console.log("DTES");
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })

      this.dataservice.getDTesfameSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;
        for (var i = 0; i < this.inventory.length; i++) {

          //this.numberOrdered.push(inventory.subcontractorinventory[i].ordered);

        }
        // console.log(this.numberOrdered);

      })
    }

    if (this.location === "1992063 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.getAlbertaLtdBonnySubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })

    }
    if (this.location === "1799307 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.getAlbertaLtdWhitemudSubContractorInventory().subscribe(inventory => {
        console.log(inventory);
        this.inventory = inventory.subcontractorinventory;

      })

    }
    /* this.dataservice.getInventoryFromDatabase().subscribe(inventory => {
       console.log(inventory.inventory[0].inventory);
       this.locationObject = inventory.inventory[0].inventory[0];
       console.log(this.locationObject);
       console.log(this.dataservice.param);
       //this.inventoryArrayy = inventory.inventory;
 
     });*/

    if (this.location == "Delinagenet Janitorial Services") {
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })

    } else if (this.location == "D Tesfame Cleaning Ltd.") {

      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })


    } else if (this.location == "1992063 Alberta Ltd.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })

    } else if (this.location == "Mansheel Janitorial Services") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })


    }
    else if (this.location == "K.N. Janitorial") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })


    } else if (this.location == "AAK Building Maintenance") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];
        console.log(this.subcontractorObject);


      })
    } else if (this.location == "Jossy Quality Cleaning Inc.") {
      console.log("HELLO!" + this.location);
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {
        console.log("HELLO!" + this.location);
        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Super Generator Ltd.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })


    } else if (this.location == "Anta Janitorial") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })


    } else if (this.location == "Mayamy Cleaning") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Double H Zerit Inc.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Gaius Commercial and Domestic Cleaners Inc.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Aredie Cleaning Services Ltd.") {

      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })
    } else if (this.location == "DMB Solutions") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        console.log(subcontractor.subcontractor[0].veritivcanada);
        this.subcontractorObject = subcontractor.subcontractor[0];
        this.inventory = subcontractor.subcontractor[0].veritivcanada;


      })
    } else if (this.location == "G. Welcome Janitorial Ltd.") {

      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })
    } else if (this.location == "1799307 Alberta Ltd.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Safe Building Maintenance Inc.") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    } else if (this.location == "Mex Cleaning") {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })



    } else if (this.location == "Safe Building Maintenance Inc.") {

      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })
    } else {
      console.log("HELLO!")
      let locationObject = {

        subcontractor: this.location

      }
      this.clientservice.getSingleSubcontractor(locationObject).subscribe(subcontractor => {

        console.log(subcontractor.subcontractor[0]);
        this.subcontractorObject = subcontractor.subcontractor[0];


      })

    }

  }
  private increaseInventory(instock, productcode, index) {

    console.log(instock);
    console.log(productcode);
    console.log(index);
    let productcodeObject = {

      productcode: productcode

    }
    this.productcode = productcode;
    if (this.location === "Toba Building Maintenance") {
      console.log("I ran " + this.location);


      this.dataservice.increaseinventoryItem(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getTobaSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "K.N. Janitorial") {
      console.log("I ran " + this.location);


      this.dataservice.increaseKnJanitorialItemInInventory(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getKnJanitorialSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "1799307 Alberta Ltd.") {
      console.log("I ran " + this.location);


      this.dataservice.increaseAlbertaLtdWhiteMudItemInInventory(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getAlbertaLtdWhitemudSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "Mansheel Janitorial Services") {
      console.log("I ran!");

      this.dataservice.increaseMansheelItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });


          console.log(inventoryitem);
          this.dataservice.getMansheelSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })

    }
    if (this.location === "AAK Building Maintenance") {
      console.log("I ran!");
      this.dataservice.increaseAAKItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });


          console.log(inventoryitem);
          this.dataservice.getAAKSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Jossy Quality Cleaning") {
      console.log("I ran!");

      this.dataservice.increaseJossyItemInInventory
        (productcode).subscribe(subcontractorinventoryitem => {

          console.log(subcontractorinventoryitem);
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });
          this.dataservice.getJossySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              console.log(inventory.subcontractorinventory[index].ordered);
              this.ordered = inventory.subcontractorinventory[index].ordered;
              console.log(this.ordered);
              setTimeout(() => {
                // this.chartData[3]["data"][3]=this.ordered;
                // this.chart.ngOnChanges({

                //})
                this.chart.datasets[0]["data"][0] = this.ordered;

                console.log(this.chart);

              }, 1999);
              console.log(this.chartData[3]);

              for (var data in this.chartData[3][""]) {

                console.log(data);

              }
              this.inventory = inventory.subcontractorinventory;


            })
        })
    }
    if (this.location === "Super Generator Ltd.") {
      console.log("I ran!");

      this.dataservice.increaseSuperGenItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getSuperGenSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Mayamy Cleaning") {
      console.log("I ran!");

      this.dataservice.increaseMayamyItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getMayamySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Double H Zerit Inc.") {
      console.log("I ran!");

      this.dataservice.increaseDoubleHItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDoubleHSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Gaius Commercial and Domestic Cleaners Inc.") {
      console.log("I ran!");
      this.dataservice.increaseGaiusLeducItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGaiusLeducSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Aredie Cleaning Services Ltd.") {
      console.log("I ran!");
      this.dataservice.increaseAredieItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAredieSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "DMB Solutions") {
      console.log("I ran!");
      let subcontractorToBeModified={

        name: this.location,
        productcode: productcode

      }
      this.dataservice.increaseItemInInventory(subcontractorToBeModified)
      .subscribe(inventoryitem =>{

        console.log(inventoryitem);
        this.inventory=inventoryitem.updatedsubcontractor.veritivcanada;
        console.log(this.inventory);
      });
/*
      this.dataservice.increaseDMBItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDMBSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })*/
    }
    if (this.location === "G. Welcome Janitorial Ltd.") {
      console.log("I ran!");
      this.dataservice.increaseGWelcomeItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGWelcomeSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Safe Building Maintenance Inc.") {
      console.log("I ran!");

      this.dataservice.increaseSafeBuildingItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getSafeBuildingSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Mex Cleaning") {
      console.log("I ran!");

      this.dataservice.increaseMexCleaningItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getMexCleaningSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Crystal Clean Care") {
      console.log("I ran!");

      this.dataservice.increaseCrystalItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getCrystalSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Delinagenet Janitorial Services") {
      console.log("I ran!");

      this.dataservice.increaseDellnagenetItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDellnagenetSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Gion's Cleaning Services") {
      console.log("I ran!" + this.location);

      this.dataservice.increaseGionItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGionSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "1992063 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.increaseAlbertaLtdBonnyItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAlbertaLtdBonnySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Anta Janitorial") {
      console.log("I ran!");

      this.dataservice.increaseAntaItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAntaSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "D Tesfame Cleaning Ltd.") {
      console.log("I ran!");

      this.dataservice.increaseDTesfameItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToTrue(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDTesfameSubContractorInventory
            ().subscribe(inventory => {
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
  private decreaseInventory(instock, productcode, index) {

    console.log(instock);
    console.log(productcode);
    console.log(index);
    let productcodeObject = {

      productcode: productcode

    }
    this.productcode = productcode;
    if (this.location === "Toba Building Maintenance") {
      console.log("I ran " + this.location);


      this.dataservice.decreaseTobaInventoryItem(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getTobaSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "K.N. Janitorial") {
      console.log("I ran " + this.location);


      this.dataservice.decreaseKnJanitorialItemInInventory(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getKnJanitorialSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "1799307 Alberta Ltd.") {
      console.log("I ran " + this.location);


      this.dataservice.decreaseAlbertaLtdWhiteMudItemInInventory(productcode).subscribe(inventoryitem => {
        let indvSubcontractor = {
          name: this.location,

        }
        this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

          console.log(indvSubcontractor);

        });

        console.log(inventoryitem);
        this.dataservice.getAlbertaLtdWhitemudSubContractorInventory().subscribe(inventory => {
          console.log(inventory);
          this.inventory = inventory.subcontractorinventory;

        })
      })

    }
    if (this.location === "Mansheel Janitorial Services") {
      console.log("I ran!");

      this.dataservice.decreaseMansheelItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });


          console.log(inventoryitem);
          this.dataservice.getMansheelSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })

    }
    if (this.location === "AAK Building Maintenance") {
      console.log("I ran!");
      this.dataservice.decreaseAAKItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });


          console.log(inventoryitem);
          this.dataservice.getAAKSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Jossy Quality Cleaning") {
      console.log("I ran!");

      this.dataservice.decreaseJossyItemInInventory
        (productcode).subscribe(subcontractorinventoryitem => {

          console.log(subcontractorinventoryitem);
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });
          this.dataservice.getJossySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              console.log(inventory.subcontractorinventory[index].ordered);
              this.ordered = inventory.subcontractorinventory[index].ordered;
              console.log(this.ordered);
              setTimeout(() => {
                // this.chartData[3]["data"][3]=this.ordered;
                // this.chart.ngOnChanges({

                //})
                this.chart.datasets[0]["data"][0] = this.ordered;

                console.log(this.chart);

              }, 1999);
              console.log(this.chartData[3]);

              for (var data in this.chartData[3][""]) {

                console.log(data);

              }
              this.inventory = inventory.subcontractorinventory;


            })
        })
    }
    if (this.location === "Super Generator Ltd.") {
      console.log("I ran!");

      this.dataservice.decreaseSuperGenItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getSuperGenSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Mayamy Cleaning") {
      console.log("I ran!");

      this.dataservice.decreaseMayamyItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getMayamySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Double H Zerit Inc.") {
      console.log("I ran!");

      this.dataservice.decreaseDoubleHItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDoubleHSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Gaius Commercial and Domestic Cleaners Inc.") {
      console.log("I ran!");
      this.dataservice.decreaseGaiusLeducItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGaiusLeducSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Aredie Cleaning Services Ltd.") {
      console.log("I ran!");
      this.dataservice.decreaseAredieItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAredieSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "DMB Solutions") {
      console.log("I ran!");

           let subcontractorToBeModified={

        name: this.location,
        productcode: productcode

      }
      this.dataservice.decreaseItemInInventory(subcontractorToBeModified)
      .subscribe(inventoryitem =>{

        console.log(inventoryitem);
        if(inventoryitem.success){
        this.inventory=inventoryitem.updatedsubcontractor.veritivcanada;
        console.log(this.inventory);

        }else{
          console.log(inventoryitem.message);
        }
      });
    }
    if (this.location === "G. Welcome Janitorial Ltd.") {
      console.log("I ran!");
      this.dataservice.decreaseGWelcomeItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGWelcomeSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Safe Building Maintenance Inc.") {
      console.log("I ran!");

      this.dataservice.decreaseSafeBuildingItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getSafeBuildingSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Mex Cleaning") {
      console.log("I ran!");

      this.dataservice.decreaseMexCleaningItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getMexCleaningSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Crystal Clean Care") {
      console.log("I ran!");

      this.dataservice.decreaseCrystalItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getCrystalSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Delinagenet Janitorial Services") {
      console.log("I ran!");

      this.dataservice.decreaseDellnagenetItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getDellnagenetSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Gion's Cleaning Services") {
      console.log("I ran!" + this.location);

      this.dataservice.decreaseGionItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getGionSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "1992063 Alberta Ltd.") {
      console.log("I ran!");

      this.dataservice.decreaseAlbertaLtdBonnyItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAlbertaLtdBonnySubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "Anta Janitorial") {
      console.log("I ran!");

      this.dataservice.decreaseAntaItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
          this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

            console.log(indvSubcontractor);

          });

          console.log(inventoryitem);
          this.dataservice.getAntaSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }
    if (this.location === "D Tesfame Cleaning Ltd.") {
      console.log("I ran!");

      this.dataservice.decreaseDTesfameItemInInventory
        (productcode).subscribe(inventoryitem => {
          let indvSubcontractor = {
            name: this.location,

          }
        console.log(inventoryitem.subcontractoritem[0].ordered);

          if (inventoryitem.subcontractoritem[0].ordered == 0) {
            this.dataservice.changeOrderPendingStatusToFalse(indvSubcontractor).subscribe(indvSubcontractor => {

              console.log(indvSubcontractor);

            });


          }




          this.dataservice.getDTesfameSubContractorInventory
            ().subscribe(inventory => {
              console.log(inventory);
              this.inventory = inventory.subcontractorinventory;

            })
        })
    }


    /*this.dataservice.decreasedItemInInventory(productcode).subscribe(inventoryitem => {

      console.log(inventoryitem);

    })*/

    //this.dataservice.getSubContractorInventory().subscribe(subcontractorinventory => {

    // console.log(subcontractorinventory);

    //})

    //this.dataservice.getInventory().subscribe(inventory => {

    // console.log(inventory.inventory);
    //this.inventory = inventory.inventory;

    //})


    /*this.dataservice.decreasedItemInInventory().subscribe(inventoryitem => {


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
   this.dataservice.decreasedItemInInventory().subscribe(inventoryitem => {


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

}
