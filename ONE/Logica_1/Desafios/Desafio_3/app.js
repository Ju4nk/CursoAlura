//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
//se inicializa el contador como variable de alcance globar "var"

/*

var contador = prompt();

//se crea un bucle while que se ejecute mientras contador sea diferente de menor


while(contador < 11){
    //se muestra el valor de contador
    alert(contador);
    //se suma 1 a contador
    contador = contador +1;
}
*/
//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
/*

var contador = prompt();
while (contador > -1){
    alert(contador);
    contador = contador-1;

}
*/
/*Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/
var contador = prompt("ingrese un número");
var numero = 0;
while (numero != contador){
    if (contador < 0){
            numero = numero -1;
    }else{
        numero = numero +1;
    }
    console.log(numero);
}
