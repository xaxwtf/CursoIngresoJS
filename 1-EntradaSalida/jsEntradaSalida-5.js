/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	var nombre;
    var edad;
    nombre=document.getElementsById("Elnombre").Value;
    edad=document.getElementsById("Laedad").Value;
    Alert("Usted se llama"+nombre+"y su edad es"+edad);	
}

