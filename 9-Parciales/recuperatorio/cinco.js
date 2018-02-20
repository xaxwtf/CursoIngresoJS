function Mostrar()
{
    var Mes=prompt("ingrese un Mes");
    switch(Mes)
    {
        case "Enero":
        {
            alert("Comienza el Año");
            break;
        }
        case "Diciembre":
        {
            alert("Se vienen Las Fiestas");
            break;
        }
        default:
        {
            alert("No es Enero ni diciembre")
        }
    }

}
