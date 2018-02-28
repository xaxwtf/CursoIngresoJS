/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var numLegajo;
    var nacionalidad=nacionalidad.tolowercase();
    do
    {
        edad=prompt("Indique su edad");
        edad=parseInt(edad);
        if(edad==null)
        {
            break;
        }
    }
    while(edad<18 ||edad > 90)
    {
    }
    document.getElementById("Edad").value=edad;
    do
    {
        sexo=prompt("Indique su Sexo, use f(para femenino)y m (para masculino)")
        if(sexo==null)
        {
            break;
        }
     }
        while(sexo!="f"&&sexo!="m")
        {
        }
    document.getElementById("Sexo").value=sexo;
    do
    {
        estadoCivil=prompt("Indique su estado Civil, 1=soltero 2=casado 3=divorciado 4=viudo")
        estadoCivil=parseInt(estadoCivil)
        if(estadoCivil==null)
        {
            break;
        }
    }
        while(estadoCivil<1||estadoCivil>4)
        {
        }
         switch(estadoCivil)
        {
            case 1:
            {
                document.getElementById("EstadoCivil").value="Soltero";
                break;
            }
            case 2:
            {   
                document.getElementById("EstadoCivil").value="Casado";
                break;
            }
            case 3:
            {
                document.getElementById("EstadoCivil").value="Divorciado"
                break;
            }
            case 4:
            {
                document.getElementById("EstadoCivil").value="Viudo";
                break;
            }
            default:
            {
                document.getElementById("EstadoCivil").value="No Existe"
            }
        } 
    do
    {
        sueldoBruto=prompt("indique su sueldo")
        sueldoBruto=parseInt(sueldoBruto);
        if(sueldoBruto==null)
        {
            break;
        }
    }
    while(sueldoBruto<8000)
    {
    }
    document.getElementById("Sueldo").value=sueldoBruto;
    do
    {
        numLegajo=prompt("Indique el Nro de Legajo")
        numLegajo=parseInt(numLegajo);
        if(numLegajo==null)
        {
            break;
        }
    }
    while(numLegajo<1000)
    {
    }
    document.getElementById("Legajo").value=numLegajo;
    do
    {
        nacionalidad=prompt("Indique su Nacionanlidad, A si es Argentino, E si es extrangero y N si esta Nacionalizado");
        if(nacionalidad==null)
        {
            break;
        }
        while(nacionalidad!="A"&&nacionalidad!="B")

    }
}