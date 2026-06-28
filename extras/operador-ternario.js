// Ejercicios de Operador Ternario

// Ejercicio 1: Verificar si un número es par o impar
let numero = 7;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
console.log(`El número ${numero} es ${resultado}`);

// Ejercicio 2: Determinar si una persona es mayor de edad
let edad = 15;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(`La persona es ${mensaje}`);

// Ejercicio 3: Encontrar el mayor de dos números
let a = 10, b = 25;
let mayor = a > b ? a : b;
console.log(`El mayor es: ${mayor}`);

// Ejercicio 4: Calcular descuento según el monto de compra
let monto = 150;
let descuento = monto > 100 ? monto * 0.1 : 0;
console.log(`Monto: $${monto}, Descuento: $${descuento}, Total: $${monto - descuento}`);

// Ejercicio 5: Verificar si un string está vacío
let texto = "";
let estado = texto.length === 0 ? "Vacío" : "Tiene contenido";
console.log(`Estado del texto: ${estado}`);

// Ejercicio 6: Retornar mensaje según el día de la semana
let dia = 3; // 1=Lunes, 2=Martes, etc.
let tipoDia = (dia >= 1 && dia <= 5) ? "Día laboral" : "Fin de semana";
console.log(`El día ${dia} es: ${tipoDia}`);

// Ejercicio 7: Operador ternario anidado - Calcular nota
let nota = 85;
let calificacion = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "F";
console.log(`La nota ${nota} equivale a: ${calificacion}`);

// Ejercicio 8: Verificar si un número es positivo, negativo o cero
let num = -3;
let signo = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero";
console.log(`El número ${num} es ${signo}`);

// Ejercicio 9: Retornar mensaje de saludo según la hora
let hora = 14;
let saludo = hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";
console.log(`${saludo} (son las ${hora} horas)`);

// Ejercicio 10: Verificar si un array tiene elementos
let arr = [];
let tieneElementos = arr.length > 0 ? "El array tiene elementos" : "El array está vacío";
console.log(tieneElementos);

// Ejercicio 11: Calcular el valor absoluto usando ternario
let valor = -15;
let valorAbsoluto = valor < 0 ? -valor : valor;
console.log(`El valor absoluto de ${valor} es: ${valorAbsoluto}`);

// Ejercicio 12: Determinar si un año es bisiesto
let anio = 2024;
let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0 ? "Es bisiesto" : "No es bisiesto";
console.log(`El año ${anio} ${esBisiesto}`);

// Ejercicio 13: Retornar mensaje según el color
let color = "azul";
let mensajeColor = color === "rojo" ? "Peligro" : color === "verde" ? "Avanzar" : color === "amarillo" ? "Precaución" : "Sin señal";
console.log(`Color ${color}: ${mensajeColor}`);

// Ejercicio 14: Verificar si un usuario tiene permisos
let tienePermiso = true;
let accion = tienePermiso ? "Acceso permitido" : "Acceso denegado";
console.log(accion);

// Ejercicio 15: Calcular promedio y determinar si aprueba
let notas = [70, 85, 90, 75];
let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
let estadoAcademico = promedio >= 70 ? "Aprobado" : "Reprobado";
console.log(`Promedio: ${promedio.toFixed(2)} - Estado: ${estadoAcademico}`);