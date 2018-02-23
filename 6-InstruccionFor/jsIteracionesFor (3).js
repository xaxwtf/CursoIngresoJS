function Mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");
while(isNaN(repetciones))
{
    repetciones=prompt("ingrese solamente Numeros");
}
repetciones=parseInt(repetciones);
for(var repetciones,mensaje="hola UTN",contador=1;contador<=repetciones;contador++)
{
    console.log(contador+mensaje)
}


}//FIN DE LA FUNCIÓN