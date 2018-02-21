function Mostrar()
{

	var contador=0;
	var min;
	var max;
	var primera;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador=++contador;
		num=prompt("ingrese su Nro");//se piden los nros
		if(num==null)///s
		{
			break;
		}
		num=parseInt(num);///cambia los nros a enteros
		if(isNaN(num))// confirma si no se ah escrito en nros
		{
			alert("Ingrese solamente Nros");
			continue;
		}

		if(contador==1)
		{
			min=num;
			max=num;
		}
		 else if(num<min)
		{
			min=num;
		}
		else if(num>max)
		{
			max=num;
		}
	
	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN