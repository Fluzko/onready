let Vehiculo = require('./vehiculo.js');

class Moto extends Vehiculo{
  constructor(marca,modelo,precio,cilindradas){
    super(marca,modelo,precio);
    this.cilindradas = cilindradas;
  }

  representation_std_output(){
    return super.representation_std_output([['Cilindradas',this.cilindradas]])
  }
    
  repr(text,att){
    if(att === this.cilindradas)
      return super.repr(text,att.toString() + "c")
    else
      return super.repr(text,att)
  }
}

module.exports = Moto