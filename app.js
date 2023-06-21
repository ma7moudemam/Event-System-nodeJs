require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const morgan = require('morgan');


/* ********************** Routes **************************** */

const departmentRouter  = require("./Routers/DepartmentRouter");
const eventsRouter = require("./Routers/eventRouter");
const studentsRouter = require("./Routers/StudentRouter");
const speakerRouter = require("./Routers/SpeakerRouter");
// const userAuthentication = require('./Routers/authenticationRouter');

const app = express();

/* *********************** Connect to DB ********************** */

mongoose.connect(process.env.DB_URL)
		.then(()=>{
			console.log("DB Connected......");

			/* ********************* Listen to PORT ****************************** */
			app.listen(process.env.PORT || 8080 , ()=>{
				console.log("I am Listening ...........");
			})
			
		})
		.catch(error=>{
			console.log("DB problem");
			console.log(error);
		})


// MW
// Method  , URL

app.use(morgan("method :url"));


app.use((req, res , next) => {
	console.log(req.method, req.url);
	next();
});

/* *************************** Cors Domain ***********************  */

app.use(cors());


/*
app.use((req ,res , next)=>{
	res.header("Access-Control-Allow-Origin",'*');
	res.header("Access-Control-Allow-Method","GET,POST,DELETE,PUT,OPTIONS");
	res.header("Access-Control-Allow-Headers","Content-Type,Authorization");
	next();
})
 */

/* ************************ Authorization MW  *************************** */

// Second MW
app.use((req , res , next )=>{
	if(true){
		console.log("Authorized");
		next();
	}
	else{
		console.log("Not Authorized");
		next(new Error("Not Authorized"));
	}
})


/* *************************** BODY PARSER ************************************* */

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

/* *************************** Routes (End Points) ******************************* */

app.use("/departments", departmentRouter);
app.use("/events", eventsRouter);
app.use("/speakers" , speakerRouter);
app.use("/students" , studentsRouter);


/* ********************  Not Found MW  *************************** */

app.use((req , res)=>{
	res.status(404).json({data:"Not Found"})
})

/* ************************* Error MW ******************************* */
app.use((error ,req , res , next)=>{

	let status = error.status || 500;
	res.status(status).json({Error:error+""});
}) 