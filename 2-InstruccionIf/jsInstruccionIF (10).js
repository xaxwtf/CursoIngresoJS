function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random()*(11-1))+1
	if(nota>=9)
	{alert("exelente su nota es un "+nota)}
	else if(nota>=7)
	{alert("Muy Bien su nota es un "+nota)}
	else if(nota>=4)
	{alert("Bien su nota es un "+nota)}
	else
	{alert("pesimo su nota es "+nota)}
}//FIN DE LA FUNCIÓN