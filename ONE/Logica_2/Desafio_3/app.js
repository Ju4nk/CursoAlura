
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function IMC(altura, peso){
    return peso/(altura * altura);
 }
 alert(`Su imc es de ${IMC(1.63, 50)}`);


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let contador = numero - 1;
    let factor = numero;
    let paso = 1;
    let resultado = 1;
    while (contador > 0){
        numero = numero -1;
        factor = factor * numero;
        contador --;   
    }
    console.log(factor);
    return;
}
factorial(4);
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).Para esto, considera la cotización del dólar igual a R$4,80.
function conversiondolares(nDolares){
    let conversionAPesos = nDolares * 3950;
    return `El número de dolares ingresador equivale a ${conversionAPesos} pesos colombianos`
}
conversiondolares(250);


//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    function areaYPerimetro (alto, ancho){
        let area = alto * ancho;
        let perimetro = (ancho * 2) + (alto * 2);
        return `El area de la zona es ${area} y el perimetro es ${perimetro}`;
    }
    console.log(areaYPerimetro(2,5));

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaYPerimetroCircular(radio){
    area = radio * 3.14;
    perimetro = (3.14 * 2) * radio;
    return `el area es ${area} y el permitro es ${perimetro}`; 
}
console.log(areaYPerimetroCircular(4));
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero){
    let multiplicando = 1;
    let resultado = multiplicando * numero; 
    while(multiplicando <= 10){
        resultado = multiplicando * numero;
        console.log(`${multiplicando} * ${numero} = ${resultado}`);
        multiplicando++;
    }    
    return;
    
}
console.log(tablaDeMultiplicar(6));