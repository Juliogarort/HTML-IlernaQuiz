"use strict";

// Función para verificar la edad del usuario
function verificarEdad(edad) {
    if (edad >= 0 && edad <= 3) {
        window.location.href = "https://www.dodot.es/";
    } else if (edad >= 4 && edad <= 6) {
        window.location.href = "https://www.pocoyo.com";
    } else if (edad >= 7 && edad <= 12) {
        window.location.href = "https://www.harrypotter.com";
    } else if (edad >= 13 && edad <= 17) {
        window.location.href = "https://www.lego.com";
    } else {
        // Si la edad no está en ningún rango, permitir el acceso a la web y mostrar mensaje de bienvenida
        alert("¡Bienvenido/a a nuestra web!");
    }
}

// Pedir la edad al usuario
let edadUsuario = prompt("Por favor, ingrese su edad:");

// Convertir la entrada a un número entero
let edad = parseInt(edadUsuario);

// Verificar la edad y redireccionar si es necesario
verificarEdad(edad);
