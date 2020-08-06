let Vehiculo = require('./vehiculo.js');

class Auto extends Vehiculo{
  constructor(marca,modelo,precio,puertas){
    super(marca,modelo,precio);
    this.puertas = puertas;
  }

  representation_std_output(){
    return super.representation_std_output([['Puertas',this.puertas]])
  }

  repr(text,att){
    return super.repr(text,att)

  }
}

module.exports = Auto