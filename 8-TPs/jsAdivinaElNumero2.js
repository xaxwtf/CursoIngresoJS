/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos=0
contadorIntentos=Math.floor(contadorIntentos);


function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*(101-1))+1
	alert("Se Ha Generado Un Numero secreto")
	 //Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{
	var numeroIngresado;
	numeroIngresado=document.getElementById("numero").value;
	contadorIntentos=++contadorIntentos;
	document.getElementById("intentos").value=contadorIntentos;
	if(numeroIngresado==numeroSecreto&&contadorIntentos>1)
	{
		alert("Felicidades Usted ah Ganando y solo en "+contadorIntentos+" intentos")
	}
	else if(contadorIntentos>10)
	{
		alert("Usted ah perdido")
	}
	else if(numeroIngresado==numeroSecreto)
	{
		alert("Se ah Producido un Error. Vuelva a intentarlo")
	}
	else if(numeroIngresado>numeroSecreto)
	{
		alert("Se ah Pasado del Nro")
	}
	else
	{
		alert("aun le falta para llegar al Nro")
	}

	

}