/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
contadorIntentos=0
contadorIntentos=Math.floor(contadorIntentos);


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   numeroSecreto=Math.floor(Math.random()*(101-1))+1
    //alert(numeroSecreto );
    alert("ha generado un nro secreto")

}

function verificar()
{
  var numeroIngresado;
  numeroIngresado=document.getElementById("numero").value;
  contadorIntentos=++contadorIntentos;
  document.getElementById("intentos").value=contadorIntentos;
  if(numeroIngresado==numeroSecreto)
  {
    alert("Feliciades usted ha Ganado y solo en "+contadorIntentos+" intentos")
  }
  else if(numeroIngresado>numeroSecreto)
  {
    alert("Se Pasó del numero")
  }
  else
  {
    alert("aun le falta para llega al nro")
  }

	
	
}