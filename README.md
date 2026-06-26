# 🚀 30 Días de JavaScript

Reto práctico para aprender JavaScript desde cero en 30 días. Un concepto por día, con ejercicios y mini proyectos.

---

## 📅 Semana 1 — Fundamentos

| Día | Tema | Ejercicio |
|-----|------|-----------|
| **1** | Variables (`let`, `const`), tipos de datos, `console.log` | Declarar variables de cada tipo y mostrarlas en consola |
| **2** | Strings, template literals, métodos de string | Manipular textos con métodos de string, template literals y console.log |
| **3** | Numbers, operadores, `Math` | Calculadora de propina + conversor °C ↔ °F |
| **4** | Condicionales: `if`, `else`, `switch`, ternario | Juego de adivinar número + validador de contraseñas |
| **5** | Arrays: creación, índices, métodos básicos (`push`, `pop`, `shift`, `unshift`, `includes`, `indexOf`) | Lista de compras: agregar/eliminar/buscar items |
| **6** | Loops: `for`, `while`, `do...while`, `for...of` | Tabla de multiplicar + sumar solo pares de un array |
| **7** | Functions: declaración, expresión, arrow functions, parámetros default | Función que calcule factorial + función que valide palíndromos |

## 📅 Semana 2 — Arrays, Objetos y DOM

| Día | Tema | Ejercicio |
|-----|------|-----------|
| **8** | Objetos literales, propiedades, métodos, `this` | Crear objeto `producto` con métodos y calcular total de carrito |
| **9** | Arrays avanzado: `map`, `filter`, `reduce` | Transformar array de números, filtrar mayores a X, sumar total |
| **10** | Destructuring, spread operator, rest params | Combinar objetos, extraer propiedades, función con args variables |
| **11** | Sets y Maps | Eliminar duplicados de array + contar frecuencia de palabras |
| **12** | DOM: `querySelector`, `textContent`, eventos (`click`) | Botón que cambia el color de fondo al hacer clic |
| **13** | DOM: crear elementos, `appendChild`, `classList` | Lista de tareas (To-Do) desde un input |
| **14** | Mini Proyecto 1 | **Reloj digital** con formato 12h/24h |

## 📅 Semana 3 — JS Moderno y Asíncrono

| Día | Tema | Ejercicio |
|-----|------|-----------|
| **15** | Clases y POO básica | Clase `Animal` → `Perro` y `Gato` con herencia |
| **16** | Manejo de errores: `try/catch`, `throw` | Validador de formulario con errores personalizados |
| **17** | `setTimeout`, `setInterval`, `Date` | Cronómetro con botones iniciar/pausar/reiniciar |
| **18** | Callbacks y Promesas `fetch` | Simular carga de datos con retardo |
| **19** | `async/await`, `fetch` a API real | Obtener usuarios de https://jsonplaceholder.typicode.com/users y mostrarlos |
| **20** | Módulos ES6 (`import/export`) | Separar un proyecto en módulos (utils, main, constants) |
| **21** | Mini Proyecto 2 | **Buscador de películas** con fetch a OMDb API |

## 📅 Semana 4 — Proyectos y Buenas Prácticas

| Día | Tema | Ejercicio |
|-----|------|-----------|
| **22** | `localStorage`, `sessionStorage`, JSON | Guardar/cargar tareas del To-Do en localStorage |
| **23** | Eventos avanzados: delegación, teclado, formularios | Formulario con validación en tiempo real |
| **24** | Closures y Scope | Contador privado + memoización de funciones |
| **25** | Expresiones regulares básicas | Validar email, teléfono, extraer URLs |
| **26** | `this`: `call`, `apply`, `bind` | Crear helper de logging con bind |
| **27** | Debugging con DevTools | Debuggear un código roto paso a paso |
| **28** | Proyecto Final — Planificación | Definir idea, mockup, estructura de archivos |
| **29** | Proyecto Final — Implementación | Escribir el código completo |
| **30** | Proyecto Final — Entrega y repaso | Pulir, desplegar y repasar conceptos clave |

---

## 🎯 Proyectos a construir

### Semana 2 — Reloj Digital
- Muestra hora actualizada cada segundo
- Botón para alternar entre formato 12h/24h
- Diseño limpio con CSS básico

### Semana 3 — Buscador de Películas
- Input de búsqueda + botón
- Fetch a OMDb API (gratuita, registrarse en https://www.omdbapi.com)
- Muestra: título, año, póster, rating
- Manejo de estados: loading, error, sin resultados

### Semana 4 — Proyecto Final (elige uno)
- **App del Clima**: fetch a OpenWeatherMap con búsqueda por ciudad
- **Juego del Ahorcado**: palabras aleatorias, canvas o letras, contador
- **Dashboard de Notas**: notas con título, color, fecha, persistencia
- **E-commerce SPA**: catálogo + carrito + total, todo con JS vanilla

---

## 🛠️ Tecnologías y herramientas

- **Solo JavaScript vanilla** (sin frameworks)
- Node.js para probar scripts de consola
- Navegador para proyectos con DOM
- VS Code + Live Server (recomendado)

---

## 📂 Estructura del repositorio

```
javascript/
├── dia-01-variables/
│   └── ejercicio.js
├── dia-02-strings/
│   └── ejercicio.js
├── ...
├── dia-14-reloj-digital/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── dia-21-buscador-peliculas/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── proyecto-final/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ✅ Cómo usar este reto

1. Cada día lee el tema, entiéndelo, luego **escribe el ejercicio** por tu cuenta
2. No copies y pegues — escribe cada línea tú mismo
3. Si te atascas >15 min, busca pistas (no la solución completa)
4. Al terminar el ejercicio, intenta agregar una **mejora propia**
5. Commit cada día: `git commit -m "Día X - [tema]"`

---

## 📚 Recursos recomendados

- [MDN Web Docs — JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Eloquent JavaScript (gratis)](https://eloquentjavascript.net)
- [JavaScript.info](https://javascript.info)
- [30 Days of JavaScript (Asabeneh)](https://github.com/Asabeneh/30-Days-Of-JavaScript)
- [JavaScript30 (Wes Bos)](https://javascript30.com)

---

> **Consigna**: 1 hora por día, 30 días. No importa si te toma más tiempo, lo importante es la constancia. ¡Vamos! 💪
