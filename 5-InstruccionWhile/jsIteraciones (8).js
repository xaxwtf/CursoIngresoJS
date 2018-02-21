function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	var num;
	while(respuesta=="si")
	{
		num=prompt("Ingrese Un Numero");
		if(num==null)
		{
			break;
		}
		num=parseInt(num);
		while(isNaN(num))
		{
			num=prompt("ingrese Un Numero");
			num=parseInt(num);
		}
		contador=++contador;
		if(num>0)
		{
			positivo+=num;
		}
		else
		{
			negativo*=num
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN