function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Enero":
    {
        alert("Que Comiences Bien el Año")
        break;
    }
    case "Marzo":
    {
        alert("a Clases")
        break
    }
    case "julio":
    {
        alert("Se Vienen las Vacaciones")
        break;
    }
    case "Diciembre":
    {
        alert("Felices Fiestas")
        break;
    }
    default:
    {
        alert("sin novedades")
    }
} 



}//FIN DE LA FUNCIÓN