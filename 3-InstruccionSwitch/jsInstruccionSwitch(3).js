function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Febrero":
    {
        alert("Este mas no tiene Mas de 29 dias");
        break;
    }
    default:
    {
        alert("este mas tiene 30 dias o mas");
    }
}
//alert (mesDelAño);
	
}//FIN DE LA FUNCIÓN