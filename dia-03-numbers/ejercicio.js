/*
  DÍA 3: Numbers, operadores y Math

  Usá solo: variables, operadores (+, -, *, /, %, **), Math, console.log
  (NO uses funciones, condicionales ni bucles — eso viene después)

  1 - Declará a = 15 y b = 4
      Mostrá en consola: suma, resta, multiplicación, división, resto, exponente

  2 - Declará numero = 4.7
      Mostrá: Math.round(numero), Math.ceil(numero), Math.floor(numero), Math.trunc(numero)
      Después con decimal = 3.14159, mostralo con solo 2 decimales usando .toFixed(2)

  3 - Mostrá Math.random()
      Mostrá Math.floor(Math.random() * 6) + 1  (simula un dado)
      Correlo varias veces para ver los números cambiar

  4 - Mostrá Math.max(10, 25, 3, 18, 7)
      Mostrá Math.min(10, 25, 3, 18, 7)
*/

// --- Escribí tu código acá ---

//1- 
let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//2.
const numero = 4.7 
console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.trunc(numero));

const decimal = 3.14159
console.log(decimal.toFixed(2));

//3.
// Math.random() da 0-0.999... → *6 da 0-5.999... → floor redondea abajo (0-5) → +1 = 1-6
console.log(Math.random())
console.log(Math.floor(Math.random() * 6) + 1)

//4.
console.log(Math.max(10, 25, 3, 18, 7));
console.log(Math.min(10, 25, 3, 18, 7));
