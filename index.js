let Printer = require('./src/app.js');
let Auto = require('./src/models/auto.js');
let Moto = require('./src/models/moto.js');


var vehicles = [
  // marca modelo precio puertas cilindradas
  new Auto("Peugeot","206",200000,4),
  new Moto("Honda","Titan",60000, 125),
  new Auto("Peugeot","208",250000,5),
  new Moto("Yamaha","YBR",80500.5,160)
]

new Printer(vehicles).run()