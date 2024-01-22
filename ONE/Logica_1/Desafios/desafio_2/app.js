/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/ 


 /* <-- **********quita esta linea para ejecutar lo de abajo**********

 var diaSemana = prompt ('Ingresa el día de la semana');
 if (diaSemana == "Sabado" || diaSemana == "Domingo"){
    alert("Feliz fin de semana");
 } else{
    alert ("Feliz semana");
 }

 //Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
 var numeroUsuario = prompt("Ingresa un número");
 if (numeroUsuario >= 0){
    alert ("Es un número positivo");
 }else{
    alert ("Es un número negativo");
 }

 /*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100,
  muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.". */

  /* <- ********quita esta linea para ejecutar el código de abajo*********


let puntuación = prompt("ingresa el puntaje");
if (puntuación >= 100){
 alert("¡Felicidades, has ganado!");   
}else{
    alert("Intenta nuevamente para ganar.");
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo. */


/*<-- *************Quita esta linea para ejecutar lo de abajo****************

saldoCuenta = 10000;
nombreUsuario = prompt ("Ingrese su nombre, por favor");
alert(nombreUsuario + "El saldo actual de su cuenta es" + saldoCuenta);

/* Pide al usuario que ingrese su nombre mediante un prompt.
 Luego, muestra una alerta de bienvenida usando ese nombre. */

 pedirNombreUsario = prompt("Ingrese su nombre para saludarlo");
 alert ('Hola!' + pedirNombreUsario + ',lo estoy saludando');