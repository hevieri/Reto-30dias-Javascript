/*
  DÍA 2: Strings, template literals y métodos de string

  EJERCICIO 1:
  - Creá una variable nombre, poné "juan"
  - Creá una variable apellido, poné "PEREZ"
  1a - Mostrá apellido[0] + apellido.slice(1).toLowerCase()
  1b - Mostrá nombre[0].toUpperCase()
  1c - Mostrá nombre.slice(0, 3)
  1d - Mostrá template literal con todo junto: "Perez, J. (jua)"

  EJERCICIO 2:
  - Creá email = "  usuario@mail.com  "
  2a - Mostrá email.trim()
  2b - Mostrá email.includes("@")
  2c - Mostrá email.endsWith(".com")
  2d - Mostrá email.replace("usuario", "nuevo")

  EJERCICIO 3:
  - Creá texto (frase 5+ palabras) y palabra a buscar
  3a - Mostrá includes
  3b - Mostrá indexOf
  3c - Mostrá split(" ")
  3d - Mostrá cantidad de palabras
*/

// --- TU CÓDIGO ---

let nombre = 'Juan';
let apellido = 'Perez';

console.log(apellido[0] + apellido.slice(1).toLowerCase());
console.log(nombre[0].toUpperCase());
console.log(nombre.slice(0, 3));
console.log(`${apellido[0] + apellido.slice(1).toLowerCase()}, ${nombre[0].toUpperCase()}. (${nombre.slice(0, 3)})`);

let email = ' usuario@mail.com'

console.log(email.includes("@"))
console.log(email.endsWith(".com"))
console.log(email.replace("usuario", "nuevo"))
console.log(email.trim())
