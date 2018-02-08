//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
	var precioTotal;
	precio=prompt("introdusca el costo de su Producto");
	precio=parseInt(precio);
	precioTotal=precio+precio*0.21;
	document.getElementById("importe").value=precioTotal;
	
}

