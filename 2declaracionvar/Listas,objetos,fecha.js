// Listas, array o arreglo

const lista = [1, "hola", undefined, null]

const lista2 = new Array (1, "hola", true, undefined, null)

const lista3 = new Array(3)
lista3[0]

const lista4 = [lista, lista2, lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xioami",
    isWhite: false,
    conatactos: ["Gorka", "Martin", "Raul"],
    tarjeta: {
        marca: "Sony",
        almacenamiento: 32,
    }

}

console.log(movil.tarjeta.marca);


//Fechas
//Libreerias de apoyo moment.js

const now = new Date ()
console.log(now);

const fecha_milis = new Date (10) //utilizando los milisegundos
console.log(fecha_milis);


const fecha_cadena = new Date ("march 25 2020")
console.log(fecha_cadena);


const fecha_valores = new Date(2022, 2, 15)

console.log(fecha_valores);

const dia = now.getDate()
const mes = now.getMonth()
const anyo = now.getFullYear()
console.log(dia, mes,anyo);