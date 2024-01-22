//Crea una lista vacía llamada "listaGenerica"

let listaGenerica = []

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'

lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion
function contador(){
    let contador = 0;
    while(contador != lenguagesDeProgramacion.length -1){
        console.log(lenguagesDeProgramacion[contador])
        contador ++;
    }
    return;
}
contador();
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso
function ContadorI(){
    let contadorInverso = lenguagesDeProgramacion.length - 1;
    while(contadorInverso >= 0){
        console.log(lenguagesDeProgramacion);
        contadorInverso--;
    }
    return;
}
ContadorI();
//Crea una función que calcule el promedio de los elementos en una lista de números

let listaNumeros = [];
function llenarListaNumeros(cantidad) {
    let listaNumeros = [];
    while (cantidad > 0) {
        listaNumeros.push(Math.floor(Math.random() * 100));
        cantidad--;
    }
    return listaNumeros;
}
llenarListaNumeros(10);



function promedioNumeros(listaNumeros){
    let contador = 0;
    let paso = 0;
    let suma = 0;
    let promedio = 0;
    while(contador<= listaNumeros.length){
        paso = listaNumeros[contador];
        promedio = promedio + paso;
        contador++;
    }
    promedio = promedio/listaNumeros.length;
    return promedio;
}
promedioNumeros(listaNumeros);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista
function grandePequeño(){
    let contador = 0;
   // while(contador < listaNumeros.length){  }
}


//Crea una función que devuelva la suma de todos los elementos en una lista
    function sumaTodo(){
        let contador = 0;
        let suma = 0;
        let paso = 0;
        while (contador<listaNumeros.length) {
            paso = listaNumeros[contador];
            suma = paso + suma;
            contador ++;
        }
    }

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista
function posicion(param){
    if(lenguagesDeProgramacion.includes(param)){
        return lenguagesDeProgramacion.indexOf(param);
    }else{
        return -1;
    }
}


//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno
lista1 = llenarListaNumeros();
lista2 = llenarListaNumeros();
function sumarListas(lista1, lista2){
    resultado = [];
    indice = 0;
    if(lista1.length == lista2.length && typeof(lista1)==typeof(lista2)){
        while(indice<= lista1.length -1){
            resultado.push(lista1[indice] + lista2[indice])
            indice ++;
        }
         return resultado;   
        }else{
            return "las listas no tienen el mismo tamaño";
        }
    }



//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
function listaCuadrado(lista1){
    let indice = 0;
    while(indice <= lista1.length-1){
        lista1[indice] = lista1[indice]*lista1[indice];
        indice++;
    }
}


