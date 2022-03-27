# DAW2_Calculator

Implementación de una calculadora sencilla que soporta operaciones básicas en Angular. Actualmente, las operaciones aceptadas son la de sumar, restar, multiplicar y dividir, permitiendo además la opción de operar con decimales.

La lógica para el proyecto ha sido la siguiente: presionar cualquier tecla de la calculadora llamará a una función que añada a una String el caracter que se encuentre en la tecla. Cuando se presiona la tecla "=" se evalúa la String formada hasta el momento, y, si se trata de una String correcta, es decir, que contiene una o varias operaciones, entonces se opera y modifica. Se han llevado diferentes tests para comprobar el correcto funcionamiento de las funcionalidades añadidas.

Para visitar el proyecto: Se puede descargar el código fuente y visualizarlo a través de la utilización de línea de comandos teniendo Angular instalado siguiendo la siguiente orden:

> ng serve --open

O puede visitar el despliegue del programa en Vercel:

> https://daw-2-calculator.vercel.app/
