//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.


var mensajeBienvenida = "Hola, bienvenido"
console.log(mensajeBienvenida);
//Crea una variable llamada "nombre" y asígnale tu nombre.
//Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.


var nombre = "Juan Camilo"
console.log(`Hola ${nombre}`);
//Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

alert(`!Hola, ${nombre}`)

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
// Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

var lenguaje = prompt('cuál es tu lenguaje de programación favorito?')
console.log(lenguaje);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
//Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada 
//"resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual 
//a [resultado]." en la consola.

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);


//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
// Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada 
//"resultado". Utiliza console.log para mostrar el mensaje
// "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.


let resultadoresta = valor1 - valor2;
console.log(`la diferencia entre ${valor1} y ${valor2} es ${resultadoresta}`);


//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
//utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje 
//apropiado en la consola.


let edad = parseInt(prompt('por favor ingresa tu edad'));
if(edad >= 18){
    console.log(`Tienes ${años} eres mayor de edad`)
}else{
    console.log(`Tienes ${años}, eres menor de edad`);
}

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo,
//negativo o cero utilizando un if-else y muestra el mensaje correspondiente.


let numero = parseInt(prompt("ingresa un valor"));
if (numero == 0){
    console.log("El número es cero");
}else if(numero > 0){
    console.log("es un número positivo");
}else{
    console.log("es un número negativo");
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 0;
while(contador <= 10){
    contador = contador +1;
    console.log(contador);
}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar 
//si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 7;
if(nota>=7){
    console.log("Aprobado");
}else("Reprobado");
//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let num = Math.random();

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let num2 = Math.floor(Math.random()*10+1);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let num3 = Math.floor(Math.random()*1000+1);