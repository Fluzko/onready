class Vehiculo{
  
  constructor(marca, modelo, precio){
    this.precio = precio.toFixed(2);
    this.marca = marca;
    this.modelo = modelo;
  }

  representation_std_output(child_atts){
    let atts = this.atts_for_representation()
    atts.splice(2, 0, [child_atts[0][0],child_atts[0][1]])
        
    var representation = "";
    atts.forEach(att => {
      representation += this.repr(att[0],att[1]) + ' // '
    });
  
    console.log(representation);
  }


  atts_for_representation(){
    return [
      ["Marca", this.marca],
      ["Modelo", this.modelo],
      ["Precio", this.precio],
    ]
  }

  repr(text, att){
    if (att === this.precio)
      return text + ': $' + att;
    else
      return text + ': ' + att;
  }

  marca_modelo(){
    return this.marca + " " + this.modelo;
  }

}

module.exports = Vehiculo