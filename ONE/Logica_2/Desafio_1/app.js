titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function consoleUsuario(){
    alert("El botón fue clicado");
}
function promptUsuario(){
   var ciudad = prompt("Dime el nombre de una ciudad de brasil");
   alert (`Estuve en ${ciudad} y me acordé de ti`);
}
function amoJs(){
    alert('amo JS');
}
function suma(){
    let numero1 = parseInt(prompt('Ingresa un número'));
    let numero2 = parseInt(prompt('Ingresa otro número'));
    let resultado = numero1 + numero2;
    alert(`La suma entre ${numero1} y ${numero2} es igual a ${resultado} `);

}
    