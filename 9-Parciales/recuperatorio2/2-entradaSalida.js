//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
	var precioFinal;
	precio=prompt("Intrusca el costro del Producto");
	precio=parseInt(precio);
	precioFinal=precio*0.21+precio;
	document.getElementById("importe").value=precioFinal;
	
}

