/*
  DÍA 4: Condicionales (if, else, switch, ternario)

  Usá solo: variables, if/else, switch, ternario, console.log
  (NO uses funciones ni bucles)

  1 - Declará edad = 25
      if (edad >= 18) mostrá "Mayor de edad", si no "Menor de edad"
      Cambiá la edad a 15 y probá de nuevo

  2 - Declará dia = 3
      Usá switch para mostrar el nombre del día:
      1 → "Lunes", 2 → "Martes", ... 7 → "Domingo"
      default → "Día inválido"

  3 - Declará temperatura = 30
      Usá el operador ternario: temperatura > 25 ? "Hace calor" : "Está fresco"
      Mostrá el resultado

  4 - Declará nota = 85
      if/else if para clasificar:
      90+ → "A", 80+ → "B", 70+ → "C", 60+ → "D", menos → "F"
*/

// --- Escribí tu código acá ---
//1.
let edad = 25;
if(edad>=18){
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
}
//2.
let dia = 3;
switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día inválido');
}
//3.
let temperatura = 30;
console.log(temperatura > 25 ? "Hace calor" : "Está fresco");
//4.
let nota = 85;
if(nota >= 90){
    console.log('A');
} else if(nota >= 80){
    console.log('B');
} else if(nota >= 70){
    console.log('C');
} else if(nota >= 60){
    console.log('D');
} else {
    console.log('F');
}