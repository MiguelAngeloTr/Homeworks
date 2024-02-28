// Crear un arreglo de ejemplo
const myArray = [1, 2, 3, 4];

// at: mira el indice 
const index = 3;
const elementoEnIndice = myArray.at(index);
console.log(`Elemento en el índice ${index}: ${elementoEnIndice}`);

// Crear otro arreglo
const myArray2 = [5, 6, 7, 8];

// -concat : Concadenar los dos arreglos uso de 

const myArray3 = myArray.concat(myArray2);
console.log(`Arreglo concadenado: ${myArray3}`);

// - constructor: Verifica si un objeto es un arreglo 
const k = [];
const elArreglo = k.constructor === Array;
console.log(`¿k es un arreglo? ${elArreglo}`);

// push: Agregar un elemento al final del arreglo 
const myArray4 = [1, 2, 3, 4, 5, 6, 7];
myArray3.push(9);
console.log(`Arreglo con nuevo elemento: ${myArray3}`);

// pop : Eliminar el último elemento del arreglo - pop
const myArray5 = [1, 2, 3, 4, 5, 6, 7];
myArray5.pop();
console.log(`Arreglo sin el último elemento: ${myArray5}`);

// shift: Eliminar el primer elemento del arreglo 
const miArreglo = [1, 2, 3];
miArreglo.shift();
console.log(`Arreglo sin el primer elemento: ${miArreglo}`);

// unshift: Agregar un elemento al principio del arreglo
const miArreglo2 = [2, 3];
miArreglo2.unshift(1);
console.log(`Arreglo con nuevo elemento al principio: ${miArreglo2}`);

// slice: Crear una copia superficial de una porción del arreglo
const miArreglo3 = [1, 2, 3, 4, 5];
const copiaArreglo = miArreglo3.slice(1, 3);
console.log(`Copia del arreglo: ${copiaArreglo}`);

// splice: Modificar el arreglo eliminando, reemplazando o agregando elementos
const miArreglo4 = [1, 2, 3, 4, 5];
miArreglo4.splice(1, 2, 6, 7);
console.log(`Arreglo modificado es: ${miArreglo4}`);

// join : Convertir los elementos del arreglo en una cadena, separados por un delimitador
const miArreglo5 = [1, 2, 3];
const cadena = miArreglo5.join('-');
console.log(`Arreglo como cadena: ${cadena}`);

// map: Crear un nuevo arreglo aplicando una función a cada elemento
const miArreglo6 = [1, 2, 3];
const duplicado = miArreglo6.map((elemento) => elemento * 2);
console.log(`Arreglo duplicado: ${duplicado}`);

// filter: Crear un nuevo arreglo con elementos que cumplen una condición
const miArreglo7 = [1, 2, 3, 4, 5];
const pares = miArreglo7.filter((elemento) => elemento % 2 === 0);
console.log(`Elementos pares: ${pares}`);

// reduce: Reducir los elementos del arreglo a un solo valor mediante una función acumuladora
const miArreglo8 = [1, 2, 3, 4];
const suma = miArreglo8.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`Suma de elementos: ${suma}`);
