function Mostrar()
{
    var numIngresado=prompt("ingrese un Numero")
    var divisor=0
    var contDivisores=0
    for(var num=1;num<=numIngresado;num++)
    {
        divisor++
        if(numIngresado%divisor==0)
        {
            console.log(divisor)
            contDivisores++
        }
    }
    console.log("la cantidad de divisores es de :"+contDivisores);




}//FIN DE LA FUNCIÓN