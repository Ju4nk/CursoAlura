//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(mensaje){
    console.log(mensaje);
}
saludo("¡Hola, mundo!")

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let nombre = "camilo";
function saludoNombre(nombre){
    return `Hola ${nombre}`;
}
console.log(saludoNombre(nombre));

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
    let resultado = numero + numero;
    return resultado;
}
console.log(dobleNumero(2));

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(n1,n2,n3){
    let promedio = (n1 + n2 + n3) / 3;
    return `el promedio es ${promedio}`;
}
console.log(promedio(2,5,6));
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(n1,n2){
    if(n2>n1){
        return `${n2} es mayor`;
    }else{
        return`${n1} es mayor`;
    }
}
console.log(mayor(4,6));
/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar
 ese número por sí mismo.*/
function cuadrado(numeroCuadrado){
    resultado = numeroCuadrado * numeroCuadrado;
    return resultado;
}
console.log(cuadrado(3));