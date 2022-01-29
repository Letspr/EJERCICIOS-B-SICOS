function obtenerEdad()
{
    var edad_introducida;

        var input_edad = document.getElementById ("edad");
        edad_introducida = input_edad.value; 

    return edad_introducida;
}

function rangoEdad(edad)
{
        if ((edad>=0)&&(edad<18))
        {
            window.alert("No es mayor de edad");
        }
        else
        {
            window.alert("Es mayor de edad");
        }
}


function comprobarMayoriaEdad()
{
    console.log("Ha tocado comprobar");
    let edad = obtenerEdad();
    console.log("La edad introducida es " + edad);
    rangoEdad(edad);
}

/*
Obtener número
Comprobar si es mayor de edad
Informar 
*/
