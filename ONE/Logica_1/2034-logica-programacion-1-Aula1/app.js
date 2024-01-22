
var numeroMaximo = parseInt(prompt('Ingrese el número máximo del juego'));
var numeroSecreto = Math.floor(Math.random()*numeroMaximo+1);

/* Comentarios
    Multilinea */
//comentarios monolinea
var intentos = 1;
var maxIntentos = 5;
console.log(numeroSecreto);
mensajeVeces = ' Intento';
while(numeroUsuario != numeroSecreto){
    var numeroUsuario = parseInt(prompt(`indícame un número entre el 1 y ${numeroMaximo}, por favor`));
    //console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto){
        indicador = 1;
        alert(`Acertaste, el numero es ${numeroUsuario} y te tomó ${ intentos} ${ intentos > 1 ? "Intentos":"Intento"}  `);
        
    }else if(numeroSecreto > numeroUsuario){
        alert ("El número secreto es mayor")
    }else{
        alert("el numero secreto es menor")
     
    }

    if (intentos > maxIntentos){
        alert(`Llegaste al número máximo de intentos ${maxIntentos}`);
        break;
    }
    intentos = intentos + 1;
    mensajeVeces = ' Intentos';
}