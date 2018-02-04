# ROSE INVENTORY SYSTEM SERVER SETTINGS 

## View @ http://tranquil-ridge-90141.herokuapp.com/

## (Updated With Pictures!)

## Node.js Runtime.

## Dependencies

Express: const express = require('express'),

Node.js Http Module: http = require('http'),

Node.js Path Module: path = require('path'),

File System Functions and Variables. (.join, __dirname),

Cross Origin Resouce Sharing: cors = require('cors'),

(Allows for CORS requests.)

Define Routes Path: routes = require('./routes/routes'),

Body Parser: bodyParser = require('body-parser'),

(Allows the server to parse/make usable incoming requests from the client. (json, plain-text, etc.))

Mongoose ODM(Object Data Mapper) for MongoDb: mongoose = require('mongoose')

Database Config File Path As Object: config = require(./config/database);

Passport Authentication Module: passport = require('passport')

# Home Page
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Home%20Page.jpg">

# Client Page
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client List.jpg">

# Client Page Individual Sub-Contractor
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client Page Individual.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client Page Individual Inventory Expenditure Chart.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client Page Individual Inventory.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client Page Individual Inventory Item Top.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Client Page Individual Inventory Item Bottom.jpg">

# Add Client
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Ready.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Add Location.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Remove Location.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Add Store Number.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Add Store Number.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Load Sub-Contractor.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Sub-Contractor Loaded.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Submit Client Are You Sure-.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Add Client Success.jpg">

# Edit Client
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Add New Sub-Contractor Form.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Add New Sub-Contractor Ready.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Add New Sub-Contractor Ready Success.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Edit Sub-Contractor Page.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Edit Sub-Contractor Individual.jpg">


<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Edit Sub-Contractor Remove Individual.jpg">

<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Edit-Sub-Contractor Remove Are You Sure-.jpg">


<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Edit Client Edit-Sub-Contractor Remove Success.jpg">


# Remove Client Page
<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Remove Client.jpg">



<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Remove Client Are You Sure-.jpg">



<img src ="https://github.com/ohrha/ROSE/blob/master/src/assets/img/Remove Client Success.jpg">



# Server Definition

##SERVER DEFINITION STEPS:

Step 1: Connect To Database File.
				-mongoose.connect(config.database)

Step 2: Input A Function For What Happens Upon Connection

				-mongoose.connection.on('connected',()=>{

				console.log('Connected to database ' +config.database)

				}).

Step 3: Input A Function Dictating What Happs Upon Error

				-mongoose.connection.on('error', (err)=>{

					console.log('Database error '+err)

				})

Step 4: Call The Top Level Function Exporte By The const express = require('express') module.:

				-const app = express();

Step 5: Mount Middleware To Express App:

				-app.use(<path><callback>);
				-app.use(express.static(path.join(__dirname,'dist')))
        // WHEN EXPRESS.STATIC IS REQUESTED... PATH.JOIN IS CALLED.

Step 6: Mount Body Parser To Express App:

	    		-app.use(bodyParser.json({limit:'50mb'}));
	    		-app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

Step 7: Mount Passport Middleware:

	    		-app.use(passport.initialize());
	    		-app.use(passport.session());
          
Step 8: Merge Passport With The Passport Config File.

	    		-require('./config/passport')(passport);
          
Step 9: Mount Routes Path to Express App;

	    		-app.use('/routes', routes);

Step 10: Route Specific Http Request To The Specified Path, With The Specified Callback Function.

	    		-app.get('*', (req,res)=>{

	    			res.sendFile(path.join(__dirname, 'dist/index.html'));


	    		})

Step 11: Define the port variable.
	    		
	    		-const port = process.env.PORT || '3000';

Step 12: Define Server Variable And Create Server/Pass The Express App To Node.js.

	    		-const server = http.createServer(app);

Step 13: Start Server!

	   			-server.listen(port, ()=>{

	   				console.log("Server running at "+port);
	   			}])


