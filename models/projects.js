'use strict';

var mongoose = require('mongoose');

var schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: [String],
    year: Number
});

module.exports = mongoose.model('Projects',ProjectSchema);
// Primer parámetro es el nombre del modelo que queremos almacenar
// Segundo parámetros es el esquema
// Lo guarda todo en minúsculas y en plural.