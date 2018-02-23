function Mostrar()
{ 
    var numIngresado=prompt("ingrese Un Numero");
    var contador=0;
    for(var num=1;num<=numIngresado;num++)
    {
        if(num%2==0)
        {
            console.log(num);
            contador++;
        }
    }
    console.log("Nros pares ="+contador)



}//FIN DE LA FUNCIÓN