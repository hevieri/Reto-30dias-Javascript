const LECCIONES = [
  {
    dia: 1,
    titulo: 'Variables y tipos de datos',
    subtitulo: 'let, const, typeof y los 7 tipos primitivos',
    contenido: [
      { tipo: 'texto', v: 'JavaScript tiene 3 formas de declarar variables. La regla de oro: usá <code>const</code> por defecto, y <code>let</code> solo cuando necesites reasignar.' },
      { tipo: 'subtitulo', v: 'let y const' },
      { tipo: 'codigo', v: `const nombre = "Ana"   // NO cambia (el nombre es fijo)
let edad = 25         // puede cambiar (cumplís años)
var vieja = "no usar"  // 👎 no se usa más` },
      { tipo: 'texto', v: '<code>const</code> no significa "inmutable", solo que no podés reasignar la variable. Si es un objeto, sus propiedades sí pueden cambiar.' },
      { tipo: 'subtitulo', v: 'Tipos primitivos' },
      { tipo: 'codigo', v: `// string
let saludo = "hola"
let nombre = 'Juan'
let frase = \`Hola, \${nombre}\`  // template literal

// number
let edad = 30
let precio = 19.99
let negativo = -5

// boolean
let esMayor = true
let tienePermiso = false

// null - vacío intencional
let resultado = null

// undefined - no asignado
let algo  // → undefined

// symbol - identificador único
let id = Symbol("id")

// bigint - números enormes
let grande = 12345678901234567890n` },
      { tipo: 'subtitulo', v: 'typeof' },
      { tipo: 'texto', v: 'El operador <code>typeof</code> te dice el tipo de un valor.' },
      { tipo: 'codigo', v: `console.log(typeof 42)        // "number"
console.log(typeof "hola")    // "string"
console.log(typeof true)      // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof null)      // "object" ⚠️ error histórico de JS
console.log(typeof Symbol())  // "symbol"
console.log(typeof 10n)       // "bigint"` },
      { tipo: 'destacado', v: '<strong>⚠️</strong> <code>typeof null</code> devuelve <code>"object"</code>. Es un bug conocido de JavaScript desde sus orígenes, pero no lo corrigieron por compatibilidad.' },
      { tipo: 'subtitulo', v: 'Template literals' },
      { tipo: 'texto', v: 'Usan backticks (`) y permiten interpolación con <code>${variable}</code>.' },
      { tipo: 'codigo', v: `const nombre = "Ana"
const edad = 25
console.log(\`Me llamo \${nombre} y tengo \${edad} años\`)
// → "Me llamo Ana y tengo 25 años"` },
      { tipo: 'subtitulo', v: 'Buenas prácticas' },
      { tipo: 'lista', v: ['Usá nombres descriptivos en camelCase: <code>miVariable</code>', 'Constantes en MAYUSCULA si son valores fijos: <code>MAX_SIZE</code>', 'Siempre inicializá las variables al declararlas', 'Preferí <code>const</code> sobre <code>let</code>', 'Nunca uses <code>var</code>'] },
      { tipo: 'ejercicio', v: 'Abrí dia-01-variables/ejercicio.js y seguí las instrucciones. Declará una variable de cada tipo, usá console.log y typeof.' },
    ]
  },
  {
    dia: 2,
    titulo: 'Strings en profundidad',
    subtitulo: 'Métodos, template literals y manipulación de texto',
    contenido: [
      { tipo: 'texto', v: 'Los strings son secuencias de caracteres. JS tiene muchos métodos incorporados para manipularlos.' },
      { tipo: 'subtitulo', v: 'Métodos principales' },
      { tipo: 'codigo', v: `const s = "  Hola Mundo  "

s.length          // 14 (cuenta espacios)
s.toUpperCase()   // "  HOLA MUNDO  "
s.toLowerCase()   // "  hola mundo  "
s.trim()          // "Hola Mundo"
s.includes("Mun") // true
s.indexOf("Mun")  // 7
s.startsWith("Ho")// true
s.endsWith("do")  // true
s.slice(2, 6)     // "Hola"
s.replace("Mundo", "JS") // "  Hola JS  "
s.split(" ")      // ["", "", "Hola", "Mundo", "", ""]
s.repeat(3)       // "  Hola Mundo    Hola Mundo    Hola Mundo  "` },
      { tipo: 'subtitulo', v: '¿Para qué sirve cada uno?' },
      { tipo: 'lista', v: [
        '<code>.trim()</code> — Saca espacios invisibles del principio y final. Lo usás SIEMPRE que recibís texto de un usuario o archivo. Ej: usuario escribe <code>"  ana@gmail.com  "</code> en un login → sin trim el server busca el email con espacios y falla. Con trim queda <code>"ana@gmail.com"</code> y funciona. Es la causa #1 de bugs boludos.',
        '<code>.includes()</code> — Para saber si un texto contiene algo. Ej: verificar que un email tenga <code>@</code>, o si un artículo contiene una palabra prohibida.',
        '<code>.toUpperCase() / .toLowerCase()</code> — Para comparar strings sin importar mayúsculas. Ej: <code>"Hola".toLowerCase() === "hola".toLowerCase()</code> da true.',
        '<code>.split()</code> — Convierte un string en array. Ej: <code>"Juan,María,Pedro".split(",")</code> → <code>["Juan","María","Pedro"]</code>. O separar una oración en palabras.',
        '<code>.replace()</code> — Para cambiar partes de un texto. Ej: sanitizar inputs, reemplazar palabras.',
        '<code>.slice()</code> — Para extraer pedazos. Ej: obtener los primeros 3 caracteres de un código.',
        '<code>.repeat()</code> — Rellenar líneas, máscaras, separadores visuales.',
        '<code>.indexOf()</code> — Saber en qué posición está algo. Ej: si devuelve <code>-1</code> es que no existe.',
        '<code>.startsWith() / .endsWith()</code> — Validar formatos. Ej: si un archivo termina en <code>.jpg</code> o una URL empieza con <code>https</code>.',
      ] },
      { tipo: 'texto', v: 'Estos métodos <strong>no modifican</strong> el string original (los strings son inmutables en JS), siempre devuelven uno nuevo.' },
      { tipo: 'subtitulo', v: 'Posiciones [ ] — agarrar una letra específica' },
      { tipo: 'codigo', v: `const s = "HOLA"
//       0123
s[0]  // "H"  (primera letra, posición 0)
s[1]  // "O"  (segunda)
s[2]  // "L"
s[3]  // "A"

// Combinar con métodos:
const nombre = "juan"
nombre[0].toUpperCase()  // "J"` },
      { tipo: 'subtitulo', v: 'slice(inicio, cantidad) — cortar un pedazo' },
      { tipo: 'codigo', v: `// slice(desde, cuántos tomar)
const texto = "javascript"
texto.slice(0, 4)   // "java"  (desde 0, tomar 4)
texto.slice(0, 3)   // "jav"   (desde 0, tomar 3)
texto.slice(4, 4)   // "scri"  (desde 4, tomar 4)

// slice(desde) un solo número = desde ahí hasta el final
texto.slice(4)      // "script" (desde 4 hasta el final)
texto.slice(1)      // "avascript" (desde 1 hasta el final)

// Ejemplo práctico: separar primera letra del resto
const apellido = "PEREZ"
apellido[0]         // "P"       (primera letra, con [ ])
apellido.slice(1)   // "EREZ"    (el resto, con slice)
apellido[0] + apellido.slice(1).toLowerCase()  // "Perez"` },
      { tipo: 'subtitulo', v: 'Template literals avanzados' },
      { tipo: 'codigo', v: `// Strings multilínea
const parrafo = \`Esto es
un texto que ocupa
varias líneas\`

// Expresiones
const a = 5, b = 3
console.log(\`\${a} + \${b} = \${a + b}\`) // "5 + 3 = 8"

// Template con función
function saludar(nombre) {
  return \`¡Hola \${nombre}!\`
}` },
      { tipo: 'destacado', v: '<strong>💡</strong> Podés poner cualquier expresión dentro de <code>${}</code>: operaciones aritméticas, ternarios, llamadas a funciones, etc.' },
      { tipo: 'ejercicio', v: 'Abrí dia-02-strings/ejercicio.js. Usá variables, console.log y métodos de string para manipular textos. No necesitás funciones todavía (eso es del día 7).' },
    ]
  },
  {
    dia: 3,
    titulo: 'Numbers, operadores y Math',
    subtitulo: 'Aritmética, Math, redondeo y NaN',
    contenido: [
      { tipo: 'texto', v: 'JS tiene un solo tipo numérico: <code>number</code> (punto flotante de 64 bits). No hay diferencia entre enteros y decimales.' },
      { tipo: 'subtitulo', v: 'Operadores aritméticos' },
      { tipo: 'codigo', v: `const a = 10, b = 3
a + b   // 13
a - b   // 7
a * b   // 30
a / b   // 3.333...
a % b   // 1 (resto/módulo)
a ** b  // 1000 (exponente)
Math.floor(a / b) // 3 (división entera)` },
      { tipo: 'subtitulo', v: 'Redondeo' },
      { tipo: 'codigo', v: `Math.round(4.5)  // 5
Math.round(4.4)  // 4
Math.ceil(4.1)   // 5 (techo)
Math.floor(4.9)  // 4 (piso)
Math.trunc(4.9)  // 4 (saca decimales)
(3.14159).toFixed(2) // "3.14" (string!)
Number((3.14159).toFixed(2)) // 3.14` },
      { tipo: 'subtitulo', v: 'Math útiles' },
      { tipo: 'codigo', v: `Math.random()      // aleatorio 0-1
Math.random() * 10 // aleatorio 0-10
Math.floor(Math.random() * 6) + 1  // dado 1-6

Math.max(1, 5, 3)  // 5
Math.min(1, 5, 3)  // 1
Math.abs(-5)       // 5
Math.pow(2, 3)     // 8` },
      { tipo: 'destacado', v: '<strong>⚠️</strong> <code>0.1 + 0.2 === 0.3</code> es <code>false</code>. Los números en punto flotante tienen imprecisiones. Para dinero, usá enteros (centavos) o librerías como Decimal.' },
      { tipo: 'ejercicio', v: 'Abrí dia-03-numbers/ejercicio.js. Calculadora de propina, conversor de temperatura y análisis de precios.' },
    ]
  },
  {
    dia: 4,
    titulo: 'Condicionales',
    subtitulo: 'if, else, switch, operador ternario',
    contenido: [
      { tipo: 'texto', v: 'Las condicionales permiten ejecutar código según si una condición es verdadera o falsa.' },
      { tipo: 'subtitulo', v: 'if / else' },
      { tipo: 'codigo', v: `const edad = 18

if (edad >= 18) {
  console.log("Mayor de edad")
} else if (edad >= 13) {
  console.log("Adolescente")
} else {
  console.log("Niño")
}` },
      { tipo: 'subtitulo', v: 'Operador ternario' },
      { tipo: 'texto', v: 'Una forma compacta de if/else. Útil para asignaciones rápidas.' },
      { tipo: 'codigo', v: `const edad = 20
const mensaje = edad >= 18 ? "Mayor" : "Menor"
// equivale a:
// let mensaje
// if (edad >= 18) mensaje = "Mayor"
// else mensaje = "Menor"` },
      { tipo: 'subtitulo', v: 'Switch' },
      { tipo: 'codigo', v: `const dia = 3
switch (dia) {
  case 1:
    console.log("Lunes")
    break
  case 2:
    console.log("Martes")
    break
  case 3:
    console.log("Miércoles")
    break
  default:
    console.log("Día inválido")
}` },
      { tipo: 'texto', v: 'Siempre poné <code>break</code> o <code>return</code> en cada case, o si no "cae" al siguiente (fall-through).' },
      { tipo: 'destacado', v: '<strong>💡</strong> Los valores <em>falsy</em> en JS: <code>false</code>, <code>0</code>, <code>""</code> (string vacío), <code>null</code>, <code>undefined</code>, <code>NaN</code>. Todo lo demás es <em>truthy</em>.' },
      { tipo: 'ejercicio', v: 'Abrí dia-04-condicionales/ejercicio.js. Juego adivinar número, validador de contraseña y días de la semana.' },
    ]
  },
  {
    dia: 5,
    titulo: 'Arrays',
    subtitulo: 'Creación, índices y métodos básicos',
    contenido: [
      { tipo: 'texto', v: 'Los arrays son listas ordenadas. Pueden contener cualquier tipo de dato, incluso mezclados.' },
      { tipo: 'codigo', v: `const frutas = ["manzana", "pera", "banana"]
const mixto = [1, "hola", true, null, [1, 2]]

frutas[0]     // "manzana"
frutas[2]     // "banana"
frutas.length // 3
frutas[frutas.length - 1] // "banana" (último)` },
      { tipo: 'subtitulo', v: 'Métodos básicos' },
      { tipo: 'codigo', v: `const arr = [1, 2, 3]

arr.push(4)        // [1,2,3,4]  → agrega al final
arr.pop()          // [1,2]      → saca del final
arr.unshift(0)     // [0,1,2,3]  → agrega al inicio
arr.shift()        // [2,3]      → saca del inicio

arr.includes(2)    // true
arr.indexOf(2)     // 1
arr.join(" - ")    // "1 - 2 - 3"` },
      { tipo: 'texto', v: '<code>push</code> y <code>pop</code> son rápidos (<em>O(1)</em>). <code>unshift</code> y <code>shift</code> son lentos porque mueven todos los índices.' },
      { tipo: 'destacado', v: '<strong>⚠️</strong> <code>const arr = [1,2,3]</code> — aunque sea <code>const</code>, podés modificar su contenido (<code>push</code>, etc.). <code>const</code> evita reasignar la variable, no modificar el array.' },
      { tipo: 'ejercicio', v: 'Abrí dia-05-arrays/ejercicio.js. Lista de compras con agregar/eliminar/buscar, invertir array y frecuencia.' },
    ]
  },
  {
    dia: 6,
    titulo: 'Loops',
    subtitulo: 'for, while, do...while, for...of',
    contenido: [
      { tipo: 'texto', v: 'Los loops permiten ejecutar código repetidamente. Cada tipo tiene su uso ideal.' },
      { tipo: 'subtitulo', v: 'for — cuando sabés cuántas veces' },
      { tipo: 'codigo', v: `for (let i = 0; i < 5; i++) {
  console.log(i)  // 0,1,2,3,4
}

// Recorrer array
const frutas = ["manzana", "pera", "banana"]
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}` },
      { tipo: 'subtitulo', v: 'for...of — recorrer elementos' },
      { tipo: 'codigo', v: `for (const fruta of frutas) {
  console.log(fruta)
}

// con índice usando entries()
for (const [i, fruta] of frutas.entries()) {
  console.log(i, fruta)
}` },
      { tipo: 'subtitulo', v: 'while — cuando no sabés cuántas veces' },
      { tipo: 'codigo', v: `let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// do...while — ejecuta al menos una vez
let x = 0
do {
  console.log(x)
  x++
} while (x < 0)  // imprime 0 una vez` },
      { tipo: 'destacado', v: '<strong>💡</strong> <code>break</code> corta el loop. <code>continue</code> salta a la siguiente iteración. En <code>for</code> clásico podés usar <code>let i</code> o <code>var i</code> — <code>let</code> tiene scope de bloque, <code>var</code> no.' },
      { tipo: 'ejercicio', v: 'Abrí dia-06-loops/ejercicio.js. Tabla de multiplicar, sumar pares, adivinar número, pirámide.' },
    ]
  },
  {
    dia: 7,
    titulo: 'Functions',
    subtitulo: 'Declaración, expresión, arrow, parámetros default',
    contenido: [
      { tipo: 'texto', v: 'Las funciones son bloques de código reutilizable. En JS hay varias formas de definirlas.' },
      { tipo: 'subtitulo', v: 'Function declaration' },
      { tipo: 'codigo', v: `function sumar(a, b) {
  return a + b
}
// Tiene hoisting: podés llamarla antes de definirla` },
      { tipo: 'subtitulo', v: 'Function expression' },
      { tipo: 'codigo', v: `const restar = function(a, b) {
  return a - b
}
// NO tiene hoisting` },
      { tipo: 'subtitulo', v: 'Arrow function' },
      { tipo: 'codigo', v: `const multiplicar = (a, b) => a * b

const saludar = nombre => \`Hola \${nombre}\`

const suma = (a, b) => {
  const resultado = a + b
  return resultado
}` },
      { tipo: 'texto', v: 'Si tiene una sola línea de return, podés omitir las llaves y el <code>return</code> (return implícito). Si tiene un solo parámetro, podés omitir los paréntesis.' },
      { tipo: 'subtitulo', v: 'Parámetros default' },
      { tipo: 'codigo', v: `function saludar(nombre = "amigo") {
  return \`Hola \${nombre}\`
}
saludar()        // "Hola amigo"
saludar("Ana")   // "Hola Ana"` },
      { tipo: 'destacado', v: '<strong>⚠️</strong> Las arrow functions NO tienen su propio <code>this</code>. Lo heredan del contexto donde fueron creadas. Las function declaration sí tienen su propio <code>this</code>.' },
      { tipo: 'ejercicio', v: 'Abrí dia-07-funciones/ejercicio.js. Factorial recursivo, palíndromo, calculadora con callback, saludar con default.' },
    ]
  },
  {
    dia: 8,
    titulo: 'Objetos literales',
    subtitulo: 'Propiedades, métodos, this, objetos anidados',
    contenido: [
      { tipo: 'texto', v: 'Los objetos son colecciones de pares clave-valor. Son la base de casi todo en JS.' },
      { tipo: 'subtitulo', v: 'Crear y acceder' },
      { tipo: 'codigo', v: `const usuario = {
  nombre: "Ana",
  edad: 25,
  "email personal": "ana@mail.com"  // clave con espacio
}

// Acceder
usuario.nombre           // "Ana"
usuario["edad"]          // 25
usuario["email personal"] // "ana@mail.com"

// Modificar
usuario.edad = 26
usuario.pais = "MX"      // agregar nueva propiedad

// Eliminar
delete usuario.edad` },
      { tipo: 'subtitulo', v: 'Propiedades dinámicas' },
      { tipo: 'codigo', v: `const key = "email"
const user = {
  [key]: "ana@mail.com",
  ["id_" + Date.now()]: 123
}` },
      { tipo: 'subtitulo', v: 'Métodos y this' },
      { tipo: 'codigo', v: `const perro = {
  nombre: "Firulais",
  ladrar() {   // método shorthand
    return \`\${this.nombre} dice guau\`
  }
}
perro.ladrar() // "Firulais dice guau"` },
      { tipo: 'texto', v: '<code>this</code> hace referencia al objeto dueño del método. <strong>No funciona igual en arrow functions</strong>.' },
      { tipo: 'ejercicio', v: 'Abrí dia-08-objetos/ejercicio.js. Objeto producto con descuento, carrito de compras, objeto anidado.' },
    ]
  },
  {
    dia: 9,
    titulo: 'Arrays avanzado',
    subtitulo: 'map, filter, reduce — los reyes del array',
    contenido: [
      { tipo: 'texto', v: 'Estos métodos transforman arrays sin mutar el original. Son la base de la programación funcional en JS.' },
      { tipo: 'subtitulo', v: 'map — transformar cada elemento' },
      { tipo: 'codigo', v: `const nums = [1, 2, 3]
const dobles = nums.map(n => n * 2)  // [2, 4, 6]

const users = [{nombre:"Ana"}, {nombre:"Luis"}]
const nombres = users.map(u => u.nombre) // ["Ana", "Luis"]` },
      { tipo: 'subtitulo', v: 'filter — seleccionar elementos' },
      { tipo: 'codigo', v: `const nums = [1, 2, 3, 4, 5]
const pares = nums.filter(n => n % 2 === 0)  // [2, 4]

const users = [
  {nombre:"Ana", edad:22},
  {nombre:"Luis", edad:17}
]
const mayores = users.filter(u => u.edad >= 18) // [Ana]` },
      { tipo: 'subtitulo', v: 'reduce — reducir a un solo valor' },
      { tipo: 'codigo', v: `const nums = [1, 2, 3, 4]
const suma = nums.reduce((acum, n) => acum + n, 0) // 10

const carrito = [{precio:10}, {precio:20}, {precio:30}]
const total = carrito.reduce((acc, item) => acc + item.precio, 0) // 60` },
      { tipo: 'destacado', v: '<strong>💡</strong> <code>map</code> y <code>filter</code> crean un nuevo array. <code>reduce</code> devuelve lo que quieras (número, objeto, string, array...). Ninguno modifica el original.' },
      { tipo: 'ejercicio', v: 'Abrí dia-09-arrays-avanzado/ejercicio.js. map/filter/reduce, encadenamiento, agrupar por ciudad.' },
    ]
  },
  {
    dia: 10,
    titulo: 'Destructuring y Spread',
    subtitulo: 'Extraer y combinar datos fácilmente',
    contenido: [
      { tipo: 'texto', v: 'El destructuring permite extraer datos de arrays y objetos en variables individuales de forma concisa.' },
      { tipo: 'subtitulo', v: 'Destructuring de objetos' },
      { tipo: 'codigo', v: `const user = { id: 1, nombre: "Ana", email: "a@a.com", pais: "MX" }

const { nombre, email } = user
console.log(nombre) // "Ana"

// Renombrar
const { nombre: userName } = user

// Valor por defecto
const { telefono = "sin teléfono" } = user

// Resto
const { id, ...resto } = user
// resto = { nombre: "Ana", email: "a@a.com", pais: "MX" }` },
      { tipo: 'subtitulo', v: 'Destructuring de arrays' },
      { tipo: 'codigo', v: `const colores = ["rojo", "verde", "azul"]
const [primero, segundo] = colores
// primero = "rojo", segundo = "verde"

// Saltar elementos
const [rojo, , azul] = colores

// Valores por defecto
const [a, b, c = "default"] = [1, 2]

// Intercambio
let x = 1, y = 2
;[y, x] = [x, y]` },
      { tipo: 'subtitulo', v: 'Spread operator (...)' },
      { tipo: 'codigo', v: `// Clonar arrays
const original = [1, 2, 3]
const copia = [...original]

// Combinar arrays
const arr1 = [1, 2], arr2 = [3, 4]
const combinado = [...arr1, ...arr2] // [1,2,3,4]

// Clonar objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1, c: 3 } // { a:1, b:2, c:3 }

// Rest params
function sumarTodos(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
sumarTodos(1, 2, 3, 4) // 10` },
      { tipo: 'destacado', v: '<strong>⚠️</strong> Spread hace copia superficial (shallow). Si hay objetos anidados, la referencia se comparte. Usá <code>structuredClone()</code> para deep clone.' },
      { tipo: 'ejercicio', v: 'Abrí dia-10-destructuring/ejercicio.js. Destructuring, spread, rest params, clonado.' },
    ]
  },
  {
    dia: 11,
    titulo: 'Sets y Maps',
    subtitulo: 'Colecciones modernas: sin duplicados, clave-valor',
    contenido: [
      { tipo: 'texto', v: '<code>Set</code> almacena valores <strong>únicos</strong>. <code>Map</code> almacena pares clave-valor donde las claves pueden ser <strong>cualquier tipo</strong> (no solo strings).' },
      { tipo: 'subtitulo', v: 'Set' },
      { tipo: 'codigo', v: `const set = new Set([1, 2, 2, 3, 3, 3])
console.log(set) // Set {1, 2, 3}
set.size        // 3

set.add(4)
set.has(2)      // true
set.delete(1)
set.clear()     // vaciar todo

// Útil: eliminar duplicados
const unicos = [...new Set([1,2,2,3,3,4])] // [1,2,3,4]` },
      { tipo: 'subtitulo', v: 'Map' },
      { tipo: 'codigo', v: `const mapa = new Map()
mapa.set("nombre", "Ana")
mapa.set(42, "el número")
mapa.set({id:1}, "objeto como clave")

mapa.get("nombre")  // "Ana"
mapa.has(42)        // true
mapa.delete(42)
mapa.size           // 2

// Recorrer
for (const [key, value] of mapa) {
  console.log(key, value)
}` },
      { tipo: 'destacado', v: '<strong>💡</strong> A diferencia de objetos, <code>Map</code> preserva el orden de inserción y permite <strong>cualquier tipo</strong> como clave (objetos, funciones, NaN). Para contar frecuencias o asociar datos, <code>Map</code> es mejor que un objeto.' },
      { tipo: 'ejercicio', v: 'Abrí dia-11-sets-maps/ejercicio.js. Set para duplicados, Map para frecuencia, inventario.' },
    ]
  },
  {
    dia: 12,
    titulo: 'DOM Básico',
    subtitulo: 'querySelector, eventos, style, classList',
    contenido: [
      { tipo: 'texto', v: 'El DOM (Document Object Model) es la representación del HTML como objetos que JS puede manipular.' },
      { tipo: 'subtitulo', v: 'Seleccionar elementos' },
      { tipo: 'codigo', v: `document.querySelector("#id")     // por ID
document.querySelector(".clase") // por clase (el primero)
document.querySelector("div")    // por etiqueta
document.querySelectorAll(".clase") // todos (NodeList)

document.getElementById("id")
document.getElementsByClassName("clase")` },
      { tipo: 'subtitulo', v: 'Modificar contenido y estilo' },
      { tipo: 'codigo', v: `const el = document.querySelector("#miElemento")

el.textContent = "Nuevo texto"         // solo texto (seguro)
el.innerHTML = "<b>HTML</b>"           // renderiza HTML (peligro XSS)
el.style.backgroundColor = "blue"
el.style.fontSize = "20px"
el.classList.add("activo")
el.classList.remove("oculto")
el.classList.toggle("visible")         // si está, lo saca; si no, lo pone` },
      { tipo: 'subtitulo', v: 'Eventos' },
      { tipo: 'codigo', v: `const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  console.log("Me hicieron clic")
})

// Eventos comunes: click, dblclick, mouseover, mouseout,
// keydown, keyup, submit, change, input, scroll, load` },
      { tipo: 'ejercicio', v: 'Abrí y ejecutá dia-12-dom-basico/index.html. Seguí las instrucciones en script.js.' },
    ]
  },
  {
    dia: 13,
    titulo: 'DOM: Lista de Tareas',
    subtitulo: 'Crear elementos, appendChild, formularios',
    contenido: [
      { tipo: 'texto', v: 'Hoy aplicamos lo aprendido para construir una To-Do List dinámica.' },
      { tipo: 'subtitulo', v: 'Crear elementos' },
      { tipo: 'codigo', v: `const li = document.createElement("li")
li.textContent = "Nueva tarea"
li.classList.add("item")

const ul = document.querySelector("#lista")
ul.appendChild(li)       // al final
ul.prepend(li)           // al inicio
ul.insertBefore(li, referencia) // antes de otro elemento

// Eliminar
li.remove()              // moderno
ul.removeChild(li)       // clásico` },
      { tipo: 'subtitulo', v: 'Obtener valor de input' },
      { tipo: 'codigo', v: `const input = document.querySelector("#input")
input.value          // texto actual
input.value = ""     // limpiar
input.placeholder    // texto de ayuda` },
      { tipo: 'destacado', v: '<strong>💡</strong> Cuando creás elementos dinámicos, cada uno necesita su propio event listener o podés usar delegación: un solo listener en el padre que detecta qué hijo recibió el clic con <code>event.target</code>.' },
      { tipo: 'ejercicio', v: 'Abrí dia-13-dom-lista/index.html. Implementá la To-Do List completa en script.js.' },
    ]
  },
  {
    dia: 14,
    titulo: 'Mini Proyecto: Reloj Digital',
    subtitulo: 'setInterval, Date, formatos 12h/24h',
    contenido: [
      { tipo: 'texto', v: 'Hoy construimos un reloj digital en tiempo real. Aplicamos Date, setInterval y manipulación del DOM.' },
      { tipo: 'subtitulo', v: 'Date' },
      { tipo: 'codigo', v: `const ahora = new Date()
ahora.getHours()    // 0-23
ahora.getMinutes()  // 0-59
ahora.getSeconds()  // 0-59
ahora.getDate()     // día del mes 1-31
ahora.getMonth()    // 0-11 (enero=0!)
ahora.getFullYear() // 2026
ahora.getDay()      // 0-6 (domingo=0)

// Formatear a 2 dígitos
String(5).padStart(2, "0")  // "05"
String(12).padStart(2, "0") // "12"` },
      { tipo: 'subtitulo', v: 'Formato 12h' },
      { tipo: 'codigo', v: `const h = ahora.getHours()
const ampm = h >= 12 ? "PM" : "AM"
const h12 = h % 12 || 12  // 0 → 12` },
      { tipo: 'subtitulo', v: 'Actualizar cada segundo' },
      { tipo: 'codigo', v: `setInterval(() => {
  // código que se ejecuta cada 1000ms
}, 1000)` },
      { tipo: 'ejercicio', v: 'Abrí dia-14-reloj-digital/index.html. Implementá el reloj en script.js.' },
    ]
  },
  {
    dia: 15,
    titulo: 'Clases y POO básica',
    subtitulo: 'class, constructor, herencia, private fields',
    contenido: [
      { tipo: 'texto', v: 'JS tiene clases (azúcar sintáctica sobre prototipos). Son la forma moderna de hacer POO.' },
      { tipo: 'subtitulo', v: 'Clase básica' },
      { tipo: 'codigo', v: `class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  hacerSonido() {
    return \`\${this.nombre} hace un sonido\`
  }
}

const perro = new Animal("Firulais", 3)
perro.hacerSonido() // "Firulais hace un sonido"` },
      { tipo: 'subtitulo', v: 'Herencia' },
      { tipo: 'codigo', v: `class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad)  // llamar al constructor padre
    this.raza = raza
  }

  hacerSonido() {
    return \`\${this.nombre} dice guau\`
  }

  moverse() {
    return "corriendo"
  }
}` },
      { tipo: 'subtitulo', v: 'Campos privados (#)' },
      { tipo: 'codigo', v: `class Cuenta {
  #saldo  // privado

  constructor(saldoInicial) {
    this.#saldo = saldoInicial
  }

  depositar(monto) {
    this.#saldo += monto
  }

  obtenerSaldo() {
    return this.#saldo
  }
}` },
      { tipo: 'ejercicio', v: 'Abrí dia-15-clases/ejercicio.js. Clases Animal, Perro, Gato y CuentaBancaria con campo privado.' },
    ]
  },
  {
    dia: 16,
    titulo: 'Manejo de errores',
    subtitulo: 'try/catch, throw, errores personalizados',
    contenido: [
      { tipo: 'texto', v: 'Los errores no deben romper tu programa. Con <code>try/catch</code> los capturás y manejás.' },
      { tipo: 'subtitulo', v: 'try/catch/finally' },
      { tipo: 'codigo', v: `try {
  // código que puede fallar
  const data = JSON.parse("{ invalido }")
} catch (error) {
  console.log("Error:", error.message)
} finally {
  console.log("Siempre se ejecuta")
}` },
      { tipo: 'subtitulo', v: 'Lanzar errores' },
      { tipo: 'codigo', v: `function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero")
  }
  if (typeof a !== "number") {
    throw new TypeError("El argumento no es número")
  }
  return a / b
}` },
      { tipo: 'subtitulo', v: 'Error personalizado' },
      { tipo: 'codigo', v: `class ValidationError extends Error {
  constructor(campos) {
    super("Error de validación")
    this.name = "ValidationError"
    this.campos = campos
  }
}

throw new ValidationError(["nombre", "email"])` },
      { tipo: 'destacado', v: '<strong>💡</strong> Capturá errores donde podés manejarlos. No captures todo en el lugar más alto "por si acaso". El <code>finally</code> se ejecuta siempre, haya o no error (útil para limpiar recursos).' },
      { tipo: 'ejercicio', v: 'Abrí dia-16-errores/ejercicio.js. Función dividir segura, validador de usuario, parseJSON.' },
    ]
  },
  {
    dia: 17,
    titulo: 'Timers: setTimeout y setInterval',
    subtitulo: 'Cronómetro con control de tiempo',
    contenido: [
      { tipo: 'texto', v: 'JS tiene dos funciones principales para trabajar con tiempo: <code>setTimeout</code> (una vez) y <code>setInterval</code> (cada cierto tiempo).' },
      { tipo: 'subtitulo', v: 'setTimeout' },
      { tipo: 'codigo', v: `// Ejecuta después de 2 segundos
const timeoutId = setTimeout(() => {
  console.log("Pasaron 2 segundos")
}, 2000)

// Cancelar antes de que se ejecute
clearTimeout(timeoutId)` },
      { tipo: 'subtitulo', v: 'setInterval' },
      { tipo: 'codigo', v: `// Ejecuta cada 1 segundo
const intervalId = setInterval(() => {
  console.log("Tick", Date.now())
}, 1000)

// Detener
clearInterval(intervalId)` },
      { tipo: 'texto', v: 'Para medir tiempo exacto, usá <code>Date.now()</code> o <code>performance.now()</code>. No confíes en la precisión de <code>setInterval</code> (puede atrasarse).' },
      { tipo: 'codigo', v: `const inicio = Date.now()

// después de 3 segundos
const transcurridos = Date.now() - inicio // en ms` },
      { tipo: 'ejercicio', v: 'Abrí dia-17-timers/index.html. Implementá el cronómetro con iniciar/pausar/reiniciar.' },
    ]
  },
  {
    dia: 18,
    titulo: 'Promesas',
    subtitulo: 'Callbacks, Promise, then/catch, Promise.all',
    contenido: [
      { tipo: 'texto', v: 'Las promesas representan un valor futuro. Son la base del asincronismo moderno en JS.' },
      { tipo: 'subtitulo', v: 'Crear una Promise' },
      { tipo: 'codigo', v: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true
    if (exito) {
      resolve("Datos cargados")
    } else {
      reject(new Error("Error al cargar"))
    }
  }, 1000)
})` },
      { tipo: 'subtitulo', v: 'Consumir una Promise' },
      { tipo: 'codigo', v: `promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))
  .finally(() => console.log("Terminó"))` },
      { tipo: 'subtitulo', v: 'Promise.all, .race, .allSettled' },
      { tipo: 'codigo', v: `const p1 = fetch("/api/usuarios")
const p2 = fetch("/api/posts")
const p3 = fetch("/api/comentarios")

// Esperar TODAS
Promise.all([p1, p2, p3])
  .then(([u, p, c]) => console.log("Todo listo"))

// La primera que se resuelva
Promise.race([rapida, lenta])
  .then(ganadora => console.log("Ganó:", ganadora))

// Todas, fallen o no
Promise.allSettled([p1, p2, p3])
  .then(resultados => resultados.forEach(r => console.log(r.status)))` },
      { tipo: 'ejercicio', v: 'Abrí dia-18-promesas/ejercicio.js. Simular carga con callbacks, convertir a promesas, Promise.all y race.' },
    ]
  },
  {
    dia: 19,
    titulo: 'Async/Await',
    subtitulo: 'Fetch a API real, try/catch asíncrono',
    contenido: [
      { tipo: 'texto', v: '<code>async/await</code> es azúcar sintáctica sobre promesas. Hace el código asíncrono se lea como síncrono.' },
      { tipo: 'subtitulo', v: 'async/await' },
      { tipo: 'codigo', v: `async function cargarUsuarios() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!res.ok) throw new Error("HTTP " + res.status)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error:", error)
    return []
  }
}

// Las funciones async SIEMPRE devuelven una Promise
cargarUsuarios().then(u => console.log(u))` },
      { tipo: 'subtitulo', v: 'Fetch API' },
      { tipo: 'codigo', v: `fetch(url, {
  method: "GET", // POST, PUT, DELETE
  headers: { "Content-Type": "application/json" },
  // body: JSON.stringify({ nombre: "Ana" })
})

// Verificar respuesta
const res = await fetch(url)
if (!res.ok) throw new Error(res.statusText)
const data = await res.json() // o .text() o .blob()` },
      { tipo: 'ejercicio', v: 'Abrí dia-19-async-await/index.html. Cargá usuarios desde JSONPlaceholder y mostralos en pantalla.' },
    ]
  },
  {
    dia: 20,
    titulo: 'Módulos ES6',
    subtitulo: 'import, export, separación en archivos',
    contenido: [
      { tipo: 'texto', v: 'Los módulos permiten dividir el código en archivos independientes que importan/exportan funcionalidad.' },
      { tipo: 'subtitulo', v: 'Exportar' },
      { tipo: 'codigo', v: `// utils.js

// Export nombrado
export const PI = 3.1416

export function sumar(a, b) {
  return a + b
}

// Export default (solo UNO por archivo)
export default class Usuario {
  constructor(nombre) { this.nombre = nombre }
}` },
      { tipo: 'subtitulo', v: 'Importar' },
      { tipo: 'codigo', v: `// main.js

// Import nombrado (con llaves)
import { PI, sumar } from "./utils.js"

// Import default (sin llaves, nombre libre)
import Usuario from "./utils.js"

// Import todo como namespace
import * as Utils from "./utils.js"
Utils.sumar(1, 2)

// Import dinámico
const modulo = await import("./utils.js")` },
      { tipo: 'texto', v: 'En HTML, el script debe tener <code>type="module"</code> para usar imports/exports.' },
      { tipo: 'ejercicio', v: 'Abrí dia-20-modulos/. Separá el código en utils.js, constants.js, dom.js y main.js.' },
    ]
  },
  {
    dia: 21,
    titulo: 'Mini Proyecto: Buscador de Películas',
    subtitulo: 'Fetch a OMDb, manejo de estados, búsqueda',
    contenido: [
      { tipo: 'texto', v: 'Hoy consumimos una API real de películas. Necesitás una API Key gratuita de <a href="https://www.omdbapi.com/" target="_blank" style="color:#f7df1e">omdbapi.com</a>.' },
      { tipo: 'subtitulo', v: 'Estructura del fetch' },
      { tipo: 'codigo', v: `const API_KEY = "tu_api_key"
const query = "batman"
const url = \`https://www.omdbapi.com/?s=\${query}&apikey=\${API_KEY}\`

async function buscar(query) {
  const res = await fetch(url)
  const data = await res.json()
  if (data.Response === "False") {
    return []  // sin resultados
  }
  return data.Search  // array de películas
}` },
      { tipo: 'texto', v: 'Cada película tiene: <code>Title</code>, <code>Year</code>, <code>Poster</code>, <code>imdbID</code>, <code>Type</code>.' },
      { tipo: 'ejercicio', v: 'Abrí dia-21-buscador-peliculas/index.html. Registrate en OMDb, poné tu API Key en script.js y hacé funcionar el buscador.' },
    ]
  },
  {
    dia: 22,
    titulo: 'localStorage y JSON',
    subtitulo: 'Persistencia en el navegador',
    contenido: [
      { tipo: 'texto', v: '<code>localStorage</code> guarda datos en el navegador del usuario. Persiste aunque cierre la pestaña o el navegador.' },
      { tipo: 'subtitulo', v: 'API básica' },
      { tipo: 'codigo', v: `// Guardar (solo strings)
localStorage.setItem("nombre", "Ana")

// Leer
localStorage.getItem("nombre") // "Ana"

// Eliminar
localStorage.removeItem("nombre")

// Vaciar todo
localStorage.clear()` },
      { tipo: 'texto', v: 'Solo guarda strings. Para objetos, usá <code>JSON.stringify</code> y <code>JSON.parse</code>.' },
      { tipo: 'codigo', v: `const usuario = { nombre: "Ana", edad: 25 }

// Guardar objeto
localStorage.setItem("usuario", JSON.stringify(usuario))

// Leer objeto
const guardado = JSON.parse(localStorage.getItem("usuario"))

// Con manejo de errores
try {
  const data = JSON.parse(localStorage.getItem("key") || "null")
} catch {
  // JSON inválido o corrupto
}` },
      { tipo: 'destacado', v: '<strong>⚠️</strong> <code>localStorage</code> tiene ~5-10MB de límite. <code>sessionStorage</code> es igual pero se borra al cerrar la pestaña. No guardes datos sensibles (contraseñas, tokens).' },
      { tipo: 'ejercicio', v: 'Abrí dia-22-localstorage/ejercicio.js. Extendé la To-Do List con persistencia, historial de búsquedas y preferencias.' },
    ]
  },
  {
    dia: 23,
    titulo: 'Eventos Avanzados',
    subtitulo: 'Delegación, formularios, validación en tiempo real',
    contenido: [
      { tipo: 'texto', v: 'Hoy vemos eventos más avanzados: delegación, eventos de teclado, y validación de formularios en vivo.' },
      { tipo: 'subtitulo', v: 'Delegación de eventos' },
      { tipo: 'codigo', v: `// En vez de un listener por cada item
// poné UNO en el padre
document.querySelector("#lista").addEventListener("click", (e) => {
  const item = e.target.closest("li")
  if (!item) return
  console.log("Clickeaste:", item.textContent)
})` },
      { tipo: 'subtitulo', v: 'Eventos de formulario' },
      { tipo: 'codigo', v: `form.addEventListener("submit", (e) => {
  e.preventDefault()  // evitar recarga de página
  // validar y enviar...
})

input.addEventListener("input", (e) => {
  console.log(e.target.value) // cada tecla
})

input.addEventListener("blur", (e) => {
  // cuando pierde el foco
})` },
      { tipo: 'subtitulo', v: 'Eventos de teclado' },
      { tipo: 'codigo', v: `document.addEventListener("keydown", (e) => {
  console.log(e.key)       // "Enter", "Escape", "a"...
  console.log(e.ctrlKey)   // true si Ctrl está presionado

  if (e.key === "Escape") {
    cerrarModal()
  }
})` },
      { tipo: 'ejercicio', v: 'Abrí dia-23-eventos-avanzados/index.html. Validación en tiempo real de nombre, email y password.' },
    ]
  },
  {
    dia: 24,
    titulo: 'Closures',
    subtitulo: 'Funciones que recuerdan su ámbito',
    contenido: [
      { tipo: 'texto', v: 'Un closure es una función que "recuerda" las variables del ámbito donde fue creada, incluso después de que ese ámbito haya terminado.' },
      { tipo: 'subtitulo', v: 'Ejemplo básico' },
      { tipo: 'codigo', v: `function crearContador() {
  let count = 0  // variable privada

  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    obtener: () => count
  }
}

const contador = crearContador()
contador.incrementar() // 1
contador.incrementar() // 2
contador.obtener()     // 2
// count NO es accesible desde fuera` },
      { tipo: 'subtitulo', v: 'Memoización' },
      { tipo: 'codigo', v: `function memoize(fn) {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const resultado = fn(...args)
    cache.set(key, resultado)
    return resultado
  }
}

const fib = memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2))
fib(40) // rápido gracias al caché` },
      { tipo: 'subtitulo', v: 'once — ejecutar solo una vez' },
      { tipo: 'codigo', v: `function once(fn) {
  let ejecutado = false
  return (...args) => {
    if (ejecutado) return
    ejecutado = true
    return fn(...args)
  }
}

const init = once(() => console.log("Inicializado"))
init() // "Inicializado"
init() // no hace nada` },
      { tipo: 'ejercicio', v: 'Abrí dia-24-closures/ejercicio.js. Contador privado, memoize, banca privada, once.' },
    ]
  },
  {
    dia: 25,
    titulo: 'Expresiones Regulares',
    subtitulo: 'Regex en JS: test, match, replace',
    contenido: [
      { tipo: 'texto', v: 'Las expresiones regulares son patrones para buscar y manipular texto. En JS se escriben entre <code>/patron/flags</code>.' },
      { tipo: 'subtitulo', v: 'Sintaxis básica' },
      { tipo: 'codigo', v: `const regex = /hola/i  // i = case insensitive

regex.test("Hola mundo")     // true
regex.test("Adiós")          // false

"¡Hola Mundo!".match(/[A-Z]/g) // ["H", "M"]
"Hola hola".match(/hola/gi)    // ["Hola", "hola"]

"Mi email es a@a.com".match(/\\S+@\\S+\\.\\S+/)
// ["a@a.com"]` },
      { tipo: 'subtitulo', v: 'Patrones comunes' },
      { tipo: 'codigo', v: `/[A-Z]/          // mayúscula
/[a-z]/          // minúscula
/[0-9]/          // dígito
/\\d/             // dígito (equivale a [0-9])
/\\s/             // espacio, tab, salto
/\\w/             // letra, dígito, _
/.+/              // uno o más caracteres
/a{2,4}/          // entre 2 y 4 aes
/^inicio/         // empieza con "inicio"
/fin$/            // termina con "fin"` },
      { tipo: 'subtitulo', v: 'replace' },
      { tipo: 'codigo', v: `"Hola Ana".replace(/Ana/, "Carlos") // "Hola Carlos"

// Limpiar input
const limpio = texto
  .replace(/<[^>]*>/g, "")  // quitar HTML tags
  .replace(/\\s+/g, " ")    // múltiples espacios → uno
  .trim()` },
      { tipo: 'ejercicio', v: 'Abrí dia-25-regex/ejercicio.js. Validar email, teléfono, extraer URLs, sanitizar input.' },
    ]
  },
  {
    dia: 26,
    titulo: 'this: call, apply, bind',
    subtitulo: 'Controlar el contexto de una función',
    contenido: [
      { tipo: 'texto', v: 'El valor de <code>this</code> depende de <strong>cómo</strong> se llama la función. Con <code>call</code>, <code>apply</code> y <code>bind</code> podés controlarlo.' },
      { tipo: 'subtitulo', v: 'call y apply' },
      { tipo: 'codigo', v: `function saludar(saludo) {
  return \`\${saludo}, soy \${this.nombre}\`
}

const ana = { nombre: "Ana" }
const luis = { nombre: "Luis" }

saludar.call(ana, "Hola")   // "Hola, soy Ana"
saludar.apply(luis, ["Hey"]) // "Hey, soy Luis"
// call: argumentos separados por coma
// apply: argumentos en array` },
      { tipo: 'subtitulo', v: 'bind' },
      { tipo: 'codigo', v: `const saludarAna = saludar.bind(ana, "Hola")
saludarAna()  // "Hola, soy Ana"
// bind devuelve NUEVA función con el this fijado` },
      { tipo: 'subtitulo', v: 'Ejemplo práctico: préstamo de métodos' },
      { tipo: 'codigo', v: `// Usar métodos de array en array-like
function sumarArgs() {
  const args = Array.prototype.slice.call(arguments)
  return args.reduce((a, b) => a + b, 0)
}

// bind en event listeners
const boton = {
  texto: "Enviar",
  handleClick() {
    console.log(\`Clickeaste: \${this.texto}\`)
  }
}
document.querySelector("button")
  .addEventListener("click", boton.handleClick.bind(boton))` },
      { tipo: 'ejercicio', v: 'Abrí dia-26-call-bind/ejercicio.js. Logger con bind, préstamo de métodos, bind en eventos.' },
    ]
  },
  {
    dia: 27,
    titulo: 'Debugging con DevTools',
    subtitulo: 'Breakpoints, call stack, console avanzado',
    contenido: [
      { tipo: 'texto', v: 'Saber debuggear es tan importante como saber programar. Las DevTools del navegador son tu mejor aliado.' },
      { tipo: 'subtitulo', v: 'Console avanzado' },
      { tipo: 'codigo', v: `console.log("normal")
console.error("error")    // rojo
console.warn("advertencia") // amarillo
console.table([{a:1},{a:2}]) // formato tabla
console.group("Grupo")
  console.log("dentro")
console.groupEnd()
console.time("timer")
  // código a medir
console.timeEnd("timer") // "timer: 12.34ms"` },
      { tipo: 'subtitulo', v: 'Breakpoints' },
      { tipo: 'lista', v: ['Abrí DevTools (F12)', 'Andá a la pestaña Sources', 'Hacé clic en el número de línea para poner un breakpoint', 'Recargá la página/ejecutá el código', 'Inspeccioná variables, call stack, scope', 'Usá F10 (step over) y F11 (step into)', 'Mirá la pestaña Scope para ver variables locales/globales'] },
      { tipo: 'destacado', v: '<strong>💡</strong> En el código podés poner <code>debugger;</code> para que el navegador pause automáticamente ahí (como un breakpoint). Es muy útil para debuggear sin tener que buscar la línea manualmente.' },
      { tipo: 'ejercicio', v: 'Abrí dia-27-debugging/ejercicio.js. Hay 4 errores ocultos. Usá DevTools para encontrarlos y corregirlos.' },
    ]
  },
  {
    dia: 28,
    titulo: 'Proyecto Final — Planificación',
    subtitulo: 'Elegir proyecto, definir alcance, preparar estructura',
    contenido: [
      { tipo: 'texto', v: 'Llegamos a la recta final. Elegí UNO de estos proyectos para demostrar todo lo aprendido.' },
      { tipo: 'subtitulo', v: 'Opciones de proyecto final' },
      { tipo: 'lista', v: [
        '<strong>App del Clima</strong> — fetch a OpenWeatherMap, búsqueda por ciudad, íconos, geolocalización',
        '<strong>Juego del Ahorcado</strong> — palabras aleatorias, teclado virtual, canvas, contador de intentos',
        '<strong>Dashboard de Notas</strong> — CRUD completo, colores, etiquetas, persistencia, búsqueda',
        '<strong>E-commerce SPA</strong> — catálogo con filtros, carrito, total, localStorage, formulario de checkout'
      ]},
      { tipo: 'texto', v: '<strong>Hoy:</strong> elegí proyecto, definí funcionalidades (mínimo 4), dibujá un mockup, creá la estructura de archivos.' },
      { tipo: 'ejercicio', v: 'Abrí proyecto-final/ y dejanos tu elección. Definí el alcance antes de escribir código.' },
    ]
  },
  {
    dia: 29,
    titulo: 'Proyecto Final — Implementación',
    subtitulo: 'Escribir el código completo',
    contenido: [
      { tipo: 'texto', v: 'Hoy es el día de escribir código. Ya tenés la planificación del día 28, ahora ejecutás.' },
      { tipo: 'subtitulo', v: 'Guía de implementación' },
      { tipo: 'lista', v: [
        '1. Escribí el HTML base (estructura semántica)',
        '2. Agregá CSS básico (que se vea decente)',
        '3. Implementá la funcionalidad principal',
        '4. Agregá las funcionalidades extra que definiste',
        '5. Testeá cada parte a medida que avanzás',
        '6. Si te trabás, dividí el problema en partes más chicas'
      ]},
      { tipo: 'destacado', v: '<strong>💡</strong> No busques la perfección. Que funcione primero, después mejorás. Usá console.log para verificar datos en cada paso. Si algo no funciona, debuggeá con DevTools.' },
      { tipo: 'ejercicio', v: 'Implementá el proyecto que elegiste. Escribí el código y probalo.' },
    ]
  },
  {
    dia: 30,
    titulo: 'Proyecto Final — Entrega y Repaso',
    subtitulo: 'Pulir, desplegar y celebrar',
    contenido: [
      { tipo: 'texto', v: 'Último día. Pulí los detalles, asegurate de que todo funcione, y hacé un repaso de todo el camino.' },
      { tipo: 'subtitulo', v: 'Checklist de entrega' },
      { tipo: 'lista', v: [
        '✅ Todas las funcionalidades funcionan',
        '✅ Los errores se manejan (try/catch, estados vacíos)',
        '✅ El código está limpio y legible',
        '✅ Git commit con mensaje descriptivo',
        '✅ (Opcional) Subilo a GitHub Pages o Netlify'
      ]},
      { tipo: 'subtitulo', v: 'Repaso de lo aprendido' },
      { tipo: 'lista', v: [
        'Fundamentos: variables, tipos, operadores, condicionales',
        'Estructuras: arrays, objetos, loops, funciones',
        'Arrays: map, filter, reduce, destructuring, spread',
        'DOM: seleccionar, modificar, eventos, crear elementos',
        'Asíncrono: promesas, async/await, fetch, APIs',
        'Persistencia: localStorage, JSON',
        'POO: clases, herencia, closures',
        'Debugging: DevTools, breakpoints, console'
      ]},
      { tipo: 'destacado', v: '<strong>🎉 ¡Felicitaciones!</strong> Completaste los 30 días de JavaScript. Esto no termina acá — seguí programando todos los días, aunque sea 15 minutos. La constancia es lo que importa. ¡Ahora a por el siguiente proyecto!' },
      { tipo: 'ejercicio', v: 'Terminá tu proyecto, hace un commit final, y si querés compartilo. ¡Lo lograste! 🚀' },
    ]
  },
]
