//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1=prompt("Ingrese un Numero");
	var num2=prompt("Ingrese un 2do numero");
	var resultado;
	num1=parseInt(num1);
	num2=parseInt(num2);
	if(num1==num2)
	{
		resultado=num1*num2;
		document.write("su resultado es "+resultado)
	}
	else if(num1>num2)
	{
		resultado=num1-num2;
		document.write("su resultado es "+resultado)
	}
	else
	{
		resultado=num1+num2;
		document.write("su resultado es "+resultado)

	}
	
}

