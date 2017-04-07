const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

const session = require('express-session');
const flash = require('flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const uuid = require('node-uuid');


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

var db
  
var BudgetTable = [
		{ "id": "test2", "Year": "2016", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
    { "id": "test2", "Year": "2017", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
    { "id": "test2", "Year": "2018", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
    { "id": "test2", "Year": "2019", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" }    
];


MongoClient.connect('mongodb://budgetadmin:budgetadmin@ds145380.mlab.com:45380/wbudget', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get Budget data
app.get('/budgetread', (req, res) => {
  db.collection('bg_Capex_OPex').findOne({id:"test"},(err, result) =>{
    if (err) return console.log(err)
      console.log('read from database')
      res.status(201).send({
        budgettable: result
      })
  })
  /*res.status(201).send(
    {
      budgettable: BudgetTable
    });*/
	console.log('Someone call me')
});

// Save Budget data 
app.post('/budgetsave', (req,res) =>{
 /* var JsonString = JSON.stringify(req.body);
  console.log(JsonString)*/

  db.collection('bg_Capex_OPex').save(req.body, (err, result) => {
    if (err) return console.log(err)
      console.log('saved to database')
      res.status(201).send('Save Complete')
  })
});