"use strict";

// Función para validar la edad del usuario
function validarEdad() {
    // Preguntar al usuario su edad
    let edad = prompt("Por favor, ingrese su edad:");

    // Convertir la entrada a un número entero
    edad = parseInt(edad);

    // Verificar si la edad es válida y mayor o igual a 18
    if (isNaN(edad) || edad < 18) {
        // Si la edad no es válida o es menor a 18, redirigir a la página correspondiente según el rango de edad
        if (edad >= 0 && edad <= 3) {
            window.location.href = "https://www.dodot.es/";
        } else if (edad >= 4 && edad <= 6) {
            window.location.href = "https://www.pocoyo.com/";
        } else if (edad >= 7 && edad <= 12) {
            window.location.href = "https://www.harrypotterplatform934.com/";
        } else if (edad >= 13 && edad <= 17) {
            window.location.href = "https://www.lego.com/";
        } else {
            alert("Lo siento, debes ser mayor de edad para acceder a esta página.");
            // Si la edad no es válida, volver a llamar a la función para que el usuario vuelva a ingresar su edad
            validarEdad();
        }
    } else {
        // Si la edad es válida y mayor o igual a 18, mostrar un mensaje de bienvenida
        alert("¡Bienvenido/a a nuestra página web!");
    }
}

// Llamar a la función para validar la edad cuando se carga la página
window.onload = validarEdad;