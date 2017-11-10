//Almacena en un arreglo a los elementos de la clase "numero"
var casilla = document.getElementsByClassName('numero');
//Itera sobre el arreglo que nos da con los elementos de la clase numero
for (var i = 0; i < casilla.length; i++) {
  casilla[i].addEventListener("click",mostrarNumero);
}
//esta función escribe el nuemo valor para cada casilla con clase numero
function mostrarNumero() {
    this.innerHTML = 1;
}
//Esta variable almacena a los elementos de la clase "mina"
var mina = document.getElementsByClassName('mina');
//Itera sobre el arreglo que nos da con los elementos de la clase mina
for (i = 0; i < mina.length; i++) {
  mina[i].addEventListener("click",mostrarMina);
}
//Itera para mostrar las posisciones de todas las minas
function mostrarMina() {
  for (i = 0; i < mina.length; i++) {
  mina[i].innerHTML = "X";
  }

  //Envía un mensaje de que el juego está terminado
  var mensaje = document.getElementById('termina');
  mensaje.innerHTML = "Game Over!"
}

//Guarda el arreglo de los elementos con clase vacia
var vacia = document.getElementsByClassName('vacia');
//Itera el arreglo para agregarle la funcion a cada elemento del arreglo
for (var i = 0; i < vacia.length; i++) {
  vacia[i].addEventListener("click",cambiarColor);
}
//Ejecuta la funcion para cambiar el color a cada celda con la clase vacia
function cambiarColor() {
    this.style.backgroundColor = "blue";
}

//Le asigna el evento al boton reiniciar
var boton = document.getElementById('boton');
boton.addEventListener("click",reiniciarJuego);
//Funcion para recargar el juego
function reiniciarJuego() {
    location.reload();
}
