function Mostrar()
{
  var importe;
  var importeFinal;
  importe=prompt("Introdusca su Importe");
  importe=parseInt(importe);
  importeFinal=importe-importe*0.25;
  document.getElementById("importeFinal").value=importeFinal;

}
