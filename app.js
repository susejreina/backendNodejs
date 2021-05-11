'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas


// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

//CORS

//Rutas
app.get('/',(req,res)=>{
    res.status(200).send("hola mundo");
});

app.get('/test/:name',(req,res)=>{
    let nombre = req.params.name;
    res.status(200).send({"hola":"ok",nombre});
});
//exportar
module.exports = app;