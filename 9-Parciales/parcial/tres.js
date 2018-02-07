function Mostrar()
{var largo;
    var ancho;
    var perimetro;
    var alambrado;
    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    perimetro=largo*ancho;
    alambrado=perimetro*3;
    alert("Se necesita "+alambrado+"mtrs de alambrado");


}
