function Mostrar()
{var importe;
    var importeFinal;
    importe=prompt("Indique su importe");
    importe=parseInt(importe);
    importeFinal=importe+importe*0.21
    document.getElementById("importeFinal").value=importeFinal
  
}
