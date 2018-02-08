/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var sumar;
    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    sumar=precio1+precio2+precio3;
    alert("el Costo de la suma total de los Productos es de "+sumar);
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var sumar;
    var Promedio;
    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    sumar=precio1+precio2+precio3;
    promedio=sumar/3;
    alert("el promedio de los Precios es de "+promedio);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var sumar;
    var precioTotal;
    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    sumar=precio1+precio2+precio3;
    precioTotal=sumar*0.21+sumar;
    alert("el Costo total de los Productos mas IVA  es de "+precioTotal);
}