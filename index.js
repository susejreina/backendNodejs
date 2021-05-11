'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portafolio")
        .then(()=>{
            console.log("Conexión a base de datos mongoose perfect");
            //Creación de mi servidor
            app.listen(port,()=>{
                console.log("conexión al servidor levantado");
            });
        })
        .catch((error)=>{
            console.log(error);
        });