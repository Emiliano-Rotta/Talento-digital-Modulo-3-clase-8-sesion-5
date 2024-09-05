//Repaso clase pasada

//clases

//programacion orientada a objetos POO

//This??

// var contador = {
//     valor: 0,
//     incrementar: function() {
//         this.valor++
//         return (`Valor actual es : ${this.valor}`)
//     }
// }

// console.log(contador.incrementar())


// Tomar el ejercicio 3 hecho con anterioridad, y hacerlo con clases para poder pasas distintos valores de comienzo: 
// alguno comenzaran en 0; otros en 5 y otros en 10.


// class Contador {
//     constructor(valor) {
//         this.valor = valor
//     }
//     incrementar(){
//         this.valor++
//         console.log(`Valor actual es: ${this.valor}.`)
//     }
// }
 
// const inicioCero = new Contador(0);
// const inicioCinco = new Contador(5);
// const inicioDiez = new Contador(10)


// inicioCero.incrementar()
// inicioCinco.incrementar()
// inicioDiez.incrementar()


// --------------------------


class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido`)
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre)
        this.raza = raza
    }
    ladrar() {
        console.log(`${this.nombre} ladra porque es un ${this.raza} `)
    }
}
class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre)
        this.raza = raza
    }
}



// const perro = new Animal("firulais");
// perro.hacerSonido()
const miPerro = new Perro ("Firulais", "Labrador")
const miGato = new Gato ("gato", "volador")
miPerro.hacerSonido()
miGato.hacerSonido()
miPerro.ladrar()




