"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

  const invitado1 = prompt("Ingrese el nombre del primer invitado:")
  const invitado2 = prompt("Ingrese el nombre del segundo invitado:")
  const invitado3 = prompt("Ingrese el nombre del tercer invitado:") 
  function NombresInvitados(invitado1, invitado2, invitado3) {
    console.log("Primer invitado:", invitado1);
    console.log("Segundo invitado:", invitado2);
    console.log("Tercer invitado:", invitado3);
  }

NombresInvitados(invitado1, invitado2, invitado3);
