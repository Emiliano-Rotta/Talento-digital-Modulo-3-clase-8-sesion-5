// Ejercicio 1: Creación de una subclase simple
// Consigna: Crea una clase Vehiculo con una propiedad marca y un método encender. Luego, crea una clase Auto que extienda de Vehiculo y añada una propiedad modelo. Sobrescribe el método encender para que muestre un mensaje que incluya la marca y el modelo.
// crea una clase Moto que extienda de Vehiculo y ejecute el método encender para que muestre un mensaje que incluya la marca.

class Vehiculo {
    constructor(marca) {
        this.marca = marca

    }
    encender(){
        console.log(`El vehiculo ${this.marca} está encendido`)
    }
}

class Auto extends Vehiculo{
    constructor(marca, modelo) {
        super(marca),
        this.modelo = modelo;
    }
    encender(){
        console.log(`El Auto ${this.marca} ${this.modelo} está encendido`)
    }
}

class Moto extends Vehiculo{
    constructor(marca){
        super(marca)
    }
}


const miAuto = new Auto ("Renault", "Clio")
const miMoto = new Moto ("Honda")
miAuto.encender()
miMoto.encender()