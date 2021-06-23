'use strict';

const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const querystring = require('querystring');
const cors = require('cors');
var mysql = require('mysql');
const app = express();
const port = 3001
const STATIC_DIR = 'statics';
const {parse, stringify} = require('flatted/cjs');


app.locals.port = port;
  app.locals.base = "localhost:3001/";
  
  process.chdir(__dirname);
  
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
  setupRoutes(app);
  app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });
  module.export = app;
  function setupRoutes(app) {
  
  app.get(`/get_first_10`,cors(), doSearch(app));
  app.get(`/get_Char/:id`,cors(),doChar(app));
  app.get(`/get_Search/:id`,cors(),doSearchBar(app));

}



function doSearch(app) {
  return async function(req, res) {
  
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "shubham",
      database:"ABG1"
    });
    
    var client = con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    var result= await con.query("select * from nsn order by rand() limit 15;", function (err, result) {
        if (err) throw err;
        
       
        return res.json(result);
    });
    
  };
  };
  
  function doSearchBar(app) {
  return async function(req, res) {
  	var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "shubham",
      database:"ABG1"
    });
    
    var client = con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  
    let stmt = `select * from nsn where NIIN=?;`;
        let todo =[req.params.id]
    var result= await con.query(stmt,todo,function (err, result) {
        if (err) throw err;
        
      
       
        return res.json(result);
    });
    
    
  };
  };
  
  function doChar(app) {
  return async function(req, res) {
  	var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "shubham",
      database:"ABG1"
    });
    
    var client = con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  
    let stmt = `select * from nsn_characteristics where nsn_characteristics.NIIN=?;`;
        let todo =[req.params.id]
    var result= await con.query(stmt,todo,function (err, result) {
        if (err) throw err;
        
      
      
        return res.json(result);
    });
    
    
  };
  };
  
