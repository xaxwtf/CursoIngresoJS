function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si"
	while(respuesta!="no")
	{
		respuesta=prompt("ingrese Un Nro");
		if(respuesta==null)
		{
			break;
		}
		respuesta=parseInt(respuesta);
		if(isNaN(respuesta))
		{
			alert("Vuelva a Intentar con Nros");
			continue;
		}
		acumulador=acumulador+respuesta;
		contador=++contador;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN