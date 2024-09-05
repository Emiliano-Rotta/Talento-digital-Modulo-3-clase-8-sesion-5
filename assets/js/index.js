// //Repaso clase pasada

// //clases

// //programacion orientada a objetos POO

// //This??

// // var contador = {
// //     valor: 0,
// //     incrementar: function() {
// //         this.valor++
// //         return (`Valor actual es : ${this.valor}`)
// //     }
// // }

// // console.log(contador.incrementar())


// // Tomar el ejercicio 3 hecho con anterioridad, y hacerlo con clases para poder pasas distintos valores de comienzo: 
// // alguno comenzaran en 0; otros en 5 y otros en 10.


// // class Contador {
// //     constructor(valor) {
// //         this.valor = valor
// //     }
// //     incrementar(){
// //         this.valor++
// //         console.log(`Valor actual es: ${this.valor}.`)
// //     }
// // }

// // const inicioCero = new Contador(0);
// // const inicioCinco = new Contador(5);
// // const inicioDiez = new Contador(10)


// // inicioCero.incrementar()
// // inicioCinco.incrementar()
// // inicioDiez.incrementar()


// // --------------------------


// class Animal {
//     constructor(nombre) {
//         this.nombre = nombre
//     }
//     hacerSonido(){
//         console.log(`${this.nombre} hace un sonido`)
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, raza) {
//         super(nombre)
//         this.raza = raza
//     }
//     ladrar() {
//         console.log(`${this.nombre} ladra porque es un ${this.raza} `)
//     }
// }
// class Gato extends Animal {
//     constructor(nombre, raza) {
//         super(nombre)
//         this.raza = raza
//     }
// }



// // const perro = new Animal("firulais");
// // perro.hacerSonido()
// const miPerro = new Perro ("Firulais", "Labrador")
// const miGato = new Gato ("gato", "volador")
// miPerro.hacerSonido()
// miGato.hacerSonido()
// miPerro.ladrar()




// Ejercicio: 
// Consigna: Crea una clase Producto con una propiedad nombre y un método mostrarInfo que imprima el nombre del producto. Luego, crea una subclase Electronico que extienda de Producto, añadiendo una propiedad marca y un método mostrarDetalle que incluya tanto el nombre como la marca del producto.

// class Producto {
//     constructor(nombre) {
//         this.nombre = nombre
//     }

//     mostrarInfo() {
//         console.log(`Producto ${this.nombre}`)
//     }
// }

// class Electronico extends Producto {
//     constructor(nombre, marca) {
//         super(nombre)
//         this.marca = marca
//     }
//     mostrarDetalle() {
//         console.log(`Producto ${this.nombre}. Marca ${this.marca}`)
//     }
// }


// const computadora = new Electronico("PC - escritorio", "HP")
// computadora.mostrarInfo()
// computadora.mostrarDetalle()




// Ejercicio 5: Herencia múltiple (imitada con composición)
// // Consigna: En JavaScript, no existe herencia múltiple directa, pero se puede imitar usando composición. Crea una clase Vehiculo con un método mover. Luego, crea una clase Aeronave que también tenga un método volar. Crea una clase Avion que imite la herencia de ambas usando composición y que tenga métodos mover y volar.


// class Vehiculo {
//     mover() {
//         console.log("El vehiculo se está moviendo")
//     }
// }

// class Aeronave {
//     volar() {
//         console.log("La aeronave está volando")
//     }
// }

// class Avion {
//     constructor(){
//         this.vehiculo = new Vehiculo()
//         this.Aeronave = new Aeronave()
//     }
//     mover(){
//         this.vehiculo.mover()
//     }
//     volar(){
//         this.Aeronave.volar()
//     }
// }

// const miAvion = new Avion();
// miAvion.mover()
// miAvion.volar()


// Ejercicio: Gestión Básica de Vehículos con Herencia
// Objetivo:
// Crear un sistema sencillo para gestionar vehículos utilizando clases, herencia, y el uso de this en JavaScript.

// Consigna:
// Crear la clase Vehiculo:

// Propiedades:
// marca: La marca del vehículo.
// modelo: El modelo del vehículo.
// anio: El año de fabricación del vehículo.
// Métodos:
// detalles(): Imprime los detalles del vehículo en la consola.
// Crear la subclase Auto que extienda de Vehiculo:

// Propiedades adicionales:
// puertas: El número de puertas del Auto.
// Sobrescribir el método detalles():
// Llama al método detalles() de la clase base y agrega la información del número de puertas.
// Probar las clases:

// Crear una instancia de Vehiculo y otra de Auto.
// Llamar al método detalles() de cada instancia y observar la salida.


class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca,
        this.modelo = modelo,
        this.anio = anio
    }
    detalles(){
        return (`Vehiculo Marca: ${this.marca}, modelo: ${this.modelo}, año ${this.anio}.`)
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, anio, puertas) {
        super(marca, modelo, anio);
        this.puertas = puertas
    }
    // detalles(){
    //     return (`Vehiculo Marca: ${this.marca}, modelo: ${this.modelo}, año ${this.anio}, numero de puertas ${this.modelo}`)
    // }
    detalles(){
        return super.detalles() + (` numero de puertas ${this.puertas}`)
    }
}

const vehiculoUno = new Vehiculo("Renault", "Clio", 2007)

const autoUno = new Auto("Toyota", "Corola", 2018, 4)

console.log(vehiculoUno.detalles())
console.log(autoUno.detalles())