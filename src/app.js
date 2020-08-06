class Printer{
  constructor(vehicles){
    this.vehicles = vehicles;
  }

  run(){
    this.vehicles_repr();
    this.separator()
    this.statistics("Y")
    this.separator()
  }


  vehicles_repr(){
   this.vehicles.forEach(vehicle => {
      vehicle.representation_std_output()
   });
  }
  
  statistics(letter){
    let sorted_vehicles_by_price = this.vehicles.sort((a,b)=> (a.precio) - (b.precio) ) 

    console.log(
      "Vehiculo mas caro: " + sorted_vehicles_by_price[sorted_vehicles_by_price.length -1].marca_modelo()
    )

    console.log(
      "Vehiculo mas barato: " + sorted_vehicles_by_price[0].marca_modelo()
    )

    let vehicle_with_letter = this.vehicle_contains(letter)
    console.log(
      "Vehiculo que contiene en el modelo la letra \'" + letter + "\': " + vehicle_with_letter.marca_modelo() + " $" + vehicle_with_letter.precio 
    )

    this.separator()

    console.log("Vehiculos ordenados por precio de mayor a menor")

    sorted_vehicles_by_price
    .reverse()
    .forEach(vehicle => {
      console.log(vehicle.marca_modelo())
    })
  }
  
  separator(){
    console.log("=============================");
  }


  vehicle_contains(letter){
    return this.vehicles.filter(vehicle => vehicle.modelo.toLowerCase().includes(letter.toLowerCase()))[0]
  }

}

module.exports = Printer