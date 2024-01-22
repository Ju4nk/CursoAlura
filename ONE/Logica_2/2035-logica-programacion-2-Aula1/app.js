
let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let maximo_intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("ingresoNumeroUsuario").value);
    console.log(numeroUsuario);
    console.log(numeroSecreto == numeroUsuario);
    if(numeroSecreto == numeroUsuario){
        asignarTextoElemento('p', `Acertaste en: ${intentos} ${(intentos == 1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        reiniciarJuego;
    }else if(numeroSecreto > numeroUsuario){ 
        asignarTextoElemento('p',`el numero secreto es mayor, te ${(intentos === 1)? 'queda' : 'quedan'} ${maximo_intentos} ${(intentos == 1)? 'intento' : 'intentos'}`);
    }else{
        asignarTextoElemento('p', `el numero secreto es menor, te ${(intentos === 1)? 'queda' : 'quedan'} ${maximo_intentos} ${(intentos == 1)? 'intento' : 'intentos'}`); 
    }
    intentos++;
    maximo_intentos--;
    limpiarCaja();
    return;
}
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length>3){
        listaNumerosSorteados = [];
    }else if(listaNumerosSorteados.includes(numeroGenerado)){
    return generaNumeroSecreto();
}else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

}

function limpiarCaja(){
    document.getElementById("ingresoNumeroUsuario").value ="";
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Número Secreto');
    asignarTextoElemento('p', 'Indica Un Número');
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    maximo_intentos = 3;
    return;
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
}
condicionesIniciales();