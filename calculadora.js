'use strict';

var params = process.argv.slice(2);

let numero1 = parseFloat(params[0]);
let numero2 = parseFloat(params[1]);

let plantilla = `
La suma es ${numero1 + numero2}
La resta es ${numero1 - numero2}
La multiplicación es ${numero1 * numero2}
La división es ${numero1 / numero2}`;

console.log(plantilla);