function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo!="f"&&sexo!="m")
{
    if(sexo==null)
    {
        break;
    }
    sexo=prompt("error, Ingrese Nuevamente el sexo")

}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN