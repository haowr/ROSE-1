//ADD SUBCONTRACTORINVENTORY

 router.post('/tobasubcontractorinventory', function(req,res){


    let subcontractorinventory = new Toba({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasetobasubcontractoreinventory/:productcode', function(req,res){

            TobaContractorInventory.decreaseSubcontractorInventoryItem({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/tobasubcontractoreinventory/:productcode', function(req,res){

            SubContractorInventoryToba.increaseSubcontractorInventoryItemToba({subcontractor: req.params.subcontractor},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorytoba', function(req,res){

            SubContractorInventoryToba.getSubContractorInventoryToba({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //LAUNCH SUBCONTRACTOR INVENTORY 

    router.post('/subcontractorinventorysupergen', function(req,res){

        let subcontractorinventory = new SuperGen({

            productcode: req.body.productcode,
            instock: req.body.instock,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit,
            subcontractor: req.body.subcontractor

        })
        subcontractorinventory.save(function(err, subcontractorinventory){

            if(err){

                res.json({success: false, message:"Subcontractor inventory not added"});


            }else{
                res.json({success: true, message: "Subcontractor inventory item added", subcontractorinventory:subcontractorinventory});
            }

        })

    })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorysupergen/:productcode', function(req,res){

            SuperGenContractorInventory.decreaseSubcontractorInventoryItemSuperGen({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorysupergen/:productcode', function(req,res){

            SuperGenContractorInventory.increaseSubcontractorInventoryItemSuperGen({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorysupergen', function(req,res){

            SuperGenContractorInventory.getSubContractorInventorySuperGen({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //LAUNCH SUBCONTRACTOR INVENTORY 

    router.post('/subcontractorinventorysafebuilding', function(req,res){

        let subcontractorinventory = new SafeBuilding({

            productcode: req.body.productcode,
            instock: req.body.instock,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit,
            subcontractor: req.body.subcontractor

        })
        subcontractorinventory.save(function(err, subcontractorinventory){

            if(err){

                res.json({success: false, message:"Subcontractor inventory not added"});


            }else{
                res.json({success: true, message: "Subcontractor inventory item added", subcontractorinventory:subcontractorinventory});
            }

        })

    })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorysafebuilding/:productcode', function(req,res){

            SafeBuildingContractorInventory.decreaseSubcontractorInventoryItemSafeBuilding({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorysfebuilding/:productcode', function(req,res){

            SafeBuildingContractorInventory.increaseSubcontractorInventoryItemSafeBuilding({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorysafebuilding', function(req,res){

            SafeBuildingContractorInventory.getSubContractorInventorySafeBuilding({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //LAUNCH SUBCONTRACTOR INVENTORY 

    router.post('/subcontractorinventorymexcleaning', function(req,res){

        let subcontractorinventory = new MexCleaning({

            productcode: req.body.productcode,
            instock: req.body.instock,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit,
            subcontractor: req.body.subcontractor

        })
        subcontractorinventory.save(function(err, subcontractorinventory){

            if(err){

                res.json({success: false, message:"Subcontractor inventory not added"});


            }else{
                res.json({success: true, message: "Subcontractor inventory item added", subcontractorinventory:subcontractorinventory});
            }

        })

    })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventory/:productcode', function(req,res){

            SubContractorInventory.decreaseSubcontractorInventoryItem({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorymexcleaning/:productcode', function(req,res){

            MexCleaningContractorInventory.increaseSubcontractorInventoryItemMexCleaning({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorymexcleaning', function(req,res){

            MexCleaningContractorInventory.getSubContractorInventoryMexCleaning({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
   
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorymayamy', function(req,res){


    let subcontractorinventory = new Mayamy({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorymayamy/:productcode', function(req,res){

            MayamyContractorInventory.decreaseSubcontractorInventoryItemMayamy({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorymayamy/:productcode', function(req,res){

            MayamyContractorInventory.increaseSubcontractorInventoryItemMayamy({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorymayamy', function(req,res){

            MayamyContractorInventory.getSubContractorInventoryMayamy({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorymansheel', function(req,res){


    let subcontractorinventory = new Mansheel({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorymansheel/:productcode', function(req,res){

           MansheelContractorInventory.decreaseSubcontractorInventoryItemMansheel({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorymansheel/:productcode', function(req,res){

            MansheelContractorInventory.increaseSubcontractorInventoryItemMansheel({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorymansheel', function(req,res){

            MansheelContractorInventory.getSubContractorInventoryMansheel({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  //ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryknjanitorial', function(req,res){


    let subcontractorinventory = new KnJanitorial({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventoryknjanitorial/:productcode', function(req,res){

            KnJanitorialContractorInventory.decreaseSubcontractorInventoryItemKnJanitorial({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventoryknjanitorial/:productcode', function(req,res){

            KnJanitorialContractorInventory.increaseSubcontractorInventoryItemKnJanitorial({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryknjanitorial', function(req,res){

            KnJanitorialContractorInventory.getSubContractorInventoryKnJanitorial({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryjossy', function(req,res){


    let subcontractorinventory = new Jossy({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventoryjossy/:productcode', function(req,res){

            JossyContractorInventory.decreaseSubcontractorInventoryItemJossy({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventoryjossy/:productcode', function(req,res){

           JossyContractorInventory.increaseSubcontractorInventoryItemJossy({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryjossy', function(req,res){

            JossyContractorInventory.getSubContractorInventoryJossy({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorygwelcome', function(req,res){


    let subcontractorinventory = new GWelcome({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorygwelcome/:productcode', function(req,res){

            GWelcomeContractorInventory.decreaseSubcontractorInventoryItemGWelcome({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorygwelcome/:productcode', function(req,res){

           GWelcomeContractorInventory.increaseSubcontractorInventoryItemGWelcome({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorygwelcome', function(req,res){

            GWelcomeContractorInventory.getSubContractorInventoryGWelcome({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
 
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorygion', function(req,res){


    let subcontractorinventory = new Gion({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorygion/:productcode', function(req,res){

           GionContractorInventory.decreaseSubcontractorInventoryItemGion({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorygion/:productcode', function(req,res){

            GionContractorInventory.increaseSubcontractorInventoryItemGion({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorygion', function(req,res){

            GionContractorInventory.getSubContractorInventoryGion({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
 
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorygaiusleduc', function(req,res){


    let subcontractorinventory = new GaiusLeduc({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorygaiusleduc/:productcode', function(req,res){

            GaiusLeducContractorInventory.decreaseSubcontractorInventoryItemGaiusLeduc({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorygaiusleduc/:productcode', function(req,res){

            GaiusLeducContractorInventory.increaseSubcontractorInventoryItemGaiusLeduc({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorygaiusleduc', function(req,res){

            GaiusLeducContractorInventory.getSubContractorInventoryGaiusLeduc({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })

//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorygaiusrocky', function(req,res){


    let subcontractorinventory = new GaiusRocky({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorygaiusrocky/:productcode', function(req,res){

            GaiusRockyContractorInventory.decreaseSubcontractorInventoryItemGaiusRocky({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventory/:productcode', function(req,res){

            GaiusRockyContractorInventory.increaseSubcontractorInventoryItemGaiusRocky({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorygaiusrocky', function(req,res){

            GaiusRockyContractorInventory.getSubContractorInventoryGaiusRocky({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorygaiusspruce', function(req,res){


    let subcontractorinventory = new GaiusSupruce({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorygaiusspruce/:productcode', function(req,res){

            GaiusSpruceContractorInventory.decreaseSubcontractorInventoryItemGaiusSpruce({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorygaiusspruce/:productcode', function(req,res){

            GaiusSpruceContractorInventory.increaseSubcontractorInventoryItemGaiusSpruce({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorygaiusspruce', function(req,res){

            GaiusSpruceContractorInventory.getSubContractorInventoryGaiusSpruce({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorydtesfame', function(req,res){


    let subcontractorinventory = new DTesfame({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorydtesfame/:productcode', function(req,res){

            DTesfameContractorInventory.decreaseSubcontractorInventoryItemDTesfame({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorydtesfame/:productcode', function(req,res){

            DTesfameContractorInventory.increaseSubcontractorInventoryItemDTesfame({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorydtesfame', function(req,res){

            DTesfameContractorInventory.getSubContractorInventoryDTesfame({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorydoubleh', function(req,res){


    let subcontractorinventory = new DoubleH({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractoreinventorydoubleh/:productcode', function(req,res){

            DoubleHContractorInventory.decreaseSubcontractorInventoryItemDoubleH({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractoreinventorydoubleh/:productcode', function(req,res){

            DoubleHContractorInventory.increaseSubcontractorInventoryItemDoubleH({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorydoubleh', function(req,res){

            DoubleHContractorInventory.getSubContractorInventoryDoubleH({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
   
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorydmb', function(req,res){


    let subcontractorinventory = new DMB({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorydmb/:productcode', function(req,res){

            DMBContractorInventory.decreaseSubcontractorInventoryItemDMB({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorydmb/:productcode', function(req,res){

            DMBContractorInventory.increaseSubcontractorInventoryItemDMB({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorydmb', function(req,res){

            DMBContractorInventory.getSubContractorInventoryDMB({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
 
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorydellnagenet', function(req,res){


    let subcontractorinventory = new Dellnagenet({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorydellnagenet/:productcode', function(req,res){

            DellnagenetContractorInventory.decreaseSubcontractorInventoryItemDellnagenet({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorydellnagenet/:productcode', function(req,res){

            DellnagenetContractorInventory.increaseSubcontractorInventoryItemDellnagenet({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorydellnagenet', function(req,res){

            DellnagenetContractorInventory.getSubContractorInventoryDellnagenet({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
   
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventorycrystal', function(req,res){


    let subcontractorinventory = new Crystal({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventorycrystal/:productcode', function(req,res){

            CrystalContractorInventory.decreaseSubcontractorInventoryItemCrystal({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventorycrystal/:productcode', function(req,res){

           CrystalContractorInventory.increaseSubcontractorInventoryItemCrystal({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventorycrystal', function(req,res){

            CrystalContractorInventory.getSubContractorInventoryCrystal({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryaredie', function(req,res){


    let subcontractorinventory = new Aredie({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventoryaredie/:productcode', function(req,res){

            AredieContractorInventory.decreaseSubcontractorInventoryItemAredie({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventoryaredie/:productcode', function(req,res){

            AredieContractorInventory.increaseSubcontractorInventoryItemAredie({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryaredie', function(req,res){

            AredieContractorInventory.getSubContractorInventoryAredie({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
 
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryanta', function(req,res){


    let subcontractorinventory = new Anta({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventoryanta/:productcode', function(req,res){

            AntaContractorInventory.decreaseSubcontractorInventoryItemAnta({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventoryanta/:productcode', function(req,res){

            AntaContractorInventory.increaseSubcontractorInventoryItemAnta({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryanta', function(req,res){

           AntaContractorInventory.getSubContractorInventoryAnta({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryaak', function(req,res){


    let subcontractorinventory = new AAK({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventoryaak/:productcode', function(req,res){

            AAKContractorInventory.decreaseSubcontractorInventoryItemAAK({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventoryaak/:productcode', function(req,res){

            AAKContractorInventory.increaseSubcontractorInventoryItemAAK({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryaak', function(req,res){

           AAKContractorInventory.getSubContractorInventoryAAK({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
  
//ADD SUBCONTRACTORINVENTORY

 router.post('/subcontractorinventoryalbertaltdbonny', function(req,res){


    let subcontractorinventory = new AlbertaLtdBonny({

        productcode: req.body.productcode,
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        unit: req.body.unit,
        instock: req.body.instock,
        subcontractor: req.body.subcontractor

    })

    subcontractorinventory.save(function(err, subcontractorinventory){

        if(err){
            res.json({success:false, message: "Subcontractorinventory not created..."});
        }else{

            res.json({success: true, message: "Subcontractor Inventory Created...", subcontractorinventory:subcontractorinventory})

        }

    });
 })

//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventoryalbertaltdbonny/:productcode', function(req,res){

            AlbertaLtdBonnyContractorInventory.decreaseSubcontractorInventoryItemAlbertaLtdBonny({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventoryalbertaltdbonny/:productcode', function(req,res){

            AlbertaLtdBonnyContractorInventory.increaseSubcontractorInventoryItemAlbertaLtdBonny({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryalbertaltdbonny', function(req,res){

            AlbertaLtdBonnyContractorInventory.getSubContractorInventoryAlbertaLtdBonny({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })
    //LAUNCH SUBCONTRACTOR INVENTORY 

    router.post('/subcontractorinventoryalbertaltdwhitemud', function(req,res){

        let subcontractorinventory = new AlbertaLtdWhiteMud({

            productcode: req.body.productcode,
            instock: req.body.instock,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit,
            subcontractor: req.body.subcontractor

        })
        subcontractorinventory.save(function(err, subcontractorinventory){

            if(err){

                res.json({success: false, message:"Subcontractor inventory not added"});


            }else{
                res.json({success: true, message: "Subcontractor inventory item added", subcontractorinventory:subcontractorinventory});
            }

        })

    })
//DECEREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/decreasesubcontractorinventoryalbertaltdwhitemud/:productcode', function(req,res){

            AlbertaLtdWhiteMudContractorInventory.decreaseSubcontractorInventoryItemAlbertaLtdWhiteMud({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })

//INCREASE SUBCONTRACTOR INVENTORY ITEM

    router.put('/subcontractorinventoryalbertaltdwhitemud/:productcode', function(req,res){

            AlbertaLtdWhiteMudContractorInventory.increaseSubcontractorInventoryItemAlbertaLtdWhiteMud({productcode: req.params.productcode},{$inc:+1},{new:true}, function(err, subcontractorinventoryitem){

                if(err)throw err;
                if(!subcontractorinventoryitem){
                    res.json({success: false, message: "No Subcontractor inventory item found..."});
                }else{
                    res.json({success: true, message: "Subcontractor inventory found...", subcontractorinventoryitem:subcontractorinventoryitem});
                }

            })
    })


 //GET SUBCONTRACTOR INVENTORY FROM INVENTORY

    router.get('/subcontractorinventoryalbertaltdwhitemud', function(req,res){

            AlbertaLtdWhiteMudContractorInventory.getSubContractorInventoryAlbertaLtdWhiteMud({}, function(err, subcontractorinventory){

                if(err) throw err;
                if(!subcontractorinventory){
                    res.json({success: false, message:"No subcontractorinventory found..."});
                }else{
                    console.log("subcontractorinventory");
                    console.log(subcontractorinventory);
                    res.json({success: true, message:"Subcontractor Inventory foun...", subcontractorinventory:subcontractorinventory});
                }

            })
    })