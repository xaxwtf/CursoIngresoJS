//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sumanotas=0;
	var sexo;
	var contador=0;
	var promedio;
	var notaBaja;
	var contAprobados;
	do
	{
		nota=prompt("ingrese su Nota");
	}
	while(nota<0||nota>10)
	{
		contador++;
		if(contador>6||nota==null)
		{
			break;
		}
		sumanotas=sumaNotas+nota;
		if(contador==1)
		{
			notaBaja=nota;
		}
		if(nota<notaBaja)
		{
			notaBaja=nota;
		}
		if(nota>6||sexo="v")
		{
			contAprobados++
		}



		
	}


	
}

