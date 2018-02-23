function Mostrar()
{ 
    var numIngresado;
    var contDivisores=0;
    numIngresado=prompt("ingrese Un Numero");
    for(var num=0;num<=1000000;num++)
    {
        if(numIngresado%num==0)
        {
            console.log(num)
            contDivisores++
        }

    }
    if(contDivisores==2)
    {
        alert(numIngresado+"  Es un Numero Primo");
    }
    else
    {
        alert(numIngresado+"  No Es un Numero Primo")
    }



}//FIN DE LA FUNCIÓN