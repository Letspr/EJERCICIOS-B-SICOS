function obtenerNota()
{
    var nota_introducida;

        var input_nota = document.getElementById ("nota");
        nota_introducida = input_nota.value; 

    return nota_introducida;
}

function rangoNota(nota)
{
        if (nota<5)
        {
            window.alert("SUSPENSO");
        }
        else if ((nota>=5)&&(nota<6))
        {
            window.alert("APROBADO");
        }
        else if ((nota>=6)&&(nota<7))
        {
            window.alert("BIEN");
        }
        else if ((nota>=7)&&(nota<9))
        {
            window.alert("NOTABLE");
        }
        else
        {
            window.alert("SOBRESALIENTE");
        }
        
}


function hallarNota()
{
    console.log("Ha tocado comprobar");
    let nota = obtenerNota();
    console.log("La nota introducida es " + nota);
    rangoNota(nota);
    
}

/*
Obtener número
Hallar el rango de la nota
Informar 
*/
