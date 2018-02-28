//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes=prompt("Indique el Mes del año en el que se Encuentra");
	switch(mes)
	{
		case "Enero":
		case "Febrero":
		{
			alert("veranito");
			break;
		}
		default:
		{
			alert("estraño Enero y Febrero")
		}

	}
	
}

