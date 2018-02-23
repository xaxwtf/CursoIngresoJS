function Mostrar()
{

	var contador=0;
	var num;
	var positivos=0;
	var negativos=0;
	var contNegativos=0;
	var contPositivos=0;
	var contCeros=0;
	var contNum=0;
	var promPositivos;
	var promNegativos;
	var difPositivosNegativos;
	var cantidadNrosPares=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		num=prompt("ingrese un numero");
		if(num==null)
		{
			break;
		}
		num=parseInt(num);
		if (isNaN(num))
		{
			alert("Error, por favor ingrese Numeros")
			continue;
		}
		contador=++contador
		if(num>0)
		{
			positivos=num+positivos
			contPositivos=++contPositivos
			if(num%2==0)
			{
				cantidadNrosPares=++cantidadNrosPares
			}
		}
		if(num<0)
		{
			negativos=num+negativos
			contNegativos=++contNegativos
			if(num%2==0)
			{
				cantidadNrosPares=++cantidadNrosPares
			}			
		}
		if(num==0)
		{
			contCeros=++contCeros

		}
	
	}
	promPositivos=positivos/contPositivos;
	promNegativos=negativos/contNegativos;
	difPositivosNegativos=positivos-negativos;
	document.write("la cantidad de nros positivos ingresados es de "+contPositivos+" con un valor total de "+positivos+" y un promedio de "+promPositivos+"; y "+contNegativos+" nros negativos con un valor total de "+negativos+" y un promedio de "+promNegativos+";la diferencia entre los positivos y negativos es de"+difPositivosNegativos+"; tambien se ingresaron "+contCeros+" ceros;Tambien se Ingresaron un total de "+cantidadNrosPares+" nros Pares")





}//FIN DE LA FUNCIÓN