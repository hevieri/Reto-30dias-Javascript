/*
  DÍA 1: Variables, tipos de datos y console.log

  Instrucciones:
  1. Declara una variable con cada tipo de dato primitivo:
     - string
     - number
     - boolean
     - null
     - undefined
     - symbol
     - bigint
  2. Usa console.log para mostrar cada una con un mensaje descriptivo
  3. Usa typeof para verificar el tipo de cada una
  4. Declara const para valores que no cambian y let para los que sí

  +++ EJERCICIO EXTRA +++
  - Crea una variable con tu nombre completo usando template literals
  - Muestra un mensaje tipo: "Hola, me llamo [nombre] y tengo [edad] años"
*/

// --- Tu código aquí ---

//1
let nombre = 'Erika';
let edad = '29 años';
let esMayor = true;
let resultado = null;
let coso = undefined;
let id = Symbol("id")
let grande = 26565626565n;
// 💡 CORRECCIÓN: id debería ser Symbol, no string: Symbol("id")
// 💡 CORRECCIÓN: grande debería ser BigInt (necesita n al final): 26565626565n
// 💡 edad es string pero mejor number (sin comillas): 29
// 💡 tip: nombre no cambia → const; edad sí cambia → let

//2
console.log(nombre);
console.log(edad)
console.log(esMayor)
console.log(resultado)
console.log(coso)
console.log(id)
console.log(grande)
// 💡 Faltó un mensaje descriptivo en cada uno.
//    Ej: console.log("nombre:", nombre)

//3
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esMayor)
console.log(typeof resultado)
console.log(typeof undefined)
console.log(typeof id)
console.log(typeof Symbol())
console.log(typeof 10n)
// 💡 En los primeros 2 estás verificando literales ('erika', 54),
//    no tus variables (nombre, edad). Debería ser typeof nombre, typeof edad.

//4 Hola, me llamo [nombre] y tengo [edad] años
let nombre= 'Erika'
let apellido='Helfenstern'
let edad= 29

console.log('Hola, me llamo '+ nombre + ' ' + apellido + ' y tengo ' + edad + ' años.')
// 💡 También podés usar template literal (hace lo mismo):
//    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)