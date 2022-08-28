// bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++ ) {
    //Esto es un bucle
    console.log(i);
    
}


let lista = [1, 4, 6, 2, 3, 7, 10, 12]

for (let index = 0; index < lista.length; index++) {
console.log(lista[index] * 2);    
}

// estructura for ... of

for (let valor of lista) {
    console.log(valor);
}


// estructura for each

lista.forEach(valor => {
    console.log(valor);
});

// estructura for in 


let persona = {
    nombre: "David",
    apellido: "Romero",
    edad: "34",
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad";

console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona [propiedad]);
}
