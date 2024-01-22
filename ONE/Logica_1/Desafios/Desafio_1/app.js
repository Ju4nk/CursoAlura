//Se utiliza alert para mostrar un mensaje, toda linea de código finaliza con un punto y coma ";"
alert("Bienvenido al sitio web");  
//A la variable nombre, se le asigna un valor de tipo texto: "Luna"
let nombre = "Luna";
  /*A la variable edad, se le asigna un valor numérico: 25, 
  Por lo que a las variables se les puede asignar un valor de cualquier tipo*/
let edad = 25;               
let numeroVentas = 50;
let saldoDisponible = 1000;
let mensajeError = "¡Error! Completa todos los campos";
//las variables pueden ser llamadas por funciones.
alert (mensajeError);

 //se van a reescribir los datos de las variables nombre y edad a través de un prompt                    
nombre = prompt ('Ingresa tu nombre');
edad = prompt ('Ingresa tu edad');
/* if (condición elemento de comparación condición) son condiciones de tipo verdadero/falso
si se cumple la condición inicial se le determinará un comportamiento, de lo contrario, hará otra cosa*/
if (edad >= 18){
// si la variable edad es mayor o igual a 18 mostrará el siguiente mensaje
    alert("¡Puedes obtener tu licencia de conducir!");
}/*else determina que acción debe realizar el código en caso de que la condición no sea verdadera,
    en este caso si la condición no se cumple mostrará otro mensaje.
*/
else{
    alert("eres menor de edad, no puedes conducir");
}


