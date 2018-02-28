//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var venta;
	var max;
	var min;
	var primera=true;
	while(contador<7)
	{
		venta=prompt("El valor de su venta");
		if(venta==null)
		{
			break;
		}
		venta=parseInt(venta);
		if(venta<0)
		{
			continue;
		}
		if(primera)
		{
			max=venta;
			min=venta;
			primera=false;
		}
		if(venta>max)
		{
			max=venta;
		}
		else
		{
			if(venta<min)
			{
				min=venta;
			}	
		}
		contador++;
		console.log(contador);
	}	
		alert("el Maximo Ingresado Fue de "+max+" y el minimo "+min)
}

