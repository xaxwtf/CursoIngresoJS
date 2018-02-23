function Mostrar()
{
    for(var num=0;num!=9; )
    {
        num=prompt("Ingrese un Numero");
        if(num==null)
        {
            break;
        }
        num=parseInt(num);
        while(isNaN(num))
        {
            num=prompt("Ingrese solamente Numeros")
            if(num==null)
            {
                break;
            }
        }
    }
    console.log(num);




}//FIN DE LA FUNCIÓN